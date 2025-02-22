import { Button } from '@/components/shared/button/Button'
import Link from 'next/link'

export function Nav() {
    return (
        <nav>
            <ul className="flex gap-x-10">
                <li>
                    <a
                        href="https://fast-typing-pi.vercel.app/"
                        target="_blank"
                    >
                        слепая печать
                    </a> 
                </li>
                <li>
                    <Button
                        value="ur Lvl"
                        style={{ nav: true }}
                        details={
                            <div className="absolute   flex flex-col p-3 gap-y-3 bg-[dimgray] rounded-sm">
                                <Link href="/game_location/html_location" className='hover:text-black'>
                                    HTML
                                </Link>
                                <Link href="/game_location/css_location" className='hover:text-black'>
                                    CSS
                                </Link>
                                <Link href="/game_location/javascript_location" className='hover:text-black'>
                                    JavaScript
                                </Link>
                            </div>
                        }
                    />
                </li>
                <li>
                    <a
                        href="https://github.com/SatoruToji/Mokemba"
                        target="_blank"
                    >
                        GitHub
                    </a>
                </li>
            </ul>
        </nav>
    )
}
