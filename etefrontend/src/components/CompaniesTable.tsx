import { Space, Table } from 'antd'
import EditIcon from '../assets/icons/editicon.svg'
import DeleteIcon from '../assets/icons/deleteicon.svg'
import { ColumnsType } from 'antd/es/table'
import { useEffect, useState } from 'react'
import { deleteCompany, getallCompanies } from '../utils/api/Company'

const CompaniesTable = ({ showModal }: { showModal: (data: any) => void }) => {
  interface DataType {
    key: React.Key
    companyName: string
    companyLegalNumber: number
    website: string
    incorporationCountry: string
  }

  const [data, setData] = useState<DataType[]>([])

  const deleteCompanyItem = (id: any) => {
    deleteCompany(String(id))
  }

  useEffect(() => {
    getallCompanies().then((res) => {
     let organized =  res.data.map((item: any, i: number) => {
        return {
          key: item?._id,
          companyName: item.companyName,
          companyLegalNumber: item.companyLegalNumber,
          website: item.website,
          incorporationCountry: item.incorporationCountry,
        }
      })
      setData(organized)
    })
  }, [showModal, deleteCompanyItem])

  const Columns: ColumnsType<DataType> = [
    {
      title: 'Company Name',
      dataIndex: 'companyName',
      sorter: (a, b) => a.companyName.localeCompare(b.companyName),
    },
    {
      title: 'Company Legal Number',
      dataIndex: 'companyLegalNumber',
      sorter: (a, b) => a.companyLegalNumber - b.companyLegalNumber,
    },
    {
      title: 'Website',
      dataIndex: 'website',
      sorter: (a, b) => a.website.localeCompare(b.website),
    },
    {
      title: 'Incorporation Country',
      dataIndex: 'incorporationCountry',
      sorter: (a, b) =>
        a.incorporationCountry.localeCompare(b.incorporationCountry),
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
          onClick={() => deleteCompanyItem(record.key)}
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
export default CompaniesTable
