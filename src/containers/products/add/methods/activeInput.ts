// active input price with sale
export function activeInput() {
    let saleInput: HTMLInputElement | null = document.querySelector('.inputSale');
    let checkbox: HTMLInputElement | null = document.querySelector('.checkbox');
    if (checkbox?.checked) {
        saleInput?.classList.remove("sales");
        saleInput?.removeAttribute("disabled");
    } else {
        saleInput?.classList.add("sales");
        saleInput?.setAttribute("disabled", "true");
    }
}