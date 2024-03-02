import NextAuth from 'next-auth';
// import EmailProvider from 'next-auth/providers/email';
import GitHubProvider from 'next-auth/providers/github';

// email providers supported https://community.nodemailer.com/2-0-0-beta/setup-smtp/well-known-services/
const options = {
  providers: [
    // EmailProvider({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM,
    //   maxAge: 10 * 60,
    // }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
  ],
};

export default NextAuth(options);
