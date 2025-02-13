'use client'
import { useEffect, useState } from 'react'
import { MokembaDialog } from './MokembaDialog'

interface MokembaDialogProProps {
    childhood: Record<string, string>[]
}

export function MokembaDialogPro({ childhood }: MokembaDialogProProps) {
    let [value, setValue] = useState('')
    useEffect(() => {
        childhood.map((item) => {
            for (const [key, value] of Object.entries(item)) {
                setValue(value)
            }
        })
    }, [childhood])
    return <MokembaDialog dialogs={value} />
}
