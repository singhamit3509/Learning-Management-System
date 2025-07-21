'use server'
import { signIn } from "next-auth/react" 

export async function ceredntialLogin(formData){
    try {
        const response = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect:false
        })
        return response;
    } catch (error) {
        throw new Error(error);
    }
}