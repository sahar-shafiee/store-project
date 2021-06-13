export interface init {
    productData: {
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
    } | undefined
}