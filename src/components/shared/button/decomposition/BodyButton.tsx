interface props {
    value: string
    style?: {
        main?: boolean
        nav?: boolean
    }
    onClick: () => void
    onMouseEnter: () => void
    onMouseLeave: () => void
}

export function BodyButton({ value, style, onClick, onMouseEnter, onMouseLeave }: props) {
    return (
        <button
            className={`${
                style?.main
                    ? 'w-20 aspect-square bg-foreground text-white hover:bg-grey'
                    : ''
            }
            ${style?.nav ? 'hover:text-grey' : ''} hover:rounded-sm`}
            onClick={() => onClick()}
            onMouseEnter={() => onMouseEnter()}
            onMouseLeave={() => onMouseLeave()}
        >
            {value}
        </button>
    )
}
