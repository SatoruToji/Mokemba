import { foo } from '@/components/mokemba/MokembaDialog/foo'
import { myContext } from '@/components/mokemba/Provider'
import { useContext, Dispatch, SetStateAction } from 'react'

interface stateContext {
    state: Record<string, string>
    setState: Dispatch<SetStateAction<Record<string, string>>>
}

export function Footer() {
    const { state } = useContext<stateContext>(myContext)

    return <footer>{foo(state)}</footer>
}
