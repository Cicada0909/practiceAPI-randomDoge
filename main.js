const btnRandomImg = document.querySelector("#btn");
const randomImg = document.querySelector("#random-img");

const URL_RANDOM_DOGE = "https://dog.ceo/api/breeds/image/random";

const getRandomDoge = () => {
    fetch(URL_RANDOM_DOGE)
    .then((res) => res.json())
    .then((data) => {
        randomImg.setAttribute("src", data.message)
    })
}

btnRandomImg.addEventListener("click", getRandomDoge);


