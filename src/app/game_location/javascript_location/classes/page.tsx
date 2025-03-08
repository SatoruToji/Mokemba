import { classes } from '@/app/content/js/classes'
import { PageLayout } from '@/components/layout/PageLayout/PageLayout'
import { MokembaClick } from '@/components/mokemba/MokembaDialog/MokembaClick'

export default function Page() {
    return (
        <PageLayout style={{ js: true }}>
            <MokembaClick arrObject={classes} />
        </PageLayout>
    )
}
