// node libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
// components
import Layout from '../../components/layout';
import Table from '../../containers/products/table';
// methods
import { filter } from './methods/filter';
import { mapDispatch } from './methods/mapDispatch';
import { productTableData } from '../../utils/productTableData';

const Products: React.FC<ComponentType> = ({ getProductsData }) => {

    return (
        <>
            <Layout />
            <div className="wrapperProducts">
                <div className="headerProducts">
                    <input type="text" placeholder="جست و جو براساس عنوان محصول"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            filter(event, productTableData, getProductsData);
                        }} />
                    <Link to="/add-products" className="addButton">ایجاد محصول</Link>
                </div>
                <Table />
            </div>
        </>
    );
}
// export
const connector = connect(null, mapDispatch);
type ComponentType = ConnectedProps<typeof connector>;
export default connector(Products);