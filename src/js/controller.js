import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable'; // pollyfilling everything else
import 'regenerator-runtime/runtime'; // pollyfilling async/await

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);

  } catch (err) {
    alert(err)
  }
};

['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));