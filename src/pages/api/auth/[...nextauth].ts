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
		// collections: { Users: 'user' },
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
	
	callbacks: {
		session({ session, token, user }) {
			// console.log('session', { session, token, user })
			session.user.id = user.id
			return session // The return type will match the one returned in `useSession()`
		},
	},
	
	pages: {
		signIn: '/auth/signin',
	},
}

export default NextAuth(authOptions)
