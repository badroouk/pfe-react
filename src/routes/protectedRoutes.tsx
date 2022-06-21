import React from 'react';
import { Route, Navigate, RouteProps, Routes } from 'react-router-dom'
import AdminPage from '../pages/DashboardPage';
import AdminAcceuilPage from '../pages/AdminAcceuilPage';
import UserAcceuilPage from '../pages/UserAcceuilPage';
import MonitoringPage from '../pages/MonitoringPage';
import RealTimeMenu from '../pages/RealTimeData/RealTimeMenu';
import HumidityRealChart from '../pages/RealTimeData/RealTimeHumi';
import LandingPage from '../pages/RealTimeData/RealTimeTemp';
import CarbRealChart from '../pages/RealTimeData/RealTimeCarb';
import UvRealChart from '../pages/RealTimeData/RealTimeUv';
import LightRealChart from '../pages/RealTimeData/RealTimeLum';
import WaterRealChart from '../pages/RealTimeData/RealTimeWater';
import Backup from '../pages/BackUpData/BackUpMenu';
import BackUpTemp from '../pages/BackUpData/BackUpDataTemp';
import BackUpUv from '../pages/BackUpData/BackUpDataTemp';
import BackUpLight from '../pages/BackUpData/BackUpDataLight';
import BackUpCo from '../pages/BackUpData/BackUpDataCo';
import BackUpWater from '../pages/BackUpData/BackUpDataWater';
import BackUpHum from '../pages/BackUpData/BackUpDataHum';



interface Props extends RouteProps {
    isAdmin: string;
    isAuth: boolean;
}

const ProtectedRoute = ({ isAuth, isAdmin }: Props) => {
    if (isAuth) {
        if (isAdmin == "1") {
            return <Routes><Route path="/admin" element={<AdminPage title={"Users Table"}
                captions={["User", "Role", "Status", "created", ""]} />} />
                <Route path="/" element={<AdminAcceuilPage />} />
                <Route path="/realtime" element={<RealTimeMenu />} />
                <Route path="/monitoring" element={<MonitoringPage />} />
                <Route path="/realtime/temp" element={<LandingPage />} />
                <Route path="/realtime/humi" element={<HumidityRealChart />} />
                <Route path="/realtime/lum" element={<LightRealChart />} />
                <Route path="/realtime/uv" element={<UvRealChart />} />
                <Route path="/realtime/carb" element={<CarbRealChart />} />
                <Route path="/realtime/water" element={<WaterRealChart />} />
                <Route path="/backup/temp" element={<BackUpTemp />} />
                <Route path="/backup/uv" element={<BackUpUv />} />
                <Route path="/backup/light" element={<BackUpLight />} />
                <Route path="/backup/co" element={<BackUpCo />} />
                <Route path="/backup/water" element={<BackUpWater />} />
                <Route path="/backup/hum" element={<BackUpHum />} />
                <Route path="/backup" element={<Backup />} /></Routes>
        } else if (isAdmin == "0") {
            return <Routes><Route path="/" element={<UserAcceuilPage />} />
                <Route path="/realtime" element={<RealTimeMenu />} />
                <Route path="/monitoring" element={<MonitoringPage />} />
                <Route path="/realtime/temp" element={<LandingPage />} />
                <Route path="/realtime/humi" element={<HumidityRealChart />} />
                <Route path="/realtime/lum" element={<LightRealChart />} />
                <Route path="/realtime/uv" element={<UvRealChart />} />
                <Route path="/realtime/carb" element={<CarbRealChart />} />
                <Route path="/realtime/water" element={<WaterRealChart />} /></Routes>
        }

    } else {
        return <Navigate to={"/login"} />
    }




}

export default ProtectedRoute;