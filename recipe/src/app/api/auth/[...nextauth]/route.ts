import NextAuth, {type NextAuthOptions} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GitHub from 'next-auth/providers/github'
import Facebook from 'next-auth/providers/facebook'
import Google from 'next-auth/providers/google'
import { prisma } from '@/lib/prisma'
import {compare} from "bcrypt"
export const authOptions: NextAuthOptions = {
    session:{
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: 'Sign in',
            credentials:{
                email:{
                    label: "Email",
                    type: 'email',
                    placeholder: 'hello@example.com'
                },
                password: {label: 'Password', type: 'password'}
            },
            async authorize(credentials) {
               if (!credentials?.email || !credentials.password){
                return null
               }
               const user = await prisma.user.findUnique({
                where: {
                    email: credentials.email
                }
               })
               if (!user){
                return null
               }
               const isPasswordValid = await compare(credentials.password, user.password)
               if (!isPasswordValid){
                return null
            }
            return {
                id: user.id + '',
                email: user.email,
                name:user.name
            }
            }
            
        }),
        GitHub({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET
        }),
        Facebook({
          clientId: process.env.FACEBOOK_ID,
          clientSecret: process.env.FACEBOOK_SECRET
        }),
        Google({
          clientId: process.env.GOOGLE_ID,
          clientSecret: process.env.GOOGLE_SECRET
        })
      ],
      callbacks:{
        session: ({session, token}) =>{
            console.log('session', {session, token})
            return {
                ...session,
                user:{
                    ...session.user,
                    id:token.sub,
                }
            }
        },
      }
}




const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}