import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-4">
                <h1 className="text-6xl md:text-8xl font-extrabold mb-4">404</h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">Page Not Found</h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                    Sorry, the page you are looking for does not exist or has been moved.
                </p>
                <Link href="/" className="inline-block">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                        Go Back Home
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Page