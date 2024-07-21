import bcrypt from 'bcryptjs'
import {PrismaClient} from '@prisma/Client'

const prisma = new PrismaClient () 

export default async function handler(req, res){
    if(req.method === 'POST'){
        const { Name, last_Name, Email, Phone, Password, User_type, Account_statut } = req.body;

        const salt = bcrypt.genSaltSync(20)
        const hashedPassword = bcrypt.hashSync(Password, salt);

        try{
            const newUser = await prisma.User.Creat({
                data:{
                    Name,
                    last_Name,
                    Email, 
                    Phone,
                    Password:hashedPassword,
                    User_type:artisan, admin, client,
                    Account_statut
                },
            });
            res.status(201).json(newUser);
        }catch (error){
            res.status(407).json({Message: "User creation faild", error: error.message})
        }
    }
    else{
        res.status(405).json({ Message: 'Method Not Allowed' });
    }
}