import React, {useState} from 'react';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinder,
  LoadingIcon,
} from './Home.Styled';
import SearchIcon from '../assets/search.svg';
import MyLocationIcon from '../assets/my_location.svg';

export default () => {
  const navigation = useNavigation();
  const [locationText, setLocationText] = useState('');
  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const getGeoLocaation = () => {
    setCoords(null);
    let result = request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    );
    if (result === 'granted') {
      setLoading(true);
      setLocationText('');
      setList([]);
    }
    const config = {
      enableHighAccuracy: true,
      timeout: 2000,
      maximumAge: 3600000,
    };

    Geolocation.getCurrentPosition(info => {
      setCoords(info.coords);
      getBarbers();
      console.log(info);
      config;
    });
  };

  const getBarbers = () => {};

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
            value={locationText}
            onChangeText={e => setLocationText(e)}
          />
          <LocationFinder onPress={getGeoLocaation}>
            <MyLocationIcon width="26" height="26" fill="#fff" />
          </LocationFinder>
        </LocationArea>
        {loading && <LoadingIcon width="26" height="26" fill="#fff" />}
      </Scroller>
    </Container>
  );
};