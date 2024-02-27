import JWT from "jsonwebtoken";

interface payLoadDto {
    id: number,
    email: string,
    mainAdmin: boolean
}
function payLoadGenerator({ email, mainAdmin, id:userId }: payLoadDto) {
    return JWT.sign(
        { email, mainAdmin, userId },
        process.env.KEY!,
        { expiresIn: '3d' }
    )
}

export { payLoadGenerator }