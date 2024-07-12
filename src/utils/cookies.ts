"use server";
import { cookies } from "next/headers";

export async function getAuthenticationToken() {
    return cookies().get("Authentication")?.value;
}
