function showMoreText() {
    const selectQuantity = document.getElementById("custom-quantity-select");
    const buttonNext = document.getElementById('value-next');
    const buttonBack = document.getElementById('value-back');


    if (selectQuantity) {
        selectQuantity.addEventListener("mousedown", (e) => {
            e.preventDefault();
        }, false)
    }

    if (buttonNext) {
        buttonNext.addEventListener("click", () => {
            const selectedIndex = selectQuantity.selectedIndex;

            const currElement = selectQuantity.options[selectedIndex];
            if (currElement.value !== '10') {
                const nextElement = selectQuantity.options[selectedIndex].nextElementSibling;

                currElement.removeAttribute('selected');
                nextElement.setAttribute('selected', '');
            }
        });
    }

    if (buttonBack) {
        buttonBack.addEventListener("click", () => {
            const selectedIndex = selectQuantity.selectedIndex;

            const currElement = selectQuantity.options[selectedIndex];
            if (currElement.value !== '1') {
                const nextElement = selectQuantity.options[selectedIndex].previousElementSibling;

                currElement.removeAttribute('selected');
                nextElement.setAttribute('selected', '');
            }
        });
    }
}

module.exports = {
    showMoreText
}

