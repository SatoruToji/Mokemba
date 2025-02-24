'use client'
import { JSX, useState } from 'react'
import { HandleTooltip } from './decomposition/HandleTooltip'
import { HandleDetails } from './decomposition/HandleDetails'
import { BackButton } from './decomposition/HandleBackButton'
import { BodyButton } from './decomposition/BodyButton'

interface ButtonProps {
    value?: string
    style?: {
        main?: boolean
        nav?: boolean
    }
    tooltip?: string
    details?: JSX.Element
    back?: boolean
}

export function Button({ value, style, tooltip, details, back }: ButtonProps) {
    const [show, setShow] = useState({
        tooltip: false,
        details: false,
    })

    const handleToggleDetails = () =>
        setShow((p) => ({ ...p, details: !p.details }))
    const handleMouseEnter = () => setShow((p) => ({ ...p, tooltip: true }))
    const handleMouseLeave = () => setShow((p) => ({ ...p, tooltip: false }))

    return (
        <div className="relative">
            <BodyButton
                value={value ? value : ''}
                style={style}
                onClick={handleToggleDetails}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />

            <HandleTooltip
                style={style}
                isShow={show.tooltip ? show.tooltip : false}
                tooltip={tooltip ? tooltip : ''}
            />

            <HandleDetails
                isShow={show.details}
                details={details ? details : <></>}
            />

            <BackButton isShow={back ? back : false} />
        </div>
    )
}
