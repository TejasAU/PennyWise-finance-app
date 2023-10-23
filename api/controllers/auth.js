import User from "../DB_models/User.js"

export const register = async (req, res, next) => {
    try {
        const newUser = new User({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            contact_no: req.body.contact_no
        })
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (err) {
        next(err)
    }
}

export default register