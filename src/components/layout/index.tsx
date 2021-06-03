// node libraries
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// components
import Slider from '../slider';
// image
import menu from './image/menu.svg';
import user from './image/user.png';

const Layout: React.FC = () => {
    // open slider
    let [showSlider, setShowSlider] = useState<boolean>(false);

    return (
        <>
            <div className="wrapperHeader">
                <div className="wrapperIconSlider">
                    <img src={menu} alt="icon slider" onClick={() => {
                        setShowSlider(true);
                    }} />
                </div>
                <div className="wrapperUser">
                    <img src={user} alt="user" className="userIcon" />
                    <span>سحر شفیعی</span>
                </div>
            </div>
            <Slider open={showSlider} onClose={() => { setShowSlider(false) }}>
                <div className="wrapperMenu">
                    <img src={user} alt="user" />
                    <h4>سحر شفیعی</h4>
                    <hr />
                    <ul>
                        <li><Link to="" className="link">پیشخوان</Link></li>
                        <li><Link to="/products" className="link">محصولات</Link></li>
                        <li><Link to="" className="link">مالی</Link></li>
                        <li><Link to="" className="link">سفارشات</Link></li>
                    </ul>
                </div>
            </Slider>
        </>
    );
}
// export
export default Layout;