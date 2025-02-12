import { ReactNode } from 'react'
import Link from 'next/link'
import { Button } from '@/components/shared/button/Button'

const start: { web: ReactNode; content: ReactNode } = {
    web: (
        <>
            <h1>Web это не интернет</h1>
        </>
    ),
    content: (
        <>
            <h1>Интернет до 1995 года</h1>
        </>
    ),
}

export function Main() {
    return (
        <main className="flex gap-x-10">
            <Link href="/content/classwork1">
                <Button
                    value="1957"
                    style={{ main: true }}
                    tooltip="День рождение Интернета"
                />
            </Link>
            <Link href="/content/classwork2">
                <Button
                    value="1989"
                    style={{ main: true }}
                    tooltip="Web это не интернет"
                />
            </Link>
        </main>
    )
}
