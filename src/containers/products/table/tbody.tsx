// node libraries
import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
// methods
import { mapState } from './methods/mapState';
import { mapDispatch } from './methods/mapDispatch';
import { productTableData } from '../../../utils/productTableData';
import { deleteProduct } from './methods/deleteProduct';

const Tbody: React.FC<ComponentType> = ({ getProductsData, products }) => {
    useEffect(() => {
        getProductsData(productTableData);
    }, [getProductsData]);
    return (
        <tbody>
            {products.length > 0 ? products.map((value, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{value.name}</td>
                        <td>{value.number}</td>
                        <td>{value.price}</td>
                        <td className="deleteTd" onClick={() => {
                            deleteProduct(products, getProductsData, value.name);
                        }}>حذف</td>
                    </tr>
                )
            }) : <tr>
                <td colSpan={5}>داده ای موجود نیست</td>
            </tr>
            }
        </tbody>
    );
}
// export
const connector = connect(mapState, mapDispatch);
type ComponentType = ConnectedProps<typeof connector>;
export default connector(Tbody);