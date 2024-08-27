import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import  connectMongoDB from "../../../../lib/db";
import User from "@/models/User";

 const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        if (!email || !password) {
          throw new Error("Email and password are required");
        }

        await connectMongoDB();
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("No user found with this email");
        }
        if (!password) {
          throw new Error("Invalid credentials");
        }
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

export default authOptions;