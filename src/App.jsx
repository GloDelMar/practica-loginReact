import React, { useState } from 'react';
import Login from './login';
import { useForm } from "react-hook-form";
import CreateUser from './CreateUser';




export default function App(){


  return(
    <main className="w-full min-h-screen flex flex-col bg-black align-middle">
      <h1 className='w-full flex align-middle bg-lime-600 text-white font-bold justify-center m-1'>¡Bienvenido!</h1>
      <section className='flex flex-col alig'>
      <CreateUser/>
      <p className='text-purple-900 text-4xl text-center font-extrabold'>ó</p>
      <Login/>
    </section>|
    </main>
  )

}