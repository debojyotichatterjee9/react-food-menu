import React from "react";
import classes from "./Header.module.css"
import bannerImage from "../../assets/img/banner.jpg"
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onCartClick}/>
            </header>
            <div className={classes["main-image"]}>
                <img src={bannerImage} alt="Sushi on a table."/>
            </div>
        </React.Fragment>
    )
}

export default Header;