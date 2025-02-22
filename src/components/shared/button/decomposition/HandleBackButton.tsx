'use client'

import { useRouter } from 'next/navigation'

interface props {
    isShow: boolean
}

export function BackButton({ isShow }: props) {
    const router = useRouter()
    return (
        <>{isShow ? <button onClick={() => router.back()}>back</button> : ''}</>
    )
}
