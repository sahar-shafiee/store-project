// node libraries
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
// components
import Layout from '../../../components/layout';
import Tabs from './tabs';
// methods
import { getProductData } from './methods/getProductData';
import { mapDispatch } from './methods/mapDispatch';
import { mapState } from './methods/mapState';
// image
import viewpoint from '../../../assets/image/product/viewpoint.jpg';

const Details: React.FC<ComponentType> = ({ getProductsData, products }) => {

    let productData = getProductData(products);
    let productImage = require(`../../../assets/image/product/${productData?.image}`).default;

    return (
        <>
            <Layout />
            <div className="wrapperDetails py-5">
                <div className="firstContent row p-4">
                    <div className="col-4 productImage">
                        <img src={productImage} alt="product" />
                    </div>
                    <div className="col-4 px-2 d-flex flex-column">
                        <h4>{productData?.name}</h4>
                        <img src={viewpoint} alt="viewpoint" className="w-50" />
                        <span><b>ویژگی های محصول :</b></span>
                        <span>وزن خالص : {productData?.weight}</span>
                        <span>بسته بندی : دارد</span>
                        <span>وزن : {productData?.discountedPrice}</span>
                        <span>تعداد : {productData?.number}</span>
                        <hr />
                        <span>فروشنده : حجره پاسارگاد</span>
                        <span className="span">آخرین بازدید حجره دار : ساعاتی پیش</span>
                    </div>
                    <div className="col-4 px-5 d-flex flex-column">
                        <span><small>{productData?.price}</small> <b className="discountedPrice">{productData?.discountedPrice} تومان</b></span>
                        <span>رنگ : {productData?.color}</span>
                        <span className="colorProduct">{productData?.color}</span>
                        <button className="mt-4">افزودن به سبد خرید</button>
                        <hr />
                        <span className="send">زمان ارسال : ارسال از پنج روز دیگه</span>
                        <span className="city">ارسال : از تهران</span>
                        <span className="city">ارسال به : سراسر کشور</span>
                    </div>
                </div>
                <Tabs productData={productData} />
            </div>
        </>
    );
}
// export
const connector = connect(mapState, mapDispatch);
type ComponentType = ConnectedProps<typeof connector>;
export default connector(Details);