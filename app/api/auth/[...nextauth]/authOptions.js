import CredentialsProvider from "next-auth/providers/credentials";
import connectMongoDB from '@/libs/mongo/mongodb';
import User from "@/models/User";
import bcrypt from 'bcryptjs'

const authOptions = {
    providers: [ CredentialsProvider({
        name: "credentials",
        credentials: {},
        async authorize(credentials) {
            const {email, password} = credentials;
            try {
                await connectMongoDB();
                const user = await User.findOne({email});
                
                if(!user) {
                    return null;
                }

                const passwordsMatch = await bcrypt.compare(password, user.password);

                if(!passwordsMatch) {
                    return null;
                }

                return user;

            } catch (error) {
                console.log("Error:", error)
            }
        } 
    })],
    session: {
        strategy: "jwt"
    },
    callbacks:{
    jwt: async ({ token, user }) =>{

      if (user) {
        token.user = user;
      }

      return token
    },
    session: async ({ session, token }) => {
        // HERE is where we are adding user data to the session
        session.user = {
            username: token.user.username,
            email: token.user.email,
            id: token.user._id    
        }
        
        return session;
        
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/experiences/unauth/login"
    }
}

export default authOptions;