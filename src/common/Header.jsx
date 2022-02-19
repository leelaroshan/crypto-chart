import React from 'react';
import styled from 'styled-components';

const HeaderStyling = styled.div`
  height: 30px;
  background-color: #3772ff;
  color: white;
  h5{
      text-align: center;
  }
`;

export default function Header() {
    return (
      <HeaderStyling>
        <div className="header-div">
          <h5>Crypto Chart</h5>
    
        </div>
      </HeaderStyling>
    );
}
