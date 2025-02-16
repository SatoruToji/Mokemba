'use client'
import { base2 } from '@/app/content/dialogs'
import { MokembaClick } from '@/components/mokemba/MokembaDialog/MokembaClick'
import { MokembaTalking } from '@/components/mokemba/MokembaDialog/MokembaTalking'
import { ReactNode } from 'react'

interface Props {
    text?: any
    childred?: ReactNode
}

export function Footer({ text }: Props) {
    return <footer>
    </footer>
}
