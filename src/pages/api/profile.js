// Example: src/pages/api/profile.js
import { PrismaClient } from '@prisma/client'
export async function post(params, request) {
    console.log("anfang")

    const prisma = new PrismaClient()
    console.log("nach client")

    const test =prisma.standorte.findMany();
    console.log("nach query")
    console.log(test)

	return new Response(JSON.stringify({ ok: true }), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	})
}
