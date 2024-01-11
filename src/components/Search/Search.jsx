import { ImSearch } from 'react-icons/im'
import { LabelStyled, SearchContainer, SearchResult } from './Search.style';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Search = ({recipesData}) => {
    const [searchValue, setSearchValue] = useState('')
    const [filterSearchValue, setFilterSearchValue] = useState([])
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        navigate('/receitas')
        let inputValue = e.target.value
        // setSearchValue(e.target.value)
        setSearchValue(inputValue)
        const filtredListSearch = recipesData.filter((recipe) => {
            // return recipe.title.toLowerCase().includes(searchValue.toLowerCase())
            return recipe.title.toLowerCase().includes(inputValue.toLowerCase())
        })
        setFilterSearchValue(filtredListSearch)
    }

    const handleSearchClick = (recipeClicked) => {
        console.log('cliquei', recipeClicked.route)
        setFilterSearchValue('')
        setSearchValue('')
        navigate(`/receitas/${recipeClicked.id}/${recipeClicked.route}`, {replace: true})
        // window.location.reload()
    }

    return (
        <SearchContainer>
            <LabelStyled htmlFor="search"><span className='sr-only'>Pesquise uma receita</span>
                <input type="text" name="search" id="search" placeholder="Busque uma receita" onChange={(e) => handleInputChange(e)} value={searchValue} autoComplete='off'/>
                <span>
                    <ImSearch />
                </span>
            </LabelStyled>

            {/* search-results */}
            {filterSearchValue.length > 0 && searchValue.length > 0 &&
                <SearchResult>
                    {filterSearchValue.map((recipe) => <button key={recipe.id} onClick={() => handleSearchClick(recipe)}>{recipe.title} <ImSearch /></button>)}
                </SearchResult>
            }
        </SearchContainer>
    )
}

export default Search;
