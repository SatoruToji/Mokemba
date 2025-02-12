'use client'
import { JSX, useState } from 'react'

interface ButtonProps {
    value?: string
    main?: boolean
    style?: {
        main?: boolean
        nav?: boolean
    }
    tooltip?: string
    details?: JSX.Element
}

export function Button({ value, style, tooltip, details }: ButtonProps) {
    const [show, setShow] = useState({
        tooltip: false,
        details: false,
    })
    return (
        <div className="relative">
            <button
                className={`${
                    style?.main
                        ? 'w-20 aspect-square bg-foreground text-white hover:bg-grey'
                        : ''
                }
            ${style?.nav ? 'hover:text-grey' : ''}`}
                onClick={() => setShow((p) => ({ ...p, details: !p.details }))}
                onMouseEnter={() => setShow((p) => ({ ...p, tooltip: true }))}
                onMouseLeave={() => setShow((p) => ({ ...p, tooltip: false }))}
            >
                {value}
            </button>
            {tooltip ? (
                show.tooltip ? (
                    <span className="absolute left-1/2 -translate-x-1/2 top-full">
                        {tooltip}
                    </span>
                ) : undefined
            ) : undefined}
            {details ? (
                show.details ? (
                    <div className="absolute">{details}</div>
                ) : null
            ) : null}
        </div>
    )
}
