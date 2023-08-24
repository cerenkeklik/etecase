import { Space, Table } from 'antd'
import EditIcon from '../assets/icons/editicon.svg'
import DeleteIcon from '../assets/icons/deleteicon.svg'
import { ColumnsType } from 'antd/es/table'

const CompaniesTable = ({ showModal }: { showModal: (data: any) => void }) => {
  interface DataType {
    key: React.Key
    companyName: string
    companyLegalNumber: number
    website: string
    incorporationCountry: string
  }

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
            src={DeleteIcon}
            alt="deleteicon"
            className="cursor-pointer"
            width={20}
          />
        </Space>
      ),
    },
  ]

  const data: DataType[] = [
    {
      key: '1',
      companyName: 'John',
      companyLegalNumber: 32,
      website: 'website.com',
      incorporationCountry: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      companyName: 'Jim',
      companyLegalNumber: 44,
      website: 'website.com',
      incorporationCountry: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      companyName: 'Joe',
      companyLegalNumber: 32,
      website: 'website.com',
      incorporationCountry: 'Sydney No. 1 Lake Park',
    },
  ]

  return (
    <Table dataSource={data} columns={Columns}>
      {/* <Column title="Company Name" dataIndex="companyName" key="companyName" />
      <Column
        title="Company Legal Number"
        dataIndex="companyLegalNumber"
        key="companyLegalNumber"
      />
      <Column
        title="Incorporation Company"
        dataIndex="incorporationCompany"
        key="incorporationCompany"
      />
      <Column title="Website" dataIndex="website" key="website" />
      <Column
        title="Action"
        key="action"
        render={(_: any, record: DataType) => (
          <Space size="middle">
              <img onClick={showModal} src={EditIcon} alt="editicon" className='cursor-pointer' width={20} />
              <img src={DeleteIcon} alt="deleteicon" className='cursor-pointer' width={20} />
          </Space>
        )}
      /> */}
    </Table>
  )
}
export default CompaniesTable
