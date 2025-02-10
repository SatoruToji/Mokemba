import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import { Main } from '@/components/main/Main'
import { MyProvider } from '@/Context API/Provider'

export default function Home() {
    return (
            <div className="min-h-screen grid grid-rows-[10%_80%_10%]">
                <Header />
                <Main />
                <Footer />
            </div>
    )
}
