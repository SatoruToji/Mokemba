'use client'
import { useEffect, useState } from 'react'

interface Props {
    arrContent: Record<string, string>[]
    index?: number
}

export function MokembaReading({ arrContent }: Props) {
    const [value, setValue] = useState<any>('')
    const [count, setCount] = useState(0)

    useEffect(() => {
        setValue(Object.entries(arrContent)[0][1])

        if (count < value.length) {
            const timeout = setTimeout(() => setCount(1 + count), 30)
            return () => clearTimeout(timeout)
        }
    }, [arrContent, count, value])
    return <span>{value.slice(0, count)}</span>
}
    