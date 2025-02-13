'use client'
import { base2 } from '@/app/content/dialogs'
import { MokembaDialogPro } from '@/components/mokemba/MokembaDialog/MokembaDialogPro'

export function Footer() {
    return (
        <footer>
            <MokembaDialogPro childhood={base2} />
        </footer>
    )
}
