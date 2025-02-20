'use client'

import {
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from 'react'
import { SetPicture } from './SetPicture'
import { myContext } from '../Provider'

interface Props {
    arrObject: Record<string, string>[]
}

interface stateContext {
    state: Record<string, string>
    setState: Dispatch<SetStateAction<Record<string, string>>>
}

export function MokembaClick({ arrObject }: Props) {
    const { setState } = useContext<stateContext>(myContext)
    const [data, setData] = useState({
        index: 0,
        key: 0,
    })

    function filter() {
        setData((p) => ({
            ...p,
            index: (p.index + 1) % arrObject.length,
            key: p.key + 1,
        }))
    }

    useEffect(() => {
        setState(arrObject[data.index])
    }, [data.index, setState, arrObject])

    return (
        <button onClick={filter}>
            <SetPicture arrContent={arrObject[data.index]} />
        </button>
    )
}
