import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState([])
//     useEffect(() => {
//     fetch('https://api.github.com/users/isrark005')
//     .then((res)=> res.json())
//     .then((data)=> setData(data))
//    }, [])

    return (
        <>
            <div className=' flex h-96'> 
            <div className=' w-6/12 '> <img src={data.avatar_url} alt="" /></div>
            <div className=' w-6/12 p-4'>
                <h1 className=' text-5xl mb-4'>Name: {data.name}</h1>
                <hr />
                <h2 className=' text-green-800 text-4xl'>My Profile: <Link to={data.html_url}> GitHub Link</Link></h2>
            </div>
            
            </div>
        </>
    )
}

export const gitHubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/isrark005')
   return response.json()
} 