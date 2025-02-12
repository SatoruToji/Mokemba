import { Main } from '@/components/layout/main/Main'
import { PageLayout } from '@/components/layout/PageLayout/PageLayout'

export default function Home() {
    return (
        <PageLayout nav={true}>
            <Main />
        </PageLayout>
    )
}
