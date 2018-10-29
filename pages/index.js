import React from 'react';
import styled from 'styled-components';

export default class Home extends React.Component {
  render() {
    return (
      <HomeContainer>
        <h2>Welcome to the Next JS starter project!</h2>
        <h3>
          Click <a href="https://github.com/OMGDuke/nextjs-starter">here</a> for
          more info
        </h3>
        <h3>
          <a href="https://github.com/OMGDuke">@OMGDuke</a>
        </h3>
      </HomeContainer>
    );
  }
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin-bottom: 60px;
  h2 {
    font-size: 4rem;
  }
  h3 {
    font-size: 3rem;
  }
`;
