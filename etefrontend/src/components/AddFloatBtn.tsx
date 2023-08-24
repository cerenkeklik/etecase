import { PlusCircleOutlined } from '@ant-design/icons'
import { FloatButton } from 'antd'

const AddFloatBtn = ({ showModal }: { showModal: () => void }) => {
  return (
    <FloatButton
      tooltip="Add new"
      type="primary"
      onClick={showModal}
      icon={<PlusCircleOutlined />}
    />
  )
}
export default AddFloatBtn
