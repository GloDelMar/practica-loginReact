import React from 'react'
import { useForm } from 'react-hook-form'
import { loginUser } from './api'

export default function Login() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [error, setError] = React.useState('')

    const onSubmit = async (data) => {
        try {
            const responseData = await loginUser(data.email, data.password)
            console.log('Inicio de sesión exitoso:', responseData)
            setError('')
            reset()
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center gap-2 p-5 border-solid border-blue-800 m-2 rounded">
            <h2 className='text-purple-900 text-4xl text-center font-extrabold'>Inicia sesión</h2>
            <form className='flex flex-row gap-2' onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Correo"
                    {...register('email', { required: true })}
                    className='block rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
                {errors.email && <p className="text-red-500">Correo es requerido</p>}
                <input
                    type="password"
                    placeholder="Contraseña"
                    {...register('password', { required: true })}
                    className='block rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
                {errors.password && <p className="text-red-500">Contraseña es requerida</p>}
                <button
                    type="submit"
                    className='bg-indigo-600 hover:bg-indigo-700 text-white rounded-md py-2 px-4'
                >
                    Iniciar Sesión
                </button>
            </form>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    )
}
