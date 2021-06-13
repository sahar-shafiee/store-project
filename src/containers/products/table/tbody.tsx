// node libraries
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
// methods
import { mapState } from './methods/mapState';
import { mapDispatch } from './methods/mapDispatch';
import { productTableData } from '../../../utils/productTableData';
import { deleteProduct } from './methods/deleteProduct';

const Tbody: React.FC<ComponentType> = ({ getProductsData, products }) => {
    useEffect(() => {
        if (products.length === 0) {
            getProductsData(productTableData);
        }
    }, [getProductsData, products.length]);
    return (
        <tbody>
            {products.length > 0 ? products.map((value, index) => {
                return (
                    <tr key={index}>
                        <td><Link to={`/product-details/?id=${value.id}`}>{index + 1}</Link></td>
                        <td><Link to={`/product-details/?id=${value.id}`}>{value.name}</Link></td>
                        <td><Link to={`/product-details/?id=${value.id}`}>{value.number}</Link></td>
                        <td><Link to={`/product-details/?id=${value.id}`}>{value.price}</Link></td>
                        <td>
                            <Link to={`/add-products/?id=${value.id}`} style={{ textDecoration: 'none' }}>
                                ویرایش
                            </Link>
                        </td>
                        <td className="deleteTd" onClick={() => {
                            deleteProduct(products, getProductsData, value.name);
                        }}>حذف</td>
                    </tr>
                )
            }) : <tr>
                <td colSpan={6}>داده ای موجود نیست</td>
            </tr>
            }
        </tbody>
    );
}
// export
const connector = connect(mapState, mapDispatch);
type ComponentType = ConnectedProps<typeof connector>;
export default connector(Tbody);