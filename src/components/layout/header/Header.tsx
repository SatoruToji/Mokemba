import { JSX } from "react"

interface children {
    children?: JSX.Element
}

export function Header({children}: children) {
    return (
        <header className="text-center">
            {children}
        </header>
    )
}
