import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
function Header() {
    return (
        <div className="header">
            <Link to="/">
            <img
                className="header__logo" src="https://press.aboutamazon.com/sites/g/files/knoqqb37121/themes/site/nir_pid2497/styleguide/media/logo.svg">
                
            </img>
            </Link>
           
           <div className="header__search">
               <input
               className="header__searchInput"
               type="text"/>
                <SearchIcon className="header__searchIcon"></SearchIcon>  
            </div> 
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        hello guest
                    </span>
                    <span className="header__optionLineTwo">
                        sign in
                    </span>

                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                       Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Youur
                    </span>
                    <span className="header__optionLineTwo">
                       Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                        <span className="header__basekCount header__optionLineTwo ">
                            0
                        </span>

                    </div>
                </Link>
                


            </div>
        </div>
        
    )
}

export default Header
