// click on slider icon to pen it
export function openSlider(open: boolean) {
    let sliderWrapper: HTMLDivElement | null = document.querySelector(
        '.wrapperSlider',
    );
    let contentWrapper: HTMLDivElement | null = document.querySelector(
        '.wrapperContent',
    );

    if (open && contentWrapper && sliderWrapper) {
        sliderWrapper.style.opacity = '1';
        contentWrapper.style.marginRight = `0px`;
    }
}