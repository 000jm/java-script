
// const url = `https://api.restcountries.com/countries/v5/names.common/Canada`

// // async function chamarApi() {
// //     fetch(url)
// //     .then(response => response.json())
// //     .then(data => console.log(data))
// //     .catch(error => console.error(error));
// // }

// async function chamarApi() {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data)
// }
// chamarApi();

const div = document.querySelector("div")

div.addEventListener("mouseenter", function () {
    div.style.backgroundColor = "blue"
})

div.addEventListener("mouseleave", function () {
    div.style.backgroundColor = "red"
})
