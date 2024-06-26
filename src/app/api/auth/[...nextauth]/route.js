import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: 'email', type: "text", placeholder: "enter email", required: true },
                password: { label: 'password', type: "password", placeholder: "enter password", required: true }
            },
            async authorize(credentials) {
                if (!credentials) {
                    return null;
                }
                else {
                    return true;
                }
            }
        })
    ]
})

export { handler as GET, handler as POST }