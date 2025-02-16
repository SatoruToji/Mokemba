import { base2 } from '@/app/content/dialogs'
import { Footer } from '@/components/layout/footer/Footer'
import { Header } from '@/components/layout/header/Header'
import { Nav } from '@/components/layout/nav/Nav'
import { ReactNode } from 'react'

interface children {
    style?: {
        html?: boolean
    }
    children?: ReactNode
    nav?: boolean
    content?: any
}

export function PageLayout({ children, nav, style, content }: children) {
    return (
        <div
            className={`min-h-screen grid grid-rows-[10%_80%_10%] ${
                style?.html ? 'bg-orange-200' : ''
            }`}
        >
            <Header>{nav ? <Nav /> : undefined}</Header>
            <main>{children}</main>
            <Footer text={content} />
        </div>
    )
}
