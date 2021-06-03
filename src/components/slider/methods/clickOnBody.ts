// function for click on body to close the slider
export function clickOnBody() {
    let sliderWrapper: HTMLDivElement | null = document.querySelector(
        '.wrapperSlider',
    );
    let contentWrapper: HTMLDivElement | null = document.querySelector(
        '.wrapperContent',
    );

    if (contentWrapper && sliderWrapper) {
        sliderWrapper.style.opacity = '0';
        contentWrapper.style.marginRight = `-100px`;
    }
}
