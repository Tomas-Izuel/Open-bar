export const authMiddleware = (req, res, next) => {
    if(req.session?.email){
        return next()
    }
    return res.status(401).redirect('/auth/login')
}

