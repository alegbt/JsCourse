import * as Model from './model.js'
import recipeView from './views/recipeView.js';
import recipeView from './views/searchView.js';
import resultsView from './views/resultsView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';


// if (module.hot) {
//   module.hot.accept();
// }


const controlRecipes = async function() {
  try{
    const id = window.location.hash.slice(1)

    if(!id) return;
    recipeView.renderSpinner()

    //0 update results view to marek selected searc result
    resultsView.update(Model.getSearchResultPage())
    bookmarksView.update(Model.state.bookmarks)

    //1 loading recipe
    await Model.loadRecipe(id)
    
    //2 rendering recipe
    recipeView.render(Model.state.recipe);
    
  }catch(err){
    console.log(err);
    recipeView.renderError()
  }
}

//controlRecipes()


const controlSearchResults = async function() {
  try{
    resultsView.renderSpinner();
    //get search query
    const query = searchView.getQuery();
    if(!query) return;
    //2 load search results
    await Model.loadSearchResults(query)
    //3 render rsults
    console.log(Model.state.search.results);
    resultsView.render(Model.getSearchResultPage())
    //4 render initial pagination buttons
    paginationView.render(Model.state.search)
  }catch(err){
    console.log(err);
  }
}

const controlPagination = function(goToPage){
      //1 render new results
      resultsView.render(Model.getSearchResultPage(goToPage))
  
      //2 render initial pagination buttons
      paginationView.render(Model.state.search)
}



const controlServings = function(newServings){
  //update recipe serving (in state)
  Model.updateServings(newServings)
  //update tecipe view
  // recipeView.render(Model.state.recipe);
  recipeView.update(Model.state.recipe);
}


const controlAddBookmark = function () {
  // 1) Add/remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2) Update recipe view
  recipeView.update(model.state.recipe);

  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};



const init = function(){
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults)
  paginationView.addHandlerClick(controlPagination);
}
init();


