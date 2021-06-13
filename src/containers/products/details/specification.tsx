// node libraries
import React from 'react';
// interface
import { init } from './inteface';


const Specification: React.FC<init> = ({ productData }) => {

    return (
        <div className="row mt-5">
            <div className="first col d-flex flex-column">
                <span>وزن خالص :</span>
                <span>وزن با بسته بندی :</span>
                <span>شیوه نگهداری :</span>
                <span>زمان ماندگاری :</span>
                <span>مناسب برای :</span>
                <span>سایر توضیحات :</span>
            </div>
            <div className="second col-10 d-flex flex-column p-0">
                <span>{productData?.weight}</span>
                <span>{productData?.weightPackaging}</span>
                <span>فضای خانه</span>
                <span>طولانی</span>
                <span>بزرگسالان</span>
                <span>{productData?.description}</span>
            </div>
        </div>
    )
}
// export
export default Specification;