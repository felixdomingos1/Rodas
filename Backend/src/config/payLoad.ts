import JWT from "jsonwebtoken";

interface payLoadDto {
    id: number,
    email: string,
    mainAdmin: boolean
}
function payLoadGenerator({ email, mainAdmin, id: secretarioId }: payLoadDto) {
    return JWT.sign(
        { email, mainAdmin,  secretarioId },
        process.env.KEY!,
        { expiresIn: '3d' }
    )
}

export { payLoadGenerator }