import Link from 'next/link'
import { Button } from '@/components/shared/button/Button'

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
