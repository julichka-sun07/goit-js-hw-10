
// import API from "./index.js";

// API.getNews("gpt-3").then((result) => console.log(result));
// import { fetchBreeds, fetchCatByBreed } from './cat-api';

import Notiflix from 'notiflix';

const error = document.querySelector('.error');
const loader = document.querySelector('.loader');

export function fetchBreeds() {
    const url = 'https://api.thecatapi.com/v1/breeds';
    const api_key = 'live_CrqT7ZvnaVE9mwMgaNSEZPVbet7dJRSZ8ze5EJMIhCnHY9ZjrJZwwwCJIsZMMh22';

    return fetch(`${url}?api_key=${api_key}`).then(resp => {
        if (!resp.ok) {
            loader.style.display = "none";
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
            throw new Error(resp.statusText);
        }

        return resp.json();
    })
};

export function fetchCatByBreed(breedId) {
    const url = 'https://api.thecatapi.com/v1/images/search';
    const api_key = 'live_CrqT7ZvnaVE9mwMgaNSEZPVbet7dJRSZ8ze5EJMIhCnHY9ZjrJZwwwCJIsZMMh22';

    return fetch(`${url}?breed_ids=${breedId}&api_key=${api_key}`).then(resp => {
        if (!resp.ok) {
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
            throw new Error(resp.statusText);
        }
        
        return resp.json();
    })
}
    
      