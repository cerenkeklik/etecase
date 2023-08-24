import { Form, FormInstance, Input, Modal } from 'antd'
import { useEffect, useRef } from 'react'
import { addCompany, updateCompany } from '../utils/api/Company'
import { addProduct, updateProduct } from '../utils/api/Product'

export type FieldTypeCompany = {
  companyName: string
  companyLegalNumber: number
  website: string
  incorporationCountry: string
}

export type FieldTypeProduct = {
  productName: string
  productCategory: string
  productAmount: number
  amountUnit: number
  company: string
}

const UpdateOrAddModal = ({
  type,
  record,
  open,
  handleOk,
  confirmLoading,
  handleCancel,
  formRef,
  setOpen,
  setConfirmLoading,
}: {
  formRef: any
  type: String
  record: any
  open: boolean
  handleOk: () => void
  confirmLoading: boolean
  handleCancel: () => void
  setOpen: any
  setConfirmLoading: any
}) => {
  const onFinish = (values: any) => {
    setConfirmLoading(true)
    if (type === 'company') {
     if(record.key){
      updateCompany(record.key, {
        companyName: values.companyName,
        companyLegalNumber: values.companyLegalNumber,
        incorporationCountry: values.incorporationCountry,
        website: values.website,
      }).then(() => {
        setOpen(false)
        setConfirmLoading(false)
      })
     }else{
      addCompany({
        companyName: values.companyName,
        companyLegalNumber: values.companyLegalNumber,
        incorporationCountry: values.incorporationCountry,
        website: values.website,
      }).then(() => {
        setOpen(false)
        setConfirmLoading(false)
      })
     }
    } else {
      if(record.key){
        updateProduct(record.key, {
          productName: values.productName,
          productCategory: values.productCategory,
          amountUnit: Number(values.amountUnit),
          productAmount: Number(values.productAmount),
          company: values.company,
        }).then(() => {
          setOpen(false)
          setConfirmLoading(false)
        })
      }else{
        addProduct({
          productName: values.productName,
          productCategory: values.productCategory,
          amountUnit: Number(values.amountUnit),
          productAmount: Number(values.productAmount),
          company: values.company,
        }).then(() => {
          setOpen(false)
          setConfirmLoading(false)
        })
      }
     
    }
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  useEffect(() => {
    if (record && 'companyName' in record) {
      formRef.current?.setFieldsValue({
        companyName: record.companyName,
        companyLegalNumber: record.companyLegalNumber,
        incorporationCountry: record.incorporationCountry,
        website: record.website,
      })
    } else if (record && 'productName' in record) {
      formRef.current?.setFieldsValue({
        productName: record.productName,
        productCategory: record.productCategory,
        productAmount: record.productAmount,
        amountUnit: record.amountUnit,
        company: record.company,
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
          <Form.Item<FieldTypeCompany | FieldTypeProduct>
            label={type === 'company' ? 'Company Name' : 'Product Name'}
            name={type === 'company' ? 'companyName' : 'productName'}
            rules={[
              {
                required: true,
                message: `Please input ${
                  type === 'company' ? 'company' : 'product'
                } name!`,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldTypeCompany | FieldTypeProduct>
            label={
              type === 'company' ? 'Company Legal Number' : 'Product Category'
            }
            name={type === 'company' ? 'companyLegalNumber' : 'productCategory'}
            rules={[
              {
                required: true,
                message: `Please input ${
                  type === 'company'
                    ? 'company legal number'
                    : 'product category'
                }!`,
              },
            ]}

          >
            <Input type={(type==="company") ? "number": 'string'} />
          </Form.Item>

          <Form.Item<FieldTypeCompany | FieldTypeProduct>
            label={
              type === 'company' ? 'Incorporation Country' : 'Product Amount'
            }
            name={type === 'company' ? 'incorporationCountry' : 'productAmount'}
            rules={[
              {
                required: true,
                message: `Please input ${
                  type === 'company' ? 'incorporationCountry' : 'productAmount'
                }!`,
              },
            ]}
          >
            <Input 
                type = {(type==="company") ? "string": 'number'} />
          </Form.Item>
          <Form.Item<FieldTypeCompany | FieldTypeProduct>
            label={type === 'company' ? 'Website' : 'Amount Unit'}
            name={type === 'company' ? 'website' : 'amountUnit'}
            rules={[
              {
                required: true,
                message: `Please input ${
                  type === 'company' ? 'website' : 'amount unit'
                }!`,
              },
            ]}
          >
            <Input type={(type==="company") ? "string": 'number'} />
          </Form.Item>
          {type === 'product' && (
            <Form.Item<FieldTypeProduct>
              label="Company"
              name="company"
              rules={[
                {
                  required: true,
                  message: `Please input company!`,
                },
              ]}
            >
              <Input />
            </Form.Item>
          )}
        </Form>
      </Modal>
    </>
  )
}
export default UpdateOrAddModal
