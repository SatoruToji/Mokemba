import { PageLayout } from '@/components/layout/PageLayout/PageLayout'
import { Button } from '@/components/shared/button/Button'
import Link from 'next/link'

export default function Page() {
    return (
        <PageLayout mode='menu' style={{ html: true }}>
            <main>
                <Link href="./html_location/base">
                    <Button value="Base" style={{ main: true }} tooltip='Механики, которые ты обязан(а) знать'/>
                </Link>
                <Link href="">
                    <Button value="<a>" style={{ main: true }} tooltip='Сылки'/>
                </Link>
                <Link href="">
                    <Button value="<div>" style={{ main: true }} tooltip='Универсальный тег!'/>
                </Link>
                <Link href="">
                    <Button value="ul/li" style={{ main: true }} />
                </Link>
                <Link href="">
                    <Button value="table" style={{ main: true }} />
                </Link>
                <Link href="">
                    <Button value="button" style={{ main: true }} />
                </Link>
            </main>
        </PageLayout>
    )
}
