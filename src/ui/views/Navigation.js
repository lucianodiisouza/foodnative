import React, {useState, useContext} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {BottomNavigation} from 'react-native-paper';
import {faHamburger, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {CartContext} from '../../ui/providers/CartProvider';

import {ProductsView, CartView} from './index';

const routes = [
  {
    key: 'products',
    title: 'Produtos',
    component: ProductsView,
    icon: ({size, color}) => (
      <FontAwesomeIcon icon={faHamburger} size={size} color={color} />
    ),
  },
  {
    key: 'cart',
    title: 'Carrinho',
    component: CartView,
    icon: ({size, color}) => (
      <FontAwesomeIcon icon={faShoppingCart} size={size} color={color} />
    ),
  },
];

export default function Navigation() {
  const [{products}, _dispatchToIgnore] = useContext(CartContext);
  const [index, setIndex] = useState(0);

  function renderScene({route, jumpTo}) {
    if (route.key !== routes[index].key) {
      return null;
    }

    const Component = route.component;
    return <Component jumpTo={jumpTo} />;
  }

  return (
    <BottomNavigation
      navigationState={{routes, index}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      getBadge={({route}) => {
        if (route.key === 'cart' && products.length) {
          return products.length;
        }
        return false;
      }}
    />
  );
}
