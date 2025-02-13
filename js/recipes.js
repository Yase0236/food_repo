import { BASE_URL } from './info.js';

const DEFAULT_RECIPIES = 10;

const showRandomRecipies = (numRecipies = DEFAULT_RECIPIES) => {

  for (let index = 0; index < numRecipies; index++) {
    
    fetch(`${BASE_URL}/random.php`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        data = data.meals[0]
        document.querySelector("#recipe-list").innerHTML += `
          <article>

            <header>
              <h2>${data.strMeal}</h2>
            </header>
            <img src="${data.strMealThumb}/preview" alt="${data.strMeal}">
            <div>
              <p class="pill">${data.strCategory}</p>
              <p class="pill">${data.strArea}</p>
            </div>
            
          </article>
        `;
      })
      .catch(error => console.log(error));
  }
}

showRandomRecipies();