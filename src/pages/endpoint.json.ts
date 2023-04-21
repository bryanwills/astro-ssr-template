import { PrismaClient } from '@prisma/client'

export async function post() {

    const prisma = new PrismaClient()
    const standorte = await prisma.standorte.findMany()

	return standorte
}
