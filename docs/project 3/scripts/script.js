// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    loadRecipes(); // Load recipes from localStorage on page load
  
    // Handle form submission for adding a new recipe
    document.getElementById("recipeForm").addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent page reload
  
      // Get form values
      const name = document.getElementById("recipeName").value.trim();
      const ingredients = document.getElementById("recipeIngredients").value.trim();
      const instructions = document.getElementById("recipeInstructions").value.trim();
  
      // Generate a unique ID for the recipe
      const id = Date.now().toString();
  
      // Create recipe object
      const newRecipe = { id, name, ingredients, instructions };
  
      // Get existing recipes, add the new one, and save back to localStorage
      const recipes = getRecipes();
      recipes.push(newRecipe);
      saveRecipes(recipes);
  
      // Clear the form and close the modal
      document.getElementById("recipeForm").reset();
      bootstrap.Modal.getInstance(document.getElementById("recipeModal")).hide();
  
      // Refresh the UI
      loadRecipes();
    });
  });
  
  // Get recipes from localStorage (or return empty array if none)
  function getRecipes() {
    return JSON.parse(localStorage.getItem("recipes")) || [];
  }
  
  // Save recipes array to localStorage
  function saveRecipes(recipes) {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }
  
  // Render all recipes to the UI
  function loadRecipes() {
    const recipeContainer = document.getElementById("recipeContainer");
    recipeContainer.innerHTML = ""; // Clear current cards
  
    const recipes = getRecipes();
  
    recipes.forEach((recipe) => {
      const col = document.createElement("div");
      col.className = "col-md-4";
  
      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${recipe.name}</h5>
            <p class="card-text"><strong>Ingredients:</strong><br>${recipe.ingredients}</p>
            <p class="card-text"><strong>Instructions:</strong><br>${recipe.instructions}</p>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <button class="btn btn-sm btn-primary" disabled>Edit</button>
            <button class="btn btn-sm btn-danger" disabled>Delete</button>
          </div>
        </div>
      `;
  
      recipeContainer.appendChild(col);
    });
  }
  