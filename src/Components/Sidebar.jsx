import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { BiChart } from 'react-icons/bi';
import { BsGrid } from 'react-icons/bs';
import {BsBarChartFill} from 'react-icons/bs'
import { HiOutlineChartSquareBar } from 'react-icons/hi';
import { VscPieChart } from 'react-icons/vsc';
import { HiOutlineDatabase } from 'react-icons/hi';
import { MdOutlineTableRows } from 'react-icons/md';
import { FaShareAlt } from 'react-icons/fa';
import { BsFileText } from 'react-icons/bs';
import { HiCurrencyDollar } from 'react-icons/hi';
import { TiChartBar } from 'react-icons/ti';
import Switch from '@mui/material/Switch';
import { BsGlobe } from 'react-icons/bs';

 



import styled from 'styled-components';


const SidebarStyling = styled.div`
position: sticky;
  margin-left : 10px;
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
.section8{
  margin: 4px 0px;
  background-color:#353945;
  color: white !important;
  padding: 10px;
  border-radius: 5px;

}


.buttons_div{
 
margin-top: 100%;
margin-left:0px;

}

.n_btn{
  margin-left: 0px;
    background-color: var(--secondary-text);
    border-radius: 10px;
    border: none;
    color: white;


  }
 .buy_btn{
   margin-left: 10%;
    padding: 5px 10px;
    background-color: var(--button-bg-color);
    color: var(--button-text-color);
  }



  div{ 
  
  margin: 20px;
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


 .toggle_switch{
   
    grid-column-gap: 10px;
    background: transparent;
    background: #4f4f4f;
    background: var(--secondary-text);
    border: transparent;
    border-radius: 50px;

    column-gap: 10px;
    cursor: pointer;

    display: grid;
    grid-template-columns: 1fr 1fr ;
    padding: 0.235rem;
    place-items: center;
    position: relative;
    transition: all .3s linear;

    
 }

 .toggle_div{
   display:flex;
   justify-content: flex-start;
   align-items : baseline;

 }
.dot{
  background: var(--highlight-color);
  width: 20px;
  height: 20px;
  border-radius: 50%;
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
          <span style={{ marginLeft: '60px' }}>
            <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
          </span>
        </p>
        <ul>
          <li>
            <Link to="#home">
              {' '}
              <BsGrid style={{ marginRight: '10px' }} />
              Home
            </Link>
          </li>
          <li>
            <Link to="#section1">
              <HiOutlineChartSquareBar style={{ marginRight: '10px' }} />{' '}
              Section 1
            </Link>
          </li>
          <li>
            <Link to="#section2">
              {' '}
              {/* <TiChartBar style={{ marginRight: '10px' }} /> */}
              <span class="material-icons-outlined"></span>
              Section 2
            </Link>
          </li>
          <li>
            <Link to="#section3">
              {' '}
              <BiChart style={{ marginRight: '10px' }} />
              Section 3
            </Link>
          </li>
          <li>
            <Link to="#section4">
              {' '}
              <HiCurrencyDollar style={{ marginRight: '10px' }} /> Section 4
            </Link>
          </li>
          <li>
            <Link to="#section5">
              <HiOutlineDatabase style={{ marginRight: '10px' }} />
              Section 5
            </Link>
          </li>
          <li>
            <Link to="#section6">
              <VscPieChart style={{ marginRight: '10px' }} />
              Section 6
            </Link>
          </li>
          <li>
            <Link to="#section7">
              <BsBarChartFill style={{ marginRight: '10px' }} />
              Section 7
            </Link>
          </li>
          <li className="section8">
            <Link to="#section8" style={{ color: 'white' }}>
              <FaShareAlt style={{ color: 'white', marginRight: '10px' }} />
              Section 8
            </Link>
          </li>
          <li>
            <Link to="#documentation">
              <BsFileText style={{ marginRight: '10px' }} />
              Documentation
            </Link>
          </li>
        </ul>

        <div className="buttons_div">
          <button className="n_btn">
            <span className="name-dot">N</span>$0.90
          </button>
          <button className="buy_btn">Buy $XYZ</button>
        </div>
      </div>

      <div className='toggle_div'>
        <p style={{marginRight: '30px'}}>
          <span>
            <BsGlobe size={30 }style={{ color: 'var(--secondary-text)' }} />
          </span>
        </p>

        <button className="toggle_switch">
          <span>
            <i class="fas fa-moon"></i>
          </span>
          <span className="dot"></span>
          {/* <span>
              <i class="fas fa-sun"></i>
            </span> */}
        </button>
      </div>
    </SidebarStyling>
    // </div>
  );
}
