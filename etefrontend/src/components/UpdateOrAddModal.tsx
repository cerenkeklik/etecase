import { Form, FormInstance, Input, Modal } from 'antd'
import React, { useEffect, useRef } from 'react'

type FieldType = {
  companyName: string
  companyLegalNumber: number
  website: string
  incorporationCountry: string
}

const UpdateOrAddModal = ({
  record,
  open,
  handleOk,
  confirmLoading,
  handleCancel,
}: {
  record: FieldType | {}
  open: boolean
  handleOk: () => void
  confirmLoading: boolean
  handleCancel: () => void
}) => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const formRef = useRef<FormInstance<any>>(null);
  console.log(record, '--', formRef)

  useEffect(() => {
    if (record && 'companyName' in record) {
      formRef.current?.setFieldsValue({
        companyName: record?.companyName,
        companyLegalNumber: record.companyLegalNumber,
        incorporationCountry: record.incorporationCountry,
        website: record.website,
      })
    } else {
      formRef.current?.resetFields() // Clear form fields when record is empty
    }
  }, [record])

  return (
    <>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          ref={formRef}
          name="control-hooks"
          labelCol={{ span: 9 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          style={{ paddingBlock: 25 }}
        >
          <Form.Item<FieldType>
            label="Company Name"
            name="companyName"
            rules={[{ required: true, message: 'Please input company name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Company Legal Number"
            name="companyLegalNumber"
            rules={[
              { required: true, message: 'Please input company legal number!' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Incorporation Country"
            name="incorporationCountry"
            rules={[
              {
                required: true,
                message: 'Please input incorporation country!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Website"
            name="website"
            rules={[
              {
                required: true,
                message: 'Please input incorporation country!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}
export default UpdateOrAddModal
