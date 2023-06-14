'use client'; 

import { useEffect } from 'react'; 

export default function Error({
    error, 
    reset
}: {
    error: Error,
    reset: () => void
}) {
    useEffect(() => {
        console.log(error); 

    }, [error])
    return(
        <div className="flex flex-col items-center justify-center space-y-3">
            {/* @ts-ignore  */}
            <h1>Something went wrong!</h1>
            <button className="bg-green-500 text-white px-4 py-2 rounded-sm" onClick={() => reset()}>
                Reset
            </button>
        </div>
    )
}