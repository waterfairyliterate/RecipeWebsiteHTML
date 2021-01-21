function add_recipe() {
  if (sessionStorage.getItem("login") != null) {
    setTimeout(function(){document.location.href = "../add_recipe_page/add_recipe.html";},250);
  }
  else {
    setTimeout(function(){document.location.href = "../sign_up_login_page/sign_up_login.html";},250);
      alert("login to add recipes");
  }
}

function getRecipeIndex() {
	if (localStorage) {
		if (localStorage.getItem("recipeIndex") == null) localStorage.setItem("recipeIndex", 0);
		else return localStorage.getItem("recipeIndex");
	}
	else {
		alert("Sorry, your browser does not support local storage");
	}
}

function addRecipe() {
  if(localStorage) {
    var index = getRecipeIndex();
    var myrecipe = {"category": document.getElementById("recipe_category").value, "author": document.getElementById("recipe_author").value,
    "name": document.getElementById("recipe_name").value, "title": document.getElementById("recipe_name").value, "description": document.getElementById("recipe_desc").value,
    "ingredients": document.getElementById("ingredients").value, "instructions": document.getElementById("instructions").value, "index": "recipe" + index}
    localStorage.setItem("recipe" + index, JSON.stringify(myrecipe));
    localStorage.setItem("recipeIndex", ++index);
  }
  else {
    alert("Sorry, your browser does not support local storage");
  }
}

function getRecipes() {
    if (localStorage) {
      if (localStorage.getItem("recipeIndex") > 0) {
        var index = localStorage.getItem("recipeIndex");
        for (i = 0; i < index; i++) {
          var recipe = JSON.parse(localStorage.getItem("recipe" + i));
          var option = document.getElementById(recipe.category);
          var recipeOpt = document.createElement("option");
          recipeOpt.text = recipe.name;
          recipeOpt.value = recipe.index;
          option.appendChild(recipeOpt);
        }
      }
    } else {
      alert("Sorry, your browser does not support local storage");
    }
}

function checkInserted() {
  if (localStorage) {
    if (localStorage.getItem("inserted") == null) {
      setTimeout(function(){document.location.href = "../home/index.html";},250);
    }
  }
  else {
    alert("Sorry, your browser does not support local storage");
  }
}