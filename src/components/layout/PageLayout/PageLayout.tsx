import { Footer } from '@/components/layout/footer/Footer'
import { Header } from '@/components/layout/header/Header'
import { Navbar } from '@/components/layout/nav/Nav'
import { JSX } from 'react'

interface children {
    style?: {
        html?: boolean
    }
    children?: JSX.Element
    nav?: boolean
}

export function PageLayout({ children, nav, style }: children) {
    return (
        <div
            className={`min-h-screen grid grid-rows-[10%_80%_10%] ${
                style?.html ? 'bg-orange-400' : null
            }`}
        >
            <Header children={nav ? <Navbar /> : undefined} />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
