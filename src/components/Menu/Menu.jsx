
import itensMenu from '../../../menuFilters.json';
// import LinkContainer from '../LinkContainer/LinkContainer';
import Search from '../Search/Search';
import { MenuContainer } from './Menu.style';
import { Link } from "react-router-dom";

const Menu = ({recipes}) => {
    return (
        <MenuContainer>
            {itensMenu.menuFilters.map((item) => (
                <li key={item.id}>
                    <Link to={item.route}>{item.type}</Link>
                </li>
            ))}
            <Search recipesData={recipes}/>
        </MenuContainer>
    )
}

export default Menu

