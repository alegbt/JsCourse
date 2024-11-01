import View from "./View";
import icons from 'url:../../img/icons.svg'

class resultsView extends View{
    _parentElement = document.querySelector('.results');
    _errorMessage = 'no recipe found';
    _message = '';

    _generateMarkup() {
      console.log(this._data);
      return this._data.map(this._generateMarkupPreview.bind(this)).join('');
  }
  
  _generateMarkupPreview(result) {
      return `
          <li class="preview">
              <a class="preview__link preview__link--active" href="#${result.id}">
                  <figure class="preview__fig">
                      <img src="${result.image}" alt="${result.title}" />
                  </figure>
                  <div class="preview__data">
                      <h4 class="preview__title">${result.title}</h4>
                      <p class="preview__publisher">${result.publisher}</p>

                      

                  </div>
              </a>
          </li>
      `;
  }
  
    
}


export default new resultsView();


