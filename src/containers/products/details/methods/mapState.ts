import { StoreType } from '../../../../redux/combine';

export function mapState({ Products }: StoreType) {
    return {
        products: Products.products
    }
}