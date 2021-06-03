// node libraries
import React from 'react';
import { Link } from 'react-router-dom';
// image
import notFound from '../../assets/image/notFound/not-found.png';

// not found page
const NotFount: React.FC = () => {
    return (
        <div className="divParent">
            <img src={notFound} alt="page not found" />
            <div className="wrapperLink">
                <Link to="/" className="link">داشبورد</Link>
            </div>
        </div>
    );
}
// export
export default NotFount;