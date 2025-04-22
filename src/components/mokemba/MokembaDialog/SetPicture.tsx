import Image from 'next/image'
import { useLayoutEffect, useState } from 'react'

interface Props {
    arrContent: Record<string, string>
}

export function SetPicture({ arrContent }: Props) {
    const [state, setState] = useState<string>('/MokembaMascot/hello.png')
    useLayoutEffect(() => {
        setState(Object.entries(arrContent)[0][0])
    }, [arrContent])
    return (
        <Image
            src={state}
            alt=""
            width={500}
            height={0}
            style={{ height: 'auto', width: 'auto' }}
        />
    )
}
