// filter tasks
export function filter(
    event: React.ChangeEvent<HTMLInputElement>,
    products: {
        id: number;
        name: string;
        number: string;
        price: string;
    }[],
    getProductsData: (data: {}[]) => void,
) {
    getProductsData(
        products.filter(
            (value) => {
                return value.name.includes(`${event.target.value}`)
                    ? value
                    : '';
            }
        )
    );
}
