'use client'
import Image from 'next/image'
import Potok from '@/components/mokemba/MokembaMascot/v potoke.png'
import { PageLayout } from '@/components/layout/PageLayout/PageLayout'
import { base2 } from '@/app/content/dialogs'
import { MokembaClick } from '@/components/mokemba/MokembaDialog/MokembaClick'

export default function Page() {
    return (
        <PageLayout style={{ html: true }}>
            <MokembaClick arrayObjects={base2} />
        </PageLayout>
    )
}
