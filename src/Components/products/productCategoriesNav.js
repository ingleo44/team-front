/* RoutingExample.jsx */
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import { NavigationDrawer } from 'react-md';

import NavItemLink from '../util/navItemLink'

import { drawerItems } from '../../Constants/drawerItems';
import ProductListContainer from './productListContainer';

const items = drawerItems();



class ProductCategoriesNav extends PureComponent {

  render() {
    const { products } = this.props;
    const category = this.props.match.params.category;
    return (
      <div>
        <div>
          <NavigationDrawer
            navItems={items.map(props => <NavItemLink {...props} key={props.to} />)}
            mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
            tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
            desktopDrawerType={NavigationDrawer.DrawerTypes.FULL_HEIGHT}
            contentId="main-demo-content"
            contentClassName="md-grid"
          >         
            <ProductListContainer products={products} category={category}/>
          </NavigationDrawer>
        </div>
      </div>
    );
  }
}
export default withRouter(ProductCategoriesNav);