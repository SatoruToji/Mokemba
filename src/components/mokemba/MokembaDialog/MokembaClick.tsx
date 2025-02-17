'use client'

import { useState } from 'react'
import { WriteRenderedText } from './WriteRenderedText'
import { SetPicture } from './SetPicture'

interface Props {
    arrObject?: Record<string, string>[]
}

export function MokembaClick({ arrObject = [] }: Props) {
    const [data, setData] = useState({
        index: 0,
        key: 0,
    })

    function filter() {
        if (!arrObject.length) return // Проверка на пустоту массива

        setData((p) => ({
            ...p,
            index: (p.index + 1) % arrObject.length,
            key: p.key + 1,
        }))
    }

    const currentContent = arrObject.length > 0 ? arrObject[data.index] : null

    return (
        <button onClick={filter}>
            {currentContent && (
                <>
                    <SetPicture arrContent={currentContent} />
                    <WriteRenderedText
                        arrContent={currentContent}
                        key={data.key}
                    />
                </>
            )}
        </button>
    )
}
