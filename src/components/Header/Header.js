import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';

class Header extends React.Component {
 
  render(){
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name={settings.headerIcon}/>
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>{settings.navLinksHeaders.home}</NavLink>
              <NavLink exact to='/info' activeClassName='active'>{settings.navLinksHeaders.info}</NavLink>
              <NavLink exact to='/FAQ' activeClassName='active'>{settings.navLinksHeaders.faq}</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
