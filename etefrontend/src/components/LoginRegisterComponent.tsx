import '../assets/css/Login.css'
import '../assets/css/General.css'
import { Button, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import { login, register } from '../utils/api/User'
import SuccessAlert from './SuccessAlert'
import { useState } from 'react'

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

type FieldType = {
  username: string
  password: string
}

const LoginRegisterComponent = ({
  flip,
  setFlip,
}: {
  flip: boolean
  setFlip: any
}) => {
  const nav = useNavigate()
  const [visible, setVisible] = useState(false)

  const onFinish = (values: any) => {
    if (flip) {
      register(values.username, values.password).then(() => {
        setVisible(true)
        setTimeout(() => {
          setVisible(false)
          setFlip(!flip)
        }, 1000)
      })
    } else {
      login(values.username, values.password).then(() => {
        setVisible(true)
        setTimeout(() => {
          setVisible(false)
          nav('/dashboard')
        }, 1000)
      })
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
      <SuccessAlert visible={visible} setVisible={setVisible} />
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="form-login-register"
        // onSubmitCapture={() => {
        //   !flip ? nav('/dashboard') : submitRegister()
        // }}
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

        <Form.Item
          style={{ display: 'flex', justifyContent: 'center' }}
          wrapperCol={{ span: 16 }}
        >
          <Button type="primary" htmlType="submit">
            {flip ? 'SIGN UP' : 'SIGN IN'}
          </Button>
        </Form.Item>

        <Form.Item
          style={{ display: 'flex', justifyContent: 'center' }}
          wrapperCol={{ span: 16 }}
        >
          <Button
            type="default"
            onClick={() => {
              setFlip(!flip)
            }}
          >
            {flip ? 'Do you have an account?' : "Don't have an account?"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginRegisterComponent
