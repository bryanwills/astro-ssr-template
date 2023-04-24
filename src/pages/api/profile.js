// Example: src/pages/api/profile.js
import { PrismaClient } from '@prisma/client/edge'
export async function post(params, request) {
    const prisma = new PrismaClient()
    const test = await prisma.standorte.findMany();
	console.log(test)

	return new Response(JSON.stringify({ ok: test }), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	})
}
