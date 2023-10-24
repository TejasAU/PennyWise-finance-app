import jwt from "jsonwebtoken"

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(createError(401, "You are not aunthicated!"))
    }

    jwt.verify(token, process.env.JWT, (err, user) => { // user -> gets the info of user by access tkn frm cookies
        if (err) {
            return next(createError(403, "Invalid Token"))
        }
        req.userInfo = user
        next()
    })
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next(), () => {
        if (req.userInfo.id === req.params.id) {
            next()
        }else{
            if(err) return res.createError(403, "Unauthorized user")
        }
    })
}
