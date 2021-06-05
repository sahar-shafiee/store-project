// delete product
export function deleteProduct(
    products: {
        id: number,
        name: string,
        number: string,
        price: number,
        image: string,
        discountedPrice: number,
        status: string,
        weight: number,
        weightPackaging: number
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