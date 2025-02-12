import { Button } from '@/components/shared/button/Button'
import Link from 'next/link'

export function Navbar() {
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
                            <div>
                                <Link href="/game_location/html_location">
                                    HTML
                                </Link>
                                <Link href="/game_location/css_location">
                                    CSS
                                </Link>
                                <Link href="/game_location/javascript_location">
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
