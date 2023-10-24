import User from "../DB_models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async (req, res, next) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    try {
        const newUser = new User({
            name: req.body.name,
            password: hash,
            email: req.body.email,
            contact_no: req.body.contact_no
        })
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (err) {
        next(err)
    }
}

export const login = async (req, res, next) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    try {
        let user = await User.findOne({ name: req.body.name });
        if(!user){
            return next(creatError(404, "User Not found"))
        }
        
        const isPasswordsValid =await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordsValid){
            return next(creatError(400, "Incorrect Password"))
        }

        const token = jwt.sign({ id:user._id }, process.env.JWT)
        const {password, ...otherDetails} = user._doc
        res.cookie("access token", token, {
            httpOnly: true,
        }).status(200).json({details : { ...otherDetails }})
    } catch (err) {
        next(err)
    }
}

export default register