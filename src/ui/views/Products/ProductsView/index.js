import React, {useEffect, useContext} from 'react';
import styled from 'styled-components/native';
import {Appbar, Card, Button, Paragraph} from 'react-native-paper';
import {ScrollView} from 'react-native';
import {ApiService} from '../../../../data/services/ApiService';
import {ProductContext} from '../../../providers/ProductProvider';
import {productsResponse} from '../../../../data/actions/ProductAction';
import {
  NumberService,
  NumeralService,
} from '../../../../data/services/NumberService';

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
  }, []);

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
              right={(props) => <Button onPress={() => {}}>Selecionar</Button>}
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
