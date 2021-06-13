// function for add and remove class on tabs
export function clickOnTabs(
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
) {
    let elements = document.querySelectorAll("span");
    elements.forEach((value) => {
        value.classList.remove("activeTabs");
    });
    event.currentTarget.classList.add("activeTabs");
}