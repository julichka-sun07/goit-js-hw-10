import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';

import { fetchBreeds } from './cat-api.js';

// Виклик функції fetchBreeds() для отримання масиву порід
fetchBreeds()
  .then(breeds => {
    // Використовуйте масив порід тут, наприклад, для наповнення select елемента
    const selectElement = document.querySelector('.breed-select');
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      selectElement.appendChild(option);
    });
  })
  .catch(error => {
    console.log(error);
  });

  import { fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');

breedSelect.addEventListener('change', () => {
  const selectedBreedId = breedSelect.value;
  
  showLoader();

  fetchCatByBreed(selectedBreedId)
    .then(data => {
      hideLoader();
      showCatInfo(data);
    })
    .catch(error => {
      hideLoader();
      showError();
      console.log(error);
    });
});
function showLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
}

function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
}

function showError() {
  const error = document.querySelector('.error');
  error.style.display = 'block';
}

function hideError() {
  const error = document.querySelector('.error');
  error.style.display = 'none';
}

function showCatInfo(cat) {
  const { breeds, url } = cat;
  const breed = breeds[0];

  const catInfoHTML = `
    <h2>Cat Information</h2>
    <p><strong>Breed:</strong> ${breed.name}</p>
    <p><strong>Description:</strong> ${breed.description}</p>
    <p><strong>Temperament:</strong> ${breed.temperament}</p>
    <img src="${url}" alt="Cat Image">
  `;
  catInfo.innerHTML = catInfoHTML;
}


// const URL = "https://api.thecatapi.com/v1/breeds";
// const API_KEY = "live_CrqT7ZvnaVE9mwMgaNSEZPVbet7dJRSZ8ze5EJMIhCnHY9ZjrJZwwwCJIsZMMh22";

// function getNews(quary){
//   return fetch(`${URL}?apiKey=${API_KEY}&q=${quary}`).then((res) => res.json()); 
// }
// export default { getNews };