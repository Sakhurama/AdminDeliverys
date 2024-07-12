"use server";

import { cookies } from "next/headers";

const URL = process.env.URL_API_BACKEND || "http://localhost:8080";

export const signIn = async ({ email, password }: any) => {
  const fetchData = await fetch(`${URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include", // Asegúrate de incluir esta línea
  });
  const response = await fetchData.json();
  cookies().set("Authentication", response.token, {
    path: "/",
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
  });

  return response;
};

export const verifyToken = async ({ token }: any) => {
  const fetchData = await fetch(`${URL}/auth/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    credentials: "include", // Asegúrate de incluir esta línea
  });
  const response = await fetchData.json();
  return response;
};
