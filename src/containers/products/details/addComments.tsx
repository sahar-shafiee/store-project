// node libraries
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
// components
import Layout from '../../../components/layout';
// methods
import { getProductData } from './methods/getProductData';
import { mapDispatch } from './methods/mapDispatch';
import { mapState } from './methods/mapState';

const AddComments: React.FC<ComponentType> = ({ getProductsData, products }) => {

    let productData = getProductData(products);
    let productImage = require(`../../../assets/image/product/${productData?.image}`).default;

    return (
        <>
            <Layout />
            <div className="wrapperAddComment">
                <div className="topWrapper row py-3">
                    <div className="productImage col-4">
                        <img src={productImage} alt="product" />
                    </div>
                    <div className="col-8">
                        <span>{productData?.name}</span>
                        <hr />
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="bottomWrapper row">
                    <form className="col-12">
                        <div className="col-6 d-flex flex-column">
                            <label htmlFor="comment">متن دیدگاه شما (اجباری)</label>
                            <textarea name="" id="comment" cols={30} rows={10}></textarea>
                            <p>آیا خرید این محصول را به دیگران پیشنهاد می دهید؟</p>
                            <div className="col-12">
                                <label>پیشنهاد میکنم</label>
                                <input type="radio" name="suggestion" value="پیشنهاد میکنم" />
                                <label>پیشنهاد نمیکنم</label>
                                <input type="radio" name="suggestion" value="پیشنهاد نمیکنم" />
                                <label>نظری ندارم</label>
                                <input type="radio" name="suggestion" value="نظری ندارم" />
                            </div>
                        </div>
                        <div className="col-6 d-flex flex-column">

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
// export
const connector = connect(mapState, mapDispatch);
type ComponentType = ConnectedProps<typeof connector>;
export default connector(AddComments);