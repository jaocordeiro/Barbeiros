import React, {useEffect} from 'react';
import {Container, LoadingIcon} from './Preload.Styled';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import BarberLogo from '../../assets/barber.svg';

export default () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        //Validar token
      } else {
        navigation.navigate('SingIn');
      }
    };
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <LoadingIcon size="large" color="ffffff" />
    </Container>
  );
};
