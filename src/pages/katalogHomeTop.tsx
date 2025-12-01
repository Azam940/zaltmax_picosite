import { KatalogMap } from '@/components/katalogMap'
import { KatalogFirtsPage } from '../components/katalogFirtsPage'
import Bestsellers from '@/components/KatalogBestsellers'
import KatalogSkidka from '@/components/katalogSkidka'

const KatalogHomeTop = () => {
  return (
    <div>
      <KatalogFirtsPage/>
      <KatalogMap/>
      <Bestsellers/>
      <KatalogSkidka/>
    </div>
  )
}

export default KatalogHomeTop