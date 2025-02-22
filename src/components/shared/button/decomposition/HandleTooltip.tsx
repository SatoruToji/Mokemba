interface props {
    isShow: boolean
    tooltip: string
}

export function HandleTooltip({ isShow, tooltip }: props) {
    return (
        <>
            {isShow ? (
                <span className="absolute left=1/2 -translate-x-1/2 top-full">
                    {tooltip}
                </span>
            ) : null}
        </>
    )
}
