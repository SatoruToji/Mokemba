import { PageLayout } from '@/components/layout/PageLayout/PageLayout'
import { Button } from '@/components/shared/button/Button'
import Link from 'next/link'

export default function Page() {
    return (
        <PageLayout mode='menu' style={{ html: true }} >
                <Link href="./html_location/link">
                    <Button value="<a>" style={{ main: true }} tooltip='Попрактикуешься создавать ссылки'/>
                </Link>
        </PageLayout>
    )
}
