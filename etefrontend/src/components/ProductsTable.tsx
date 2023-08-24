import { Space, Table } from 'antd'
import Column from 'antd/es/table/Column'
import EditIcon from "../assets/icons/editicon.svg";
import DeleteIcon from "../assets/icons/deleteicon.svg";

const ProductsTable = () => {
  interface DataType {
    key: React.Key
    productName: string
    productCategory: string
    productAmount: number
    amountUnit: number
    company: string
  }

  const data: DataType[] = [
    {
      key: '1',
      productName: 'John',
      productCategory: 'Category1',
      productAmount: 32,
      amountUnit: 1,
      company: 'Company 1',
    },
    {
      key: '2',
      productName: 'Jim',
      productCategory: 'Category1',
      productAmount: 44,
      amountUnit: 1,
      company: 'Company 1',
    },
    {
      key: '3',
      productName: 'Joe',
      productCategory: 'Category1',
      productAmount: 32,
      amountUnit: 1,
      company: 'Company 1',
    },
  ]

  return (
    <Table dataSource={data}>
      <Column title="Product Name" dataIndex="productName" key="productName" />
      <Column
        title="Product Category"
        dataIndex="productCategory"
        key="productCategory"
      />
      <Column
        title="Product Amount"
        dataIndex="productAmount"
        key="productAmount"
      />
      <Column title="Amount Unit" dataIndex="amountUnit" key="amountUnit" />
      <Column title="Company" dataIndex="company" key="company" />
      <Column
        title="Action"
        key="action"
        render={(_: any, record: DataType) => (
          <Space size="middle">
            <a><img src={EditIcon} alt='editicon' width={20}/></a>
            <a><img src={DeleteIcon} alt='deleteicon' width={20}/></a>
          </Space>
        )}
      />
    </Table>
  )
}
export default ProductsTable
