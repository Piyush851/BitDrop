"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, seturl] = useState('')
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json")

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")
                setshorturl("")
                alert(result.message)
            })
            .catch((error)=> console.error(error))
    }


    return (
        <div className='mx-auto max-w-lg'>
            <h1 className='font-bold text-center text-2xl my-5'>Generate your short URLs</h1>
            <div className='flex flex-col gap-2'>
                <input
                    className='p-4 border border-black focus:outline-indigo-600'
                    type="text"
                    value={url}
                    placeholder='Enter your URL'
                    onChange={(e) => {seturl(e.target.value)}} />

                <input
                    type="text"
                    value={shorturl}
                    className='p-4 border-1 border-black focus:outline-indigo-600'
                    placeholder='Enter your preferred short URL text'
                    onChange={(e) => {setshorturl(e.target.value)}} />

                <button
                className=" my-4 cursor-pointer bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-indigo-700 active:bg-indigo-800 transition-colors duration-200"
                onClick={generate}>
                    Generate
                </button>
            </div>

            {generated && <code>
                Your link: <Link target="_blank" href={generated}>{generated}</Link>
                </code>
            }
        </div>
    )
}

export default Shorten