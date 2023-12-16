import React from 'react'
import { useParams } from 'react-router-dom'

export function User() {

    const {userid} = useParams()
    

    return (
        <>
        <div className=' w-full px-5 '>
            <h1 className=' text-center text-red-700 text-5xl'> User name is {userid}</h1>
        </div>
        </>
    )
}
