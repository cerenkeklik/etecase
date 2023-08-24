import '../assets/css/General.css'
import '../assets/css/Companies.css'
import CompaniesTable from '../components/CompaniesTable'
import AddFloatBtn from '../components/AddFloatBtn'
import { useState } from 'react'
import UpdateOrAddModal from '../components/UpdateOrAddModal'

const Companies = () => {
  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [record, setRecord] = useState({})

  const handleOk = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      setOpen(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const showModal = (data?: any) => {
    setOpen(true);
    data ? setRecord(data): setRecord({})
  }

  return (
    <div className="companies-container">
      <CompaniesTable showModal={showModal} />
      <AddFloatBtn showModal={showModal} />
      <UpdateOrAddModal
        record={record}
        open={open}
        confirmLoading={confirmLoading}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  )
}
export default Companies
