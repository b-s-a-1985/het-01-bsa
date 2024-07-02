import Recipe from './components/Recipe'
import "./App.css"

import recipes from './components/recipes.json';

function App() {

  return (
    <div>
      <h1>Receptek</h1>

      <article>
        {
          recipes.map((data) => (
            <Recipe key={data.key}
                    name={data.name} 
                    ingredients={data.ingredients} 
                    instructions={data.instructions}
                    difficulty={data.difficulty}/>
          ))
        }
      </article>
      
      <footer>
        A <i>./components/recipe.json</i> - t szerkesztve további receptek adhatók a fenti listához.
        Megjegyzések <i>a README.md</i> - ben.
        </footer>
      
    </div>
  );
}

// http://localhost:3000

export default App;
