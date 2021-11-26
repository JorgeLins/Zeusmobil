import React from 'react';
import styled from 'styled-components/native';
import { FaBolt } from "react-icons/fa";


const Container = styled.View`
 display: flex;
flex-direction: column;
grid-area: header;
padding: 12px;
background-color: #FFC107;
width: 100%;
height: 60px;
box-shadow: 0px 6px 12px #00000029;
opacity: 1;
`;
const Title = styled.Text`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.25px;
  color: #004242;
`;


const Header = ({ headerTitle }) => {
  return (
    <Container>
      <Title><FaBolt/>{headerTitle}</Title>
    </Container>
  );
};
export default Header;