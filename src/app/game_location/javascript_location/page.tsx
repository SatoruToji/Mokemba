import { PageLayout } from '@/components/layout/PageLayout/PageLayout'
import { Button } from '@/components/shared/button/Button'
import Link from 'next/link'

export default function Page() {
    return (
        <PageLayout mode="menu" style={{ js: true }}>
            <Link href={'./javascript_location/this'}>
                <Button
                    value="this"
                    style={{ main: true }}
                    tooltip="Понятным языком объясню this"
                />
            </Link>
            <Link href={'./javascript_location/prototype'}>
                <Button
                    value="prototype"
                    style={{ main: true }}
                    tooltip="Почти все в js - это объекты."
                />
            </Link>
        </PageLayout>
    )
}
