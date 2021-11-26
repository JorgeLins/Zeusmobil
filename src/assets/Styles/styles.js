import styled from "styled-components/native";

export const Wrapper = styled.View`
display: flex;
flex-direction: column;
height: 310px;
background: #9CCC65 0% 0% no-repeat padding-box;
box-shadow: 0px 6px 12px #00000029;
border-radius: 10px;
opacity: 1;
margin-bottom: 20px;
`;

export const Box = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
background-color: #FFC107;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
width: 320px;
height: 40px;
border-radius: 5px;
padding: 5px 44px;
margin: 7px;
`

export const Container = styled.View`
display: flex;
flex-direction: column;
align-items: flex-start;
height: 252px;
overflow-y: auto;
overflow-x: hidden;
`;

export const Label = styled.Text`
display: inline-flex;
align-items: start;
margin-bottom: 4px;
margin-left:8px;
color: #004242;
font-size: 20px;
font-weight: 500;
text-decoration: none;
`

export const DeleteButtons = styled.Button`
background-color: #FFC107;
font-size: 16px;
 width: 30px;
    height: 30px;
/* margin: 24px;
margin-left: 350px; */
border: 2px solid #FFC107;
border-radius: 3px;
font-weight: bold;
text-align: center;
cursor: pointer;
`