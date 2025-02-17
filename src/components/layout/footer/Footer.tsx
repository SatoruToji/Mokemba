'use client'

interface Props {
    text?: string
}

export function Footer({ text }: Props) {
    return <footer>{text}</footer>
}
