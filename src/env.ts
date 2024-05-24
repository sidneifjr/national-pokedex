import { z } from 'zod'

// Validação de variáveis de ambiente, presentes no .env.local.
const envSchema = z.object({
  VITE_API_BASE_URL: z.string().url(),
  VITE_API_BASE_URL_GRAPHQL: z.string().url(),
})

const parsedEnv = envSchema.safeParse(import.meta.env)

if(!parsedEnv.success) {
  console.log('Invalid environment variables', parsedEnv.error.flatten().fieldErrors)

  throw new Error('Invalid environment variables.')
}

export const env = parsedEnv.data