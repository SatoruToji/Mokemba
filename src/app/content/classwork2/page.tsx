import { PageLayout } from '@/components/layout/PageLayout/PageLayout'

export default function Page() {
    return (
        <PageLayout>
            <article>
                <h1>12.03.1989</h1>
                <p>
                    Рождение <strong>HTML</strong> как идея
                </p>
                <section>
                    <p>
                        <strong>Timothy Berners Lee</strong> годам вынашивал
                        идею создания некого документа, <br />
                        которые позволит ему и его колегам в{' '}
                        <strong>CERN</strong> объединить все компьютеры компани
                        с разными операционными системами в единную сеть, <br />{' '}
                        чтобы его коллеги могли без проблем делиться друг с
                        другом идеями, документациями, программами. <br /> В{' '}
                        <strong>12.03.1989</strong> Tim Berners Lee предлжил
                        руководству своей компании CERN свою первую версию html
                        удобно закрывающая потребности ученных в обмениваться
                        информацией.
                        <br /> И лишь <strong>6 августа 1991 года</strong>{' '}
                        Berners Lee показал html на его самодельном браузере{' '}
                        <strong>WorldWideWeb</strong> руководству CERN. <br />
                        Позже в 1993 году html вышел за пределы CERN
                    </p>
                </section>
            </article>
        </PageLayout>
    )
}
