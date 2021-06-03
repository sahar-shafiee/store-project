import { ActionType } from '../actionThunkConfig';
import * as Types from '../../constants/products';

export const getProductsData = (data: {}[]): ActionType => dispatch => {
    dispatch({
        type: Types.PRODUCTS,
        payload: data
    });
}