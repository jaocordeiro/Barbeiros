import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinder,
} from './Home.Styled';
import SearchIcon from '../assets/search.svg';
import MyLocationIcon from '../assets/my_location.svg';

export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>
            Encontre seu barbeiro favorito
          </HeaderTitle>
          <SearchButton onPress={() => navigation.navigate('Search')}>
            <SearchIcon width="26" height="26" fill="#fff" />
          </SearchButton>
        </HeaderArea>

        <LocationArea>
          <LocationInput
            placeholder="Onde voce esta?"
            placeholderTextColor="#fff"
          />
          <LocationFinder>
            <MyLocationIcon width="26" height="26" fill="#fff" />
          </LocationFinder>
        </LocationArea>
      </Scroller>
    </Container>
  );
};
