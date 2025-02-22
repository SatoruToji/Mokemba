'use client'
import { Footer } from '@/components/layout/footer/Footer'
import { Header } from '@/components/layout/header/Header'
import { Nav } from '@/components/layout/nav/Nav'
import { MyProvider } from '@/components/mokemba/Provider'
import { Button } from '@/components/shared/button/Button'
import { ReactNode } from 'react'

interface props {
    style?: {
        html?: boolean
    }
    children?: ReactNode
    nav?: boolean
    mode?: 'menu' | 'game'
}

export function PageLayout({ children, style, mode }: props) {
    return (
        <div
            className={`min-h-screen grid grid-rows-[10%_80%_10%] ${
                style?.html ? 'bg-orange-200' : ''
            }`}
        >
            <MyProvider>
                <Header>{mode === 'menu' ? <Nav /> : <Button back={true}/>}</Header>
                <main>{children}</main>
                <Footer />
            </MyProvider>
        </div>
    )
}
