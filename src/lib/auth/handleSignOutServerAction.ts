"use server"

import { signOut } from "./authOptions";




export const handleSignOut = async()=>{
    try {
        await signOut();
    } catch (error) {
        throw error
    }
}