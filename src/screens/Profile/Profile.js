import React from 'react';
import {Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container} from './Profile.Styled';
import Api from '../../Api';

export default () => {
  const navigation = useNavigation();

  const handleLogouClick = async () => {
    await Api.logout();
    navigation.reset({
      routes: [{name: 'SingIn'}],
    });
  };
  return (
    <Container>
      <Text>Profile</Text>
      <Button title="Sair" onPress={handleLogouClick} />
    </Container>
  );
};
