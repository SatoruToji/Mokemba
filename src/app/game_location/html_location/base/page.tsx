'use client'
import Image from 'next/image'
import hello from '@/components/mokemba/MokembaMascot/hello.png'
import { PageLayout } from '@/components/layout/PageLayout/PageLayout'

export default function Page() {

    return (
        <PageLayout style={{ html: true }}>
            <Image src={hello} width={400} alt='privet'></Image>
            
        </PageLayout>
    )
}
