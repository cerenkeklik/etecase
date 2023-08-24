import { useEffect, useState } from 'react'
import { getallCompanies } from '../utils/api/Company'
import { getallProducts } from '../utils/api/Product'

const CardContent2 = () => {
  const [numOfCompanies, setNumOfCompanies] = useState(0)
  const [numOfProducts, setNumOfProducts] = useState(0)

  useEffect(() => {
    getallCompanies().then((res) => setNumOfCompanies(res.data.length))
    getallProducts().then((res) => setNumOfProducts(res.data.length))
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
      <div>There is {numOfCompanies} companies</div>
      <div>There is {numOfProducts} products</div>
    </div>
  )
}
export default CardContent2