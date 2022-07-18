import React from 'react';
import AgeevDmitryMinsk_photo from './../photo/AgeevDmitryMinsk.jpg'
import classes_css from './header.module.css'


export const Header = () => {

	return (
		< >
			<a href="https://github.com/AgeevDmitryMinsk" target={"_blank"}
			   //вынес css свойства в header.module.css
			   className={classes_css.header_style}>
				AgeevDmitryMinsk 2022
				<img src={AgeevDmitryMinsk_photo} alt="AgeevDmitryMinsk_photo" className={"h-12 rounded"}/>
				<div>Viber/Telegram: +375 29 6164088</div>
			</a>
		</>
	);
};

