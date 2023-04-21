// Example: src/pages/api/profile.js
import { PrismaClient } from '@prisma/client'
export async function post(params, request) {
    const prisma = new PrismaClient()
    const test =prisma.standorte.findMany();
    console.log(test)

	return new Response(JSON.stringify({ ok: true }), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	})
}
