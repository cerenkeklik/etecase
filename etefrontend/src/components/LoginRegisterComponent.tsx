import '../assets/css/Login.css'
import '../assets/css/General.css'
import { Button, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom'

const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

type FieldType = {
  username?: string
  password?: string
  remember?: string
}

const LoginRegisterComponent = ({
  flip,
  setFlip,
}: {
  flip: boolean
  setFlip: any
}) => {

 const nav = useNavigate()

  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className='form-login-register'
      onSubmitCapture= {() => {
        !flip ? nav("/dashboard") : setFlip(!flip)
      }}
    >
      <div className="login-text color-darkblue">
        {flip
          ? 'Handle your business easily. SIGN UP!'
          : 'Where we were? SIGN IN!'}
      </div>
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item style={{display: "flex", justifyContent: 'center'}} wrapperCol={{ span: 16 }}>
        <Button type="primary" htmlType="submit">
          {flip ? 'SIGN UP' : 'SIGN IN'}
        </Button>
      </Form.Item>

      <Form.Item style={{display: "flex", justifyContent: 'center'}} wrapperCol={{ span: 16 }}>
        <Button type="default"
         onClick={() => {
          setFlip(!flip);
          
         }}
         >
          {flip ? 'Do you have an account?' : "Don't have an account?"}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginRegisterComponent
