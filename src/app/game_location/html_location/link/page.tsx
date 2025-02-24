import { PageLayout } from "@/components/layout/PageLayout/PageLayout";
import { MokembaClick } from "@/components/mokemba/MokembaDialog/MokembaClick";
import { link } from '@/app/content/link'


export default function Page() {
    return <PageLayout style={{ html: true }}>
        <MokembaClick arrObject={link} />
    </PageLayout>
}