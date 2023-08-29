import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    const user = await prisma.user.upsert({
        where:{email:'demo@demo.com'},
        update:{},
        create:{
            email:'demo@demo.com',
            name:'John Doe',
            password:'DemoUserPassword1'
        }
    })
    console.log({user})
}

main()
    .then(()=> prisma.$disconnect())
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
