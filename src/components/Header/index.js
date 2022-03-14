import React from "react";
import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';


import { Content, TMDBLogoImg, Wrapper, LogoImg } from './Header.style';
// import { useState } from "react";

const Header = () => ( 
    <Wrapper>
        <Content >
            <Link to='/'>
                <LogoImg src={RMDBLogo} alt = 'rmdb-log' />
            </Link>
            <TMDBLogoImg src={TMDBLogo} alt = 'tmdb-log' />
        </Content>  
    </Wrapper>
);

export default Header