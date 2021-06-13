// function for find product
export function getProductData(
    products: {
        id: number,
        name: string,
        number: string,
        price: number,
        image: string,
        discountedPrice: number,
        status: string,
        weight: number,
        weightPackaging: number,
        color: string,
        description: string
    }[]
) {
    // get params
    let params = (new URL(document.location.href)).searchParams;
    // get id from url
    let id = params.get('id');
    // find object
    let data = products.find(value => {
        return id && value.id === parseInt(id) ? value : ""
    });
    // return object
    return data;
}