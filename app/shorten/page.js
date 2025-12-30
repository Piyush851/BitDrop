"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, seturl] = useState('')
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    const generate = async () => {
        if(!url || !shorturl) {
            setMessage("Please enter both URL and short text.")
            return;
        }

        setLoading(true)
        setMessage("")
        setGenerated("")

        try{
            const response = await fetch("/api/generate", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({url, shorturl }),
            })

            const result = await response.json();

            if(!response.ok) {
                setMessage(result.message || "Something went wrong");
                setLoading(false)
                return;
            }

            setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
            seturl("")
            setshorturl("")
            setMessage("Short URL generated successfully!")
        } catch (error) {
            console.error(error)
            setMessage("Server error. Try again.")
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='mx-auto max-w-lg px-4'>
            <h1 className='font-bold text-center text-2xl my-6'>
                Generate your short URLs
            </h1>
            <div className='flex flex-col gap-3'>
                <input
                    className='p-4 border rounded-md border-black focus:outline-indigo-600'
                    type="text"
                    value={url}
                    placeholder='Enter your URL'
                    onChange={(e) => {seturl(e.target.value)}} />

                <input
                    type="text"
                    value={shorturl}
                    className='p-4 border rounded-md border-black focus:outline-indigo-600'
                    placeholder='Enter your preferred short URL text'
                    onChange={(e) => {setshorturl(e.target.value)}} />

                <button
                className={`mt-4 px-2.5 py-2 rounded-lg font-medium text-white transition-colors duration-200
                    ${loading
                        ?"bg-indigo-400 cursor-not-allowed"
                        : "bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800"
                    }`}
                onClick={generate}
                disabled={loading}>
                    {loading? "Generating...":"Generate"}
                </button>
            </div>
            {message && (
                <p className='mt-4 text-center text-sm text-slate-700'>{message}</p>
            )}

            {generated && (
                <div className='mt-4 p-3 bg-slate-100 rounded-md text-center'>
                    <p className='text-sm text-slate-600' >
                        Your link:
                    </p>
                    <Link
                        href={generated}
                        target="_blank"
                        className='text-indigo-600 font-medium hover:underline break-all'
                    >
                        {generated}
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Shorten