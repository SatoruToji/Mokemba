import { PageLayout } from '@/components/layout/PageLayout/PageLayout'
import { Button } from '@/components/shared/button/Button'
import Link from 'next/link'

export default function Page() {
    return (
        <PageLayout nav={true} style={{ html: true }}>
            <main>
                <Link href="">
                    <Button value="Заголовки" style={{ main: true }} />
                </Link>
                <Link href="">
                    <Button value="img" style={{ main: true }} />
                </Link>
                <Link href="">
                    <Button value="links" style={{ main: true }} />
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
