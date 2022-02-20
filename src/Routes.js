import React from 'react';
import Header from './common/Header';
import Sidebar from './Components/Sidebar';
import Section from './Components/Section';

import LinkSection from './Components/LinkSection';

import styled from 'styled-components';

const ContainerStyling = styled.div`
.container_div{ 
display:grid;
grid-template-columns: 0.7fr 2fr 1fr;
}


`;

export default function routes() {

  return (
    <div style={{ backgroundColor: 'var(--primary-bg-color)' }}>

      {/* ************************ Header****************** */}
      <Header />
    
      <ContainerStyling>
        <div className="container_div">

          {/* **************** SIDE NAVBAR ************************ */}
          <div style={{ borderRight: '1px solid gray' }}>
            <Sidebar />
          </div>


          {/* ********************** MAIN SECTION ************************** */}

          <div style={{ borderRight: '1px solid gray' }}>
            <section id="section8">
              <Section />
            </section>
          </div>


        {/* ********************** LINK SECTION ******************************* */}
          <div>
            <LinkSection />
          </div>
        </div>

      </ContainerStyling>
    </div>
  );
}
