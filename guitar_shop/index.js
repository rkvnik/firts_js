function render() {
    const productStore = localStorageUtil.getProducts();

    headerPage.render(productStore.length);
    productsPage.render();

}

spinnerPage.render();

let CATALOG = [];

fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;

        setTimeout(() => {
            spinnerPage.handleClear();
            render();
        }, 1000);
    })
    .catch(error => {
        spinnerPage.handleClear();
        errorPage.render();
    });
