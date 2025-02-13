'use client'
import { base2 } from '@/app/content/dialogs'
import { base } from '@/app/content/dialogs'
import { MokembaDialog } from '@/components/mokemba/MokembaDialog/MokembaDialog'
import { MokembaDialogPro } from '@/components/mokemba/MokembaDialog/MokembaDialogPro'
 


export function Footer() {

    
    return (
        <footer>
            {/* <MokembaDialog dialogs={base} /> */}
            <MokembaDialogPro childhood={base2} />
        </footer>
    )
}
