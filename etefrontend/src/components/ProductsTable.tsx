import { Space, Table } from 'antd'
import EditIcon from '../assets/icons/editicon.svg'
import DeleteIcon from '../assets/icons/deleteicon.svg'
import { ColumnsType } from 'antd/es/table'
import { useEffect, useState } from 'react'
import { deleteProduct, getallProducts } from '../utils/api/Product'

const ProductsTable = ({ showModal }: { showModal: (data: any) => void }) => {
  interface DataType {
    key: React.Key
    productName: string
    productCategory: string
    productAmount: number
    amountUnit: number
    company: string
  }

  const [data, setData] = useState<DataType[]>([])

  const deleteProductItem = (id: any) => {
    deleteProduct(String(id))
  }

  useEffect(() => {
    getallProducts().then((res) => {
      let organized = res.data.map((item: any, i: number) => {
        return {
          key: item._id,
          productName: item.productName,
          productCategory: item.productCategory,
          productAmount: item.productAmount,
          amountUnit: item.amountUnit,
          company: item.company,
        }
      })
      setData(organized)
    })
  }, [showModal, deleteProductItem])

  const Columns: ColumnsType<DataType> = [
    {
      title: 'Product Name',
      dataIndex: 'productName',
      sorter: (a, b) => a.productName.localeCompare(b.productName),
    },
    {
      title: 'Product Category',
      dataIndex: 'productCategory',
      sorter: (a, b) => a.productCategory.localeCompare(b.productCategory),
    },
    {
      title: 'Product Amount',
      dataIndex: 'productAmount',
      sorter: (a, b) => a.productAmount - b.productAmount,
    },
    {
      title: 'Amount Unit',
      dataIndex: 'amountUnit',
      sorter: (a, b) => a.amountUnit - b.amountUnit,
    },
    {
      title: 'Company',
      dataIndex: 'company',
      sorter: (a, b) => a.company.localeCompare(b.company),
    },
    {
      title: '',
      key: 'operation',
      render: (record: DataType) => (
        <Space size="middle">
          <img
            onClick={() => showModal(record)}
            src={EditIcon}
            alt="editicon"
            className="cursor-pointer"
            width={20}
          />
          <img
          onClick={() => deleteProductItem(record.key)}
            src={DeleteIcon}
            alt="deleteicon"
            className="cursor-pointer"
            width={20}
          />
        </Space>
      ),
    },
  ]

  return <Table dataSource={data} columns={Columns} />
}
export default ProductsTable
