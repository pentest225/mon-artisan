import { signIn } from '@/page'
import {prismaClient} from '@/prisma/client'
import {nextauth} from 'next-auth';
import bcrypt from 'bcryptjs'
import { z } from 'zod'
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';

const prisma = new prismaClient () 

export default async function handler(req, res) {
    if(req.method === 'POST'){
        const { email, password} = req.body

        async function getUser(email) {
            try {
              const user = await sql`SELECT * FROM users WHERE email=${email}`;
              return user.rows[0];
            } catch (error) {
              console.error('Failed to fetch user:', error);
              throw new Error('Failed to fetch user.');
            }
          }
        }
        if(user && bcrypt.compareSync(password, user.password))
            Credentials({
                async authorize(credentials) {
                  const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(30) });
                    res.statut(201).json({message: 'Credential'})
                    return null 
                }
            })
            else(
                res.status(401).json({message: 'invalide email or password'})
            )
    }
  try {
    const { email, password } = req.body
    await signIn('credentials', { email, password })
 
    res.status(200).json({ success: true })
  } catch (error) {
    if (error.type === 'CredentialsSignIn') {
      res.status(401).json({ error: 'Invalid credentials.' })
    } else {
      res.status(500).json({ error: 'Methode not Allowed.' })
    }
  }
  async function getUser(email) {
    try {
      const user = await sql`SELECT * FROM users WHERE email=${email}`;
      return user.rows[0];
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
}