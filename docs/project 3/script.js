// --- Utilities for localStorage ---
function getRecipes() {
    return JSON.parse(localStorage.getItem("recipes")) || [];
  }
  
  function saveRecipes(recipes) {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }
  
  // --- Load and Render Recipes ---
  function loadRecipes(filter = "") {
    const container = document.getElementById("recipeContainer");
    container.innerHTML = "";
  
    const recipes = getRecipes().filter(recipe =>
      recipe.name.toLowerCase().includes(filter.toLowerCase())
    );
  
    recipes.forEach((recipe) => {
      const card = document.createElement("div");
      card.className = "col-md-4";
  
      card.innerHTML = `
        <div class="card mb-4 h-100">
          <div class="card-body">
            <h5 class="card-title">${recipe.name}</h5>
            <h6>Ingredients:</h6>
            <p>${recipe.ingredients.replace(/\n/g, "<br>")}</p>
            <h6>Instructions:</h6>
            <p>${recipe.instructions}</p>
          </div>
          <div class="card-footer d-flex justify-content-end gap-2">
            <button class="btn btn-sm btn-primary" onclick="editRecipe('${recipe.id}')">Edit</button>
            <button class="btn btn-sm btn-danger" onclick="deleteRecipe('${recipe.id}')">Delete</button>
          </div>
        </div>
      `;
  
      container.appendChild(card);
    });
  }
  
  // --- Save or Update Recipe ---
  function saveRecipe(e) {
    e.preventDefault();
  
    const id = document.getElementById("recipeId").value;
    const name = document.getElementById("name").value.trim();
    const ingredients = document.getElementById("ingredients").value.trim();
    const instructions = document.getElementById("instructions").value.trim();
  
    if (!name || !ingredients || !instructions) return;
  
    const recipes = getRecipes();
  
    if (id) {
      // Update
      const index = recipes.findIndex((r) => r.id === id);
      if (index !== -1) {
        recipes[index] = { id, name, ingredients, instructions };
      }
    } else {
      // Create
      const newRecipe = {
        id: Date.now().toString(),
        name,
        ingredients,
        instructions,
      };
      recipes.push(newRecipe);
    }
  
    saveRecipes(recipes);
    resetForm();
    loadRecipes();
  }
  
  // --- Edit Recipe ---
  function editRecipe(id) {
    const recipes = getRecipes();
    const recipe = recipes.find((r) => r.id === id);
    if (!recipe) return;
  
    document.getElementById("recipeId").value = recipe.id;
    document.getElementById("name").value = recipe.name;
    document.getElementById("ingredients").value = recipe.ingredients;
    document.getElementById("instructions").value = recipe.instructions;
  }
  
  // --- Delete Recipe ---
  function deleteRecipe(id) {
    const recipes = getRecipes().filter((r) => r.id !== id);
    saveRecipes(recipes);
    loadRecipes();
  }
  
  // --- Reset Form ---
  function resetForm() {
    document.getElementById("recipeForm").reset();
    document.getElementById("recipeId").value = "";
  }
  
  // --- Event Listeners ---
  document.addEventListener("DOMContentLoaded", () => {
    loadRecipes();
  
    document.getElementById("recipeForm").addEventListener("submit", saveRecipe);
  
    document.getElementById("searchInput").addEventListener("input", (e) => {
      loadRecipes(e.target.value);
    });
  });
  