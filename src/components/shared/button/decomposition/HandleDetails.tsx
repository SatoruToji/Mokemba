import { JSX } from 'react'

interface props {
    isShow: boolean
    details: JSX.Element
}

export function HandleDetails({ isShow, details }: props) {
    return <>{isShow ? <div className="absolute">{details}</div> : null}</>
}
