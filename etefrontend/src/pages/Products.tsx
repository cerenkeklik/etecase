import { useRef, useState } from 'react'
import '../assets/css/General.css'
import '../assets/css/Products.css'
import AddFloatBtn from '../components/AddFloatBtn'
import ProductsTable from '../components/ProductsTable'
import UpdateOrAddModal from '../components/UpdateOrAddModal'
import { FormInstance } from 'antd'

const Products = () => {
  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [record, setRecord] = useState({})
  const formRef = useRef<FormInstance<any>>(null)
  const handleOk = () => {
    formRef.current?.submit()
  
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const showModal = (data?: any) => {
    setOpen(true)
    data ? setRecord(data) : setRecord({})
  }

  return (
    <div className="products-container">
      <ProductsTable showModal={showModal} />
      <AddFloatBtn showModal={showModal} />
      <UpdateOrAddModal
      formRef={formRef}
      setConfirmLoading={setConfirmLoading}
      setOpen={setOpen}
        type={'product'}
        record={record}
        open={open}
        confirmLoading={confirmLoading}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  )
}
export default Products
