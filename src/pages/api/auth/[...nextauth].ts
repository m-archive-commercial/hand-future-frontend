import NextAuth, { NextAuthOptions } from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import { createTransport } from 'nodemailer'

import { generateVerificationToken } from '~/lib/auth'
import clientPromise from '@/lib/mongodb'
import { DATABASE_AUTH_DB_NAME, EMAIL_FROM, EMAIL_SERVER } from '@/lib/env'
import { setTokenCentre } from '@/pages/api/auth/general'
import { MongodbEmailAdapter } from '~/lib/mongodb-email-adapter'


export const authOptions: NextAuthOptions = {
	adapter: MongodbEmailAdapter(clientPromise, {
		databaseName: DATABASE_AUTH_DB_NAME,
		collections: { Users: 'user' },
	}),
	
	providers: [
		EmailProvider({
			
			server: EMAIL_SERVER,
			from: EMAIL_FROM,
			// maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
			generateVerificationToken,
			
			async sendVerificationRequest(params) {
				const { identifier, url, provider, theme, token } = params
				const transport = createTransport(provider.server)
				const result = await transport.sendMail({
					to: identifier,
					from: provider.from,
					subject: `Your Activation Code：${token}`,
					// text: text({ url, host }),
					// html: html({ url, host, theme }),
				})
				setTokenCentre(identifier, token)
				const failed = result.rejected.concat(result.pending).filter(Boolean)
				if (failed.length) throw new Error(`Email (${failed.join(', ')}) could not be sent`)
			},
			
		}),
	],
	// session: {
	// 	strategy: 'jwt', // ref: https://next-auth.js.org/configuration/options#session
	// },
	
	
	callbacks: {
		
		signIn: async ({ user, email, account, profile, credentials }) => {
			// user.id = user.email! // <-- key
			console.log('signIn', { user, email, account, profile, credentials })
			return true
		},
		//
		// jwt: async ({ token, user }) => {
		// 	console.log('jwt', { token, user })
		// 	return Promise.resolve(token)
		// },
		//
		// ref: https://dev.to/said_mounaim/authentication-with-credentials-using-next-auth-mongodb-5e0j
		// async jwt({ token, user }) {
		// 	console.log({ token, user })
		// 	// token._id = user.email
		// 	// if (user?.isAdmin) token.isAdmin = user.isAdmin;
		// 	token.sub = token.email!
		// 	if (user) {
		// 		user.id = user.email!
		// 	}
		// 	return token
		// },
		
		session({ session, token, user }) {
			console.log('session', { session, token, user })
			session.user.id = user.id
			return session // The return type will match the one returned in `useSession()`
		},
		
		// 不要覆写 signIn 函数，否则默认的 verification 就不起作用了 （关键是很难写！）
	},
	
	pages: {
		signIn: '/auth/signin',
		// error: '/auth/signin',
	},
}

export default NextAuth(authOptions)
