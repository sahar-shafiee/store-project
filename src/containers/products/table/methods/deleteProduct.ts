// delete product
export function deleteProduct(
    products: {
        id: number;
        name: string;
        number: string;
        price: string;
    }[],
    getProductsData: (data: {}[]) => void,
    name: string
) {
    getProductsData(
        products.filter(
            (value) => {
                return value.name !== name
                    ? value
                    : '';
            }
        )
    );
}