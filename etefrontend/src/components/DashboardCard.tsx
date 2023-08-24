import { Card } from 'antd'

const DashboardCard = ({CardContent}: {CardContent: any}) => {
  return (
    <Card style={{ width: 300, height: 200 }}>
      <CardContent />
    </Card>
  )
}
export default DashboardCard
