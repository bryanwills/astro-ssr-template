import { PrismaClient } from '@prisma/client'

export function get() {
    const prisma = new PrismaClient()
    const tester = prisma.standorte.findMany()
    return tester;
}
