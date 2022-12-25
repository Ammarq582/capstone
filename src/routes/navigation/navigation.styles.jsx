import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const NavigationContainer = styled.div`
height: 90px;
width: 100%;
display: flex;
justify-content: space-between;
position: fixed;
top: 0;
left: 0;
padding: 0 40px;
z-index: 10;
background-color: #fff;
`

export const LogoContainer = styled(Link)`
height: 100%;
width: 70px;
padding: 25px;
`

export const NavLinksContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
`

export const StyledNavLink = styled(Link)`
padding: 10px 15px;
cursor: pointer;
`
