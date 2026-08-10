
const url = `https://api.restcountries.com/countries/v5/names.common/Canada`

async function chamarApi() {
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}