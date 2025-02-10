'use client'

import { ReactNode, useState } from 'react'
import { Button } from '../button/Button'
import { Popover } from '../popover/Popover'

interface ExerciseInterface {
    value: string
    description: ReactNode
}

export function Exercise({value, description}: ExerciseInterface) {
    const [popover, setPopover] = useState<boolean>(false)

    return (
        <article className='relative'>
            <Button value={value} setCount={setPopover} />
            {popover ? <Popover description={description} /> : null}
        </article>
    )
}
