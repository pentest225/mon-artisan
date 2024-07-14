'use server'

import { z } from 'zod'
import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { appName } from '@/app/lib/constant'
import bcrypt from 'bcrypt';


const UserFromSchema = z.object({
    id: z.string(),
    name: z.string({
        invalid_type_error: "Merci de saisir votre Prenoms !"
    }),
    last_name: z.string({
        invalid_type_error: "Merci de saisir votre Nom !"
    }),
    email: z.string({
        invalid_type_error: "Merci de saisir votre Email !"
    }),
    phone: z.string().length(10, { message: "Merci de saisir un numéro a 10 chiffres !" }),
    password: z.string().min(8, { message: "Merci de saisir un mot de passe d'au moi 8 carataires !" }),
    user_type: z.enum(['client', 'artisan', 'admin']),
    account_status: z.enum(['active', 'unactive', 'suspend', 'disabled', 'wating']),
    create_at: z.date(),
    update_at: z.date(),
    is_delecte: z.date()
})
export type CreatUserState = {
    errors?: {
        name?: string[],
        last_name?: string[],
        email?: string[],
        phone?:string[],
        password?:string[],
        
    },
    message?: string | null
}


const CreateUser = UserFromSchema.omit({ id: true, user_type: true, account_status: true, create_at: true, update_at: true, is_delecte: true })

export async function createUser(/**prevState: CreatUserState, */ formData: FormData) {

    const validatedFields = CreateUser.safeParse({
        "name": formData.get("name"),
        "last_name": formData.get("last_name"),
        "email": formData.get("email"),
        "phone": formData.get("phone"),
        "password": formData.get("password"),
        "confirm_password": formData.get("confirm_password"),
        "accept_condition": formData.get("accept_condition")
    })
    console.log(validatedFields.error)
    if(!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields Failed to Create Invoice',
        }
    }


    const {name,last_name,email,phone,password} = validatedFields.data
    const createAt = new Date().toISOString().split('T')[0];
    const updateAt = new Date().toISOString().split('T')[0];
    const isDelte = false
    const hashedPassword = await bcrypt.hash(password, 10);
    const userType = 'client'
    const account_status = 'active'
    try {
        const tableName = appName + "_users"
        const query = `
        INSERT INTO ${tableName} (
            name, last_name, email, phone, password, user_type, account_status, create_at, update_at, is_delete
        ) VALUES (
            $1, $2, $3, $4, $5, $6, $7, $8, $9, $10
        )
        `;

    const values = [
         name, last_name, email, phone, hashedPassword,
            userType, account_status, createAt, updateAt, isDelte
    ];
    await sql.query(query,values)
    } catch (error) {
        console.error(error)
        return { message: 'Database Error:Failed to insert Invoice' }
    }

    revalidatePath('/register')
    redirect('/')
    return {
        errors: "",
        message: 'Missing Fields Failed to Create Invoice',
    }

}


export async function createInvoice(formData: FormData) {
    const rowFormData = {
        "name": formData.get("name"),
        "last_name": formData.get("last_name"),
        "email": formData.get("email"),
        "phone": formData.get("phone"),
        "password": formData.get("password"),
        "confirm_password": formData.get("confirm_password"),
        "accept_condition": formData.get("accept_condition")
    }
    console.log(rowFormData)
}