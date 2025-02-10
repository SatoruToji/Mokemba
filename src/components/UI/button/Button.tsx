'use client'
import { Dispatch, SetStateAction } from 'react'

interface ButtonProps {
    value: string
    setCount: Dispatch<SetStateAction<boolean>>
}

export function Button({ value, setCount }: ButtonProps) {
    return (
        <div>
            <button
                className="w-[5vw] aspect-[1]  bg-foreground text-bgc"
                onMouseEnter={() => setCount(true)}
                onMouseLeave={() => setCount(false)}
            >
                {value}
            </button>
        </div>
    )
}
