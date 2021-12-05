import React from 'react';

import Qlogo from '../../img';

import { Wrapper, Content, Logo } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <Logo src={Qlogo} alt='q_logo'>
            </Logo>
        </Content>
    </Wrapper>
);

export default Header;