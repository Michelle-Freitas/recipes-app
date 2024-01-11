import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import recipes from '../db.json';

import Home from './pages/Home/Home';
import Menu from './components/Menu/Menu';
import Recipes from './pages/Recipes/Recipes';
import RecipePage from './pages/RecipePage/RecipePage';
import NotFound from './pages/notFound/notFound';
import Footer from './components/Footer/Footer';

const AppRouter = () => {
    const sugestion = [recipes.recipes[0], recipes.recipes[2], recipes.recipes[3]]
    const recipesList = recipes.recipes
    const [saltRecipesList, setSaltRecipesList] = useState([])
    const [sweetieRecipesList, setSweetieRecipesList] = useState([])

    useEffect(()=>{
        const filtredListSalt = recipesList.filter((recipe) => recipe.type === 'Salgada')
        const filtredListSweetie= recipesList.filter((recipe) => recipe.type === 'Doce')
        setSaltRecipesList(filtredListSalt)
        setSweetieRecipesList(filtredListSweetie)
    },[recipesList])

    return (
        <BrowserRouter>
            <Menu recipes={recipesList}/>
            <Routes>
                <Route path='/' element={<Home sugestion={sugestion}/>} />
                <Route path='/receitas' element={<Recipes recipes={recipesList} title={'Receitas'}/>} />
                <Route path='/salgadas' element={<Recipes recipes={saltRecipesList} title={'Receitas Salgadas'}/>} />
                <Route path='/doces' element={<Recipes recipes={sweetieRecipesList} title={'Receitas Doces'}/>} />
                <Route path='/receitas/:id/:route' element={<RecipePage recipes={recipesList} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
      </BrowserRouter>
    )
}

export default AppRouter
