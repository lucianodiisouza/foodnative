import React, {useEffect, useContext} from 'react';
import styled from 'styled-components/native';
import {Appbar, Card, Button, Paragraph} from 'react-native-paper';
import {ScrollView} from 'react-native';
import {ApiService} from '../../../../data/services/ApiService';
import {ProductContext} from '../../../providers/ProductProvider';
import {
  productSelect,
  productsResponse,
} from '../../../../data/actions/ProductAction';
import {NumberService} from '../../../../data/services/NumberService';
import {ProductDetail} from '../..';

const ViewContainer = styled.SafeAreaView`
  flex: 1;
`;

const ProductCard = styled(Card)`
  margin: 8px;
`;

export default function ProductsView(props) {
  const [{productList, selectedProduct}, productDispatch] = useContext(
    ProductContext,
  );

  useEffect(() => {
    ApiService.get('products').then((productList) =>
      productDispatch(productsResponse(productList)),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function selectProduct(product) {
    productDispatch(productSelect(product));
  }

  if (selectedProduct) {
    return (
      <ViewContainer>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => selectedProduct(null)} />
          <Appbar.Content title={selectedProduct.name} />
        </Appbar.Header>
        <ProductDetail />
      </ViewContainer>
    );
  }

  return (
    <ViewContainer>
      <Appbar.Header>
        <Appbar.Content title="Produtos" />
      </Appbar.Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        {productList.map((product) => (
          <ProductCard key={product.id}>
            <Card.Cover
              source={{
                uri: product.picture,
              }}
            />
            <Card.Title
              title={product.name}
              right={(props) => (
                <Button
                  onPress={() => {
                    selectProduct(product);
                  }}>
                  Selecionar
                </Button>
              )}
            />
            <Card.Content>
              <Paragraph>{NumberService.currency(product.price)}</Paragraph>
            </Card.Content>
          </ProductCard>
        ))}
      </ScrollView>
    </ViewContainer>
  );
}
