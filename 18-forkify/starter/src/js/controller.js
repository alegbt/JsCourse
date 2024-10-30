import * as Model from './model.js'
import recipeView from './views/recipeView.js';
import recipeView from './views/searchView.js';
import resultsView from './views/resultsView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';





const controlRecipes = async function() {
  try{
    const id = window.location.hash.slice(1)

    if(!id) return;
    recipeView.renderSpinner()

    //1 loading recipe
    await Model.loadRecipe(id)
    
    //2 rendering recipe
    recipeView.render(Model.state.recipe);
    
  }catch(err){
    console.log(err);
    recipeView.renderError()
  }
}

controlRecipes()


const controlSearchResults = async function() {
  try{

    resultsView.renderSpinner();

    
    //get search query
    const query = searchView.getQuery();
    if(!query) return;
    
    //2 load search results
    await Model.loadSearchResults(query)


    // render rsults
    console.log(Model.state.search.results);

  }catch(err){
    console.log(err);
  }
}







const init = function(){
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults)
}
init();


