import React, {useContext, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Appbar, List, IconButton, Button, Snackbar} from 'react-native-paper';
import styled from 'styled-components/native';
import {CartContext} from '../../../providers/CartProvider';
import {NumberService} from '../../../../data/services/NumberService';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {
  cartClear,
  cartRemoveProduct,
} from '../../../../data/actions/CartActions';
import {ApiService} from '../../../../data/services/ApiService';
import CartEmptyAnimation from '../../../components/CartEmptyAnimation';

const WithoutProduct = styled(View)`
  margin-top: 100px;
  align-items: center;
  justify-content: center;
`;

export default function CartView(props) {
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [{products}, cartDispatcher] = useContext(CartContext);

  function removeFromCart(item) {
    cartDispatcher(cartRemoveProduct(item));
  }

  function finishCart() {
    ApiService.post('pedidos', {pedido: products});
    cartDispatcher(cartClear());
    setIsMessageVisible(true);
  }

  function getTotal() {
    const value = products
      .map((item) => item.product.price)
      .reduce((previous, current) => previous + current, 0);

    return NumberService.currency(value);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Appbar.Header>
        <Appbar.Content title="Carrinho" />
      </Appbar.Header>
      <ScrollView>
        <List.Section>
          {products.length === 0 && (
            <WithoutProduct>
              <CartEmptyAnimation />
              <Text>Não há nada por aqui...</Text>
            </WithoutProduct>
          )}
          {products.map((item, index) => (
            <List.Item
              key={index}
              title={item.product.name}
              description={NumberService.currency(item.product.price)}
              right={() => (
                <IconButton
                  onPress={() => removeFromCart(item)}
                  icon={({size, color}) => (
                    <FontAwesomeIcon icon={faTimes} size={size} color={color} />
                  )}
                />
              )}
            />
          ))}
          {products.length !== 0 && (
            <Button mode="contained" onPress={finishCart}>
              Finalizar Compra {getTotal()}
            </Button>
          )}
        </List.Section>
      </ScrollView>
      <Snackbar
        visible={isMessageVisible}
        onDismiss={() => setIsMessageVisible(false)}
        duration={3000}>
        Seu pedido foi enviado!
      </Snackbar>
    </SafeAreaView>
  );
}
