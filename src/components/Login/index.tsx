"use client"

import React from "react";
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { useDashboardAuthMutation } from "@/libs/requests/react.generated";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

import { toast } from 'react-toastify';


const HiOutlineEyeOff: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /><path d="M3 3l18 18" /></svg>
  )
};

const HiOutlineEye: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
  )
};

const Login: React.FC = () => {

  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function handleAuth(e: any) {
    e.preventDefault();

    // Simular autenticación exitosa. Aquí puedes agregar cualquier lógica de validación si es necesario.
    if (email && password) {
      // Simulando éxito en el login
      toast.success('Bienvenido');
      // Redirigir a la página deseada
      router.push('/productos');
    } else {
      // Mostrar error si no hay credenciales válidas
      toast.error('Credenciales inválidas');
    }
  }

  // const [login] = useDashboardAuthMutation()

  // async function handleAuth(e: any) {
  //   e.preventDefault()
  //   const request = async () => {
  //     try {
  //       const data = await login(
  //         {
  //           variables: {
  //             input: {
  //               email: email!,
  //               password: password!
  //             }
  //           }
  //         }
  //       )
  //       const token = data.data?.dashboardAuth?.token
  //       setCookie('Authentication', token, {
  //         maxAge: 60 * 60 * 24 * 7, // La cookie expirará en 7 días
  //         path: '/', // La cookie estará disponible en toda la aplicación
  //       });
  //       toast.done("Bienvenido")
  //       return true
  //     } catch (error) {
  //       toast.error("Credenciales invalidas")
  //       return;
  //     }
  //   }
  //   const result = await request()
  //   if (result) {
  //     router.push('/productos')
  //   }
  //   return
  // }


  return (
    <>
      <div className="h-screen flex items-start justify-center rounded-sm border border-stroke bg-white shadow-default sm:items-center">
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full xl:block xl:w-1/2">
            <div className="px-26 mt-9 text-center">
              <Image
                src={"/images/logo/logoCompleto.svg"}
                alt="Logo"
                width={931}
                height={834}
              />
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <span className="mb-1.5 block font-medium text-center">¡Bienvenido nuevamente!</span>
              <h2 className="mb-9 text-2xl font-bold text-black text-center dark:text-white sm:text-title-xl2">
                Iniciar sesión
              </h2>

              <form className="mx-4 sm:mx-0">
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Correo eletrónico:
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Ingrese su correo"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}
                    />

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Contraseña:
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Ingrese su contraseña"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-12 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }}
                    />

                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center px-3"
                      onClick={togglePasswordVisibility}
                    >{showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                    </button>
                  </div>
                </div>

                <div className="mb-5">
                  <button
                    value="Ingresar"
                    className="w-full cursor-pointer rounded-lg font-medium	 bg-[#FFBC0D] p-4 text-black transition hover:bg-[#ffdd87"
                    onClick={handleAuth}
                  >
                    Ingresar
                  </button>
                </div>

                {/* <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50">
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_191_13499)">
                          <path
                            d="M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217"
                            fill="#4285F4"
                          />
                          <path
                            d="M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999"
                            fill="#34A853"
                          />
                          <path
                            d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M10.2059 3.86663C11.668 3.84438 13.0822 4.37803 14.1515 5.35558L17.0313 2.59996C15.1843 0.901848 12.7383 -0.0298855 10.2059 -3.6784e-05C8.31431 -0.000477834 6.4599 0.514732 4.85001 1.48798C3.24011 2.46124 1.9382 3.85416 1.08984 5.51101L4.38946 8.02225C4.79303 6.82005 5.57145 5.77231 6.61498 5.02675C7.65851 4.28118 8.9145 3.87541 10.2059 3.86663Z"
                            fill="#EB4335"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_191_13499">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    Sign in with Google
                  </button> */}

                {/* <div className="mt-6 text-center">
                    <p>
                      Don’t have any account?{" "}
                      <Link href="/auth/signup" className="text-primary">
                        Sign Up
                      </Link>
                    </p>
                  </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login