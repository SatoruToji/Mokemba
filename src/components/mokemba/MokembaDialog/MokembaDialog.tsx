'use Client'
import { useEffect, useState } from 'react'

interface MokembaDialogProps {
    dialogs: string
}

export function MokembaDialog({ dialogs }: MokembaDialogProps) {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (count < dialogs.length) {
            const timeout = setTimeout(() => setCount(1 + count), 30)
            return () => clearTimeout(timeout)
        }
        
    }, [count, dialogs])
    return <div>{dialogs.slice(0, count)}</div>
}
