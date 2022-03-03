import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width:800px){
    text-align: center;
    padding-bottom: 15px;
    border-bottom: 2px solid;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
  
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
