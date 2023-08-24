import '../assets/css/General.css'
import '../assets/css/Products.css'
import AddFloatBtn from '../components/AddFloatBtn'
import ProductsTable from '../components/ProductsTable'

const Products = () => {
  return (
    <div className="products-container">
      <ProductsTable />
      {/* <AddFloatBtn /> */}
    </div>
  )
}
export default Products
