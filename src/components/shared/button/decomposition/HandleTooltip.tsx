interface props {
    style?: {
        main?: boolean
        nav?: boolean
    }
    isShow: boolean
    tooltip: string
}

export function HandleTooltip({ style, isShow, tooltip }: props) {
    return (
        <>
            {isShow ? (
                <span
                    className={`${
                        style?.main
                            ? 'absolute left-1/2 -translate-x-1/2 top-24 w-[max-content] h-16 p-10 text-white bg-darkedGrey rounded-md text-sm'
                            : ''
                    }`}
                >
                    {tooltip}
                </span>
            ) : null}
        </>
    )
}
