import { ReactNode } from 'react'
import { Exercise } from '../UI/exercise/Exercise'

var start: {content: ReactNode} = {
    content: (
        <>
            <h1>куколд это плохо</h1>
            <p>фу таки быть</p>
        </>
    ),
}

export function Main() {
    return (
        <main>
            <Exercise value="куколд" description={start.content} />
        </main>
    )
}
