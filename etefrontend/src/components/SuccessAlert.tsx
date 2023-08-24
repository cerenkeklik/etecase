import { Alert } from 'antd'

const SuccessAlert = ({
  visible,
  setVisible,
}: {
  visible: boolean
  setVisible: (x: boolean) => void
}) => {
  return (
     <>
      {visible && 
        <Alert
        style={{width: "80%"}}
          message="Success"
          type="success"
          closable
          afterClose={() => setVisible(false)}
        />
      }
     </>
  )
}
export default SuccessAlert
