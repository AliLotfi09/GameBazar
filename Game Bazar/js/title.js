let docTitle = document.title;
window.addEventListener('blur', () => {
    document.title = "مارو ننداز دور :(";
});
window.addEventListener('focus
', () => {
    document.title = docTitle;
})