import type { LoginFormData } from '../schemas/loginSchema'
import {DATA_LOGIN_SIMULATION} from './../../../../../../packages/shared/config/constants'


export interface AuthResponse {
    user: {
        id: string,
        name:string
    }
}

const userResponseSimulation = {
    user: {
        id:"123",
        name: "Admin"
    }
}


export const loginApi = (credentials:LoginFormData) : Promise<AuthResponse> => {

    const { USERNAME, PASSWORD} = DATA_LOGIN_SIMULATION

    if (credentials.username === USERNAME && credentials.password === PASSWORD) return Promise.resolve(userResponseSimulation)

    throw new Error('Credenciales inválidas. Verifica tu usuario y contraseña.');

}