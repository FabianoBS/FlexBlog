window.addEventListener('load', function () {
    const menuItens = document.querySelectorAll('.menu-bg a[href^="#"]');

    menuItens.forEach(item => {
        item.addEventListener('click', scrollToIdOnClick);
    })

    function scrollToIdOnClick(event) {
        event.preventDefault();
        const to = getScrollTopByHref(event.target) - 10;

        scrollToPosition(to);
    }

    function scrollToPosition(to) {
        window.scroll({
            top: to,
            behavior: "smooth",
        });
    }

    function getScrollTopByHref(element) {
        const id = element.getAttribute('href');
        return document.querySelector(id).offsetTop;
    }
});


