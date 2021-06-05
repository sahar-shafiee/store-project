// edit data table
export function EditData(
    event: React.FormEvent<HTMLFormElement>,
    editData: {
        id: number;
        name: string;
        number: string;
        price: number;
        image: string;
        discountedPrice: number;
        status: string;
        weight: number;
        weightPackaging: number;
    } | undefined,
    products: {
        id: number;
        name: string;
        number: string;
        price: number;
        image: string;
        discountedPrice: number;
        status: string;
        weight: number;
        weightPackaging: number;
    }[],
    getProductsData: (data: {}[]) => void
) {
    event.preventDefault();
    if (editData) {
        let index = products.indexOf(editData);
        let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        let selectBox: HTMLSelectElement | null = document.querySelector("#status");
        let data: {
            id: number,
            name: string,
            number: string,
            price: number,
            image: string,
            discountedPrice: number,
            status: string,
            weight: number,
            weightPackaging: number
        } | any = {}

        for (let i: number = 0; i < inputs.length; i++) {
            data[inputs[i].id] = inputs[i].value
        }
        data.status = selectBox?.value;

        products[index] = data;
        getProductsData(products);
    }
}