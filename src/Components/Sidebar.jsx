import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { BiChart } from 'react-icons/bi';
import { HiCurrencyDollar } from 'react-icons/hi';
import { TiChartBar } from 'react-icons/ti';
import Switch from '@mui/material/Switch';

 



import styled from 'styled-components';


const SidebarStyling = styled.div`
position: sticky;
  margin-left : 0px;
    margin-top: 30px;
    border-right:"1px solid var(--secondary-text)";
    p{
      color: var(--primary-text);
     
      }
    }
    .name-dot{
          background-color: var(--highlight-color);

  padding: 5px 10px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
  color: white;
    }




ul {
    list-style: none;
    padding-left: 0px;
  }
  ul li {
    
    margin: 0px;
    padding: 5px 0;
    font-size: 1rem;
  }
   li a {
    text-decoration: none;
      
    color: var(--secondary-text);
  }
  .isCurrent {
    font-weight: bold;
  }
  
  .isCurrent a {
    color: var(--primary-text);
    background-color:var(--secondary-text);
    padding: 20px 20px;
  }
  }



div{
  margin: 20px;


  
  button{
    background-color: var(--secondary-text);
    border-radius: 10px;
    border: none;
    color: white;


  }
 
}

 .buy_btn{
    padding: 5px 10px;
    background-color: var(--button-bg-color);
    color: var(--button-text-color);
  }
  div{ 

 button{
    background-color: var(--secondary-text);
    border-radius: 10px;
    border: none;
    color: white;


  }

.toggle_btn{
  padding: 5px 20px;
    background-color: var(--secondary-text-color);
    color: var(--primary-text);

}
 }


`;

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Sidebar() {


  const [toggle, setToggle] = useState(false);
  

  const handleToggle = () => {
    setToggle(true);
 }



  return (
   
      <SidebarStyling>
        <div className="nav-menu">
          <p>
            <span className="name-dot">N</span> Name
          </p>
          <ul>
            <li>
              <Link to="#home">
                {' '}
                <i
                  class="fa fa-th-large"
                  aria-hidden="true"
                  style={{ paddingRight: '20px' }}
                ></i>
                Home
              </Link>
            </li>
            <li>
              <Link to="#section1">
                <i
                  class="fa fa-bar-chart"
                  aria-hidden="true"
                  style={{ paddingRight: '20px' }}
                ></i>
                Section 1
              </Link>
            </li>
            <li>
              <Link to="#section2">
                <TiChartBar style={{ marginRight: '20px' }} /> Section 2
              </Link>
            </li>
            <li>
              <Link to="#section3">
                {' '}
                <HiCurrencyDollar style={{ marginRight: '20px' }} /> Section 3
              </Link>
            </li>
            <li>
              <Link to="#section4">
                {' '}
                <BiChart style={{ marginRight: '20px' }} />
                Section 4
              </Link>
            </li>
            <li>
              <Link to="#section5">
                <i
                  class="fa fa-database"
                  aria-hidden="true"
                  style={{ paddingRight: '20px' }}
                ></i>
                Section 5
              </Link>
            </li>
            <li>
              <Link to="#section6">
                <i
                  class="fa fa-pie-chart"
                  aria-hidden="true"
                  style={{ paddingRight: '20px' }}
                ></i>
                Section 6
              </Link>
            </li>
            <li>
              <Link to="#section7">
                <i
                  class="fa fa-signal"
                  aria-hidden="true"
                  style={{ paddingRight: '20px' }}
                ></i>
                Section 7
              </Link>
            </li>
            <li>
              <Link to="#section8">
                <i
                  class="fa fa-share-alt"
                  aria-hidden="true"
                  style={{ paddingRight: '20px' }}
                ></i>
                Section 8
              </Link>
            </li>
            <li>
              <Link to="#documentation">
                <i
                  class="fa fa-stack-exchange"
                  aria-hidden="true"
                  style={{ paddingRight: '20px' }}
                ></i>
                Documentation
              </Link>
            </li>
          </ul>

          <div>
            <button>
              <span className="name-dot">N</span>$0.90
            </button>
            <button className="buy_btn">Buy $xyz</button>
          </div>
        </div>

        <div>
          <p>
            <span>
              <i class="fa fa-globe" aria-hidden="true"></i>
            </span>

            <Switch {...label} defaultChecked />
          </p>

          {/* <button onClick={handleToggle} type="button" className="toggle_btn">
            {toggle && <i class="fa fa-moon-o" aria-hidden="true"></i>}
            {!toggle && <i class="fa fa-sun-o" aria-hidden="true"></i>}
          </button> */}
        </div>
      </SidebarStyling>
    // </div>
  );
}
