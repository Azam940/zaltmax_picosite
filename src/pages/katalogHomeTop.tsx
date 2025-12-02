import { KatalogMap } from '@/components/katalogMap'
import { KatalogFirtsPage } from '../components/katalogFirtsPage'
import Bestsellers from '@/components/KatalogBestsellers'
import KatalogSkidka from '@/components/katalogSkidka'
import KatalogNew from '@/components/katalogNew'

const KatalogHomeTop = () => {
  return (
    <div>
      <KatalogFirtsPage/>
      <KatalogMap/>
      <Bestsellers/>
      <KatalogSkidka/>
      <KatalogNew/>
    </div>
  )
}

export default KatalogHomeTop