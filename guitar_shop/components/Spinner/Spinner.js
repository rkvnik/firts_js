class Spinner {
    handleClear() {
        ROOT_SPINNER.innerHTML = '';
    }

    render() {
        const html = `
            <div class="spinner-container">
                <img class="spinner__img" src="components/Spinner/img/Infinity-2.9s-197px.svg" />
            </div>
        `;

        ROOT_SPINNER.innerHTML = html;
    }
}

const spinnerPage = new Spinner();