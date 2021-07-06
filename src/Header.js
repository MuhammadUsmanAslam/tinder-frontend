import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import TinderLogo from "./img/tinder-logo.png";

function Header() {
	return (
		<div className="header">
			<IconButton>
				<PersonIcon />
			</IconButton>
			<img alt="Tinder" className="header__logo" src={TinderLogo} />
			<IconButton>
				<ForumIcon />
			</IconButton>
		</div>
	);
}

export default Header;
