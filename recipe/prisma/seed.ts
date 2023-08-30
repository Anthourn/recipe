import { PrismaClient } from "@prisma/client";
import {hash} from 'bcrypt'

const prisma = new PrismaClient()

async function main(){
    const password = await hash('test', 12)
    const user = await prisma.user.upsert({
        where:{email:'demo@demo.com'},
        update:{},
        create:{
            email:'demo@demo.com',
            name:'John Doe',
            password
        }
    })
    console.log({user, password})
}

main()
    .then(()=> prisma.$disconnect())
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
