const img = document.querySelector("img");

document.querySelector(".search").addEventListener("click", () => {
  gifapi();
});

document.querySelector(".changeGif").addEventListener("click", () => {
  gifapi();
});

function gifapi() {
  let query = document.getElementById("searchInput").value;
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=LFJp29cz2kJ9PhCNOoKXI3wQxC8noUVJ&s=${query}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      // console.log(response.data.images.original.url);
      img.src = response.data.images.original.url;
    });
}
