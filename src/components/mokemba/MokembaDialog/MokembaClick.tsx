import { useState } from 'react'
import { MokembaReading } from './MokembaReading'
import { MontageText } from './MontageText'

interface Props {
    children?: any
    arrayObjects?: Record<string, string>[] | any
}

export function MokembaClick({ arrayObjects }: Props) {
    const [data, setData] = useState({
        index: 0,
        key: 0,
    })

    function filter() {
        setData((p) => ({
            ...p,
            index: (p.index + 1) % arrayObjects.length,
            key: p.key + 1,
        }))
    }
    return (
        <button onClick={() => filter()}>
            <MokembaReading
                arrContent={arrayObjects[data.index]}
                key={data.key}
            />
            {/* {MontageText(arrayObjects[data.index])} */}
        </button>
    )
}
