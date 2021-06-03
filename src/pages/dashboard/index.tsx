// node libraries
import React from 'react';
// components
import Layout from '../../components/layout';

// dashboard page
const Dashboard: React.FC = () => {
    return (
        <>
            <Layout />
            <div className="wrapperDashboard">
                <div className="first">
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                    <h2>مشتریان</h2>
                    <h2>45200</h2>
                    <span>افزایش %20</span>
                </div>
                <div className="second">
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                    <h2>سفارشات</h2>
                    <h2>67512</h2>
                    <span>افزایش %40</span>
                </div>
                <div className="third">
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                    <h2>ارسال</h2>
                    <h2>27535</h2>
                    <span>کاهش %60</span>
                </div>
            </div>
        </>
    );
}
// export
export default Dashboard;