'use client'
import { useEffect, useState } from 'react'
import { MokembaDialog } from './MokembaDialog'

interface MokembaDialogProProps {
    childhood: Record<string, string>[]
}

export function MokembaDialogPro({ childhood }: MokembaDialogProProps) {
    const [value, setValue] = useState('')
    useEffect(() => {
        let costil = ''
        childhood.map((item) => {
            for (const [key, value] of Object.entries(item)) {
                setValue(value)
                costil = key
            }
        })
    }, [childhood])
    return <MokembaDialog dialogs={value} />
}
