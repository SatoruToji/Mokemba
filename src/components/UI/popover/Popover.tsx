import { ReactNode } from "react"

interface PopoverInterface {
    description: ReactNode
}

export function Popover({description}: PopoverInterface) {
    return <div className="absolute -bottom-40 left-60 bg-foreground text-bgc w-60 h-96">
        {description}
    </div>
}