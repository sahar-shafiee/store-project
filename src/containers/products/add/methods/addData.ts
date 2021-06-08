// add data form in to redux
export function addData(
    event: React.FormEvent<HTMLFormElement>,
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
    mapDispatch: (data: {}[]) => void
) {
    event.preventDefault();
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
        if (inputs[i].id !== "") {
            data[inputs[i].id] = inputs[i].value
        }
    }
    data.status = selectBox?.value;
    data.id = Math.floor((Math.random() * 10) + 1000);
    products.push(data);
    mapDispatch(products);
}