'use client'

import { PageLayout } from '@/components/layout/PageLayout/PageLayout'
import { testDialog } from '@/app/content/dialogs'
import { MokembaClick } from '@/components/mokemba/MokembaDialog/MokembaClick'

export default function Page() {
    return (
        <PageLayout style={{ html: true }}>
            <MokembaClick arrObject={testDialog} />
        </PageLayout>
    )
}
