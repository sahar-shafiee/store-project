// node libraries
import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
// components
import Layout from '../../../components/layout';
import FirstColumn from './firstColumn';
import SecondColumn from './secondColumn';
// methods
import { mapState } from './methods/mapState';
import { mapDispatch } from './methods/mapDispatch';
import { getEditData } from './methods/getEditData';
import { addData } from './methods/addData';
import { EditData } from './methods/editData';


const Add: React.FC<ComponentType> = ({ products, getProductsData }) => {

    let editData = getEditData(products);
    let history = useHistory();

    return (
        <>
            <Layout />
            <form action="#" className="formAdd"
                onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                    if (editData) {
                        EditData(event, editData, products, getProductsData);
                    } else {
                        addData(event, products, getProductsData);
                    }
                    history.goBack();
                }}>
                <FirstColumn editData={editData} />
                <SecondColumn editData={editData} />
                <button type="submit" className="submit">
                    ثبت
                </button>
            </form>
        </>
    );
}
// export
const connector = connect(mapState, mapDispatch);
type ComponentType = ConnectedProps<typeof connector>;
export default connector(Add);