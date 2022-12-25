import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import {Outlet} from 'react-router-dom';

import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import { signOutUser } from '../../utils/firebase.utils';

import './navigation.styles.jsx';
import { LogoContainer, NavigationContainer, NavLinksContainer, StyledNavLink } from './navigation.styles.jsx';

const Navigation = () => {
    
    const currentUser = useSelector(selectCurrentUser);

    const isCartOpen = useSelector(selectIsCartOpen)
    
    return (
      <Fragment>
        <NavigationContainer>
          <LogoContainer to='/'>
            <CrownLogo className='logo' />
          </LogoContainer>
          <NavLinksContainer>
            <StyledNavLink to='/shop' >
                SHOP
            </StyledNavLink>
            {
              currentUser ? (
                <StyledNavLink to='/' onClick={signOutUser}>
                SIGN OUT
                </StyledNavLink>
              )
              :
              (
                <StyledNavLink to='/auth' >
                SIGN IN
                </StyledNavLink>
              )
            }
            
            <CartIcon/>  
          </NavLinksContainer>
          
          {
            isCartOpen && <CartDropdown/>
          }
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
}

export default Navigation;