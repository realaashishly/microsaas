import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import LinkedIn from 'next-auth/providers/linkedin';
import { prisma } from './lib/prisma';

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [Google, LinkedIn],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        authorized: async ({ auth }) => {
            return !!auth;
        },
    },
    pages: {
        signIn: "/sign-in",
      },
});
