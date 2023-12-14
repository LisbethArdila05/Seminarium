import jws from 'jsonwebtoken'

export const tokenSign = async (login) => {
    return jws.sign({
        user: login.user,
    },
    process.env.JWL_SECRET,
    {
        expiresIn: "5h",
    }
    )
}

export const verifyToken = async (token) => {
    try {
        return jws.verify(token, process.env.JWL_SECRET)
    } catch (error) {
        return null
    }
}
