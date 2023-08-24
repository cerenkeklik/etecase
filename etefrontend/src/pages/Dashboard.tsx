import "../assets/css/General.css";
import "../assets/css/Dashboard.css";
import DashboardCard from "../components/DashboardCard";
import CardContent1 from "../components/CardContent1";
import CardContent2 from "../components/CardContent2";

const Dashboard = () => {
   
    return(
        <div className="dashboard-container">
           <DashboardCard CardContent={CardContent2} />
           <DashboardCard CardContent={CardContent2} />
           <DashboardCard CardContent={CardContent1} />
           <DashboardCard CardContent={CardContent1} />
           <DashboardCard CardContent={CardContent1} />
        </div>
    )
}
export default Dashboard;