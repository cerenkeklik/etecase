import '../assets/css/General.css'
import '../assets/css/Companies.css'
import CompaniesTable from '../components/CompaniesTable'
import AddFloatBtn from '../components/AddFloatBtn'
import { useRef, useState } from 'react'
import UpdateOrAddModal from '../components/UpdateOrAddModal'
import { updateCompany } from '../utils/api/Company'
import { FormInstance } from 'antd'

const Companies = () => {
  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [record, setRecord] = useState<any>({})
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
    <div className="companies-container">
      <CompaniesTable showModal={showModal} />
      <AddFloatBtn showModal={showModal} />
      <UpdateOrAddModal
      setConfirmLoading={setConfirmLoading}
      setOpen={setOpen}
      formRef={formRef}
      type={"company"}
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
