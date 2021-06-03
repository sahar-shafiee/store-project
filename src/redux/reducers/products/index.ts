
import { InitInterface } from './interface';
import * as Types from '../../constants/products';

const init: InitInterface = {
    products: []
}

function reducer(state: InitInterface = init, actions: any): InitInterface {
    switch (actions.type) {
        case Types.PRODUCTS:
            return {
                ...state,
                products: actions.payload
            }
        default:
            return {
                ...state
            }
    }
}


export default reducer;