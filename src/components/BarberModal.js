import React from 'react';
import styled from 'styled-components/native';
import ExpandIcon from '../assets/expand.svg';
import {useNavigation} from '@react-navigation/native';
import NavPrevIcon from '../assets/nav_prev.svg';
import NavNextIcon from '../assets/nav_next.svg';

const Modal = styled.Modal``;

const ModalArea = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
`;

const ModalBody = styled.View`
  background-color: #83d6e3;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  min-height: 300px;
  padding: 10px 20px 40px 20px;
`;

const CloseButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
`;

const ModalItem = styled.View`
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 10px;
`;

const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 20px;
  margin-right: 15px;
`;

const UserName = styled.Text`
  font-weight: bold;
  color: #000000;
  font-size: 18px;
`;

const ServiceInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ServiceName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

const ServicePrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

const FinishButton = styled.TouchableOpacity`
  background-color: #268596;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const FinishButtonText = styled.Text`
  color: #ffffff;
  font-size: 17px;
  font-weight: bold;
`;

const DateInfo = styled.View``;
const DatePrevArea = styled.TouchableOpacity``;
const DateTitleArea = styled.View``;
const DateTitle = styled.Text``;
const DateNextArea = styled.TouchableOpacity``;

const month = [
  'Janeiro',
  'Fevereiro',
  'Marco',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

export default ({show, setShow, user, service}) => {
  const navigation = useNavigation();

  const handleCloseButton = () => {
    setShow(false);
  };

  const handleFinishClick = () => {};

  return (
    <Modal transparent={true} visible={show} animationType="slide">
      <ModalArea>
        <ModalBody>
          <CloseButton onPress={handleCloseButton}>
            <ExpandIcon width="40" height="40" fill="#000000" />
          </CloseButton>
          <ModalItem>
            <UserInfo>
              <UserAvatar source={{uri: user.avatar}} />
              <UserName>{user.name}</UserName>
            </UserInfo>
          </ModalItem>
          {service != null && (
            <ModalItem>
              <ServiceInfo>
                <ServiceName>{user.services[service].name}</ServiceName>
                <ServicePrice>
                  R$ {user.services[service].price.toFixed(2)}
                </ServicePrice>
              </ServiceInfo>
            </ModalItem>
          )}
          <ModalItem>
            <DateInfo>
              <DatePrevArea>
                <NavPrevIcon width="35" height="35" fill="#000000" />
              </DatePrevArea>
              <DateTitleArea>
                <DateTitle>Outubro 2021</DateTitle>
              </DateTitleArea>
              <DateNextArea>
                <NavNextIcon width="35" height="35" fill="#000000" />
              </DateNextArea>
            </DateInfo>
          </ModalItem>
          <FinishButton onPress={handleFinishClick}>
            <FinishButtonText>Finalizar Agendamento</FinishButtonText>
          </FinishButton>
        </ModalBody>
      </ModalArea>
    </Modal>
  );
};
