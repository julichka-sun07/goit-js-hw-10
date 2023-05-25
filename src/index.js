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