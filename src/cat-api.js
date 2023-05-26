export function fetchBreeds() {
    return fetch('https://api.thecatapi.com/v1/breeds')
      .then(response => {
        if (!response.ok) {
          throw new Error('Не вдалося отримати список порід.');
        }
        return response.json();
      })
      .then(data => {
        return data.map(breed => ({
          id: breed.id,
          name: breed.name
        }));
      });
  }

  export function fetchCatByBreed(breedId) {
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch cat information.');
        }
        return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        throw error;
      });
  }

// import API from "./index.js";

// API.getNews("gpt-3").then((result) => console.log(result));



    
      