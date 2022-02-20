import React,{useState} from 'react';

import styled from 'styled-components';
import OrderDataTable from './OrderDataTable';
import { BiWalletAlt } from 'react-icons/bi';

const SectionStyling = styled.div`
  margin: 30px 30px;

  color: white;

  .heading_div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .heading_right_div {
    background-color: #353945;
    border-radius: 5px;
    // padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0px;
    p {
      margin-bottom: 0rem;
    }
  }

  .divider {
    border-bottom: 1px solid var(--highlight-color);
    width: 50px;
    margin-left: 10px;
  }

  .popup {
    position: relative;
    background-color: var(--light-color);
    border-radius: 10px;
    margin: 50px 0px;
    padding: 10px;
    color: var(--dark-color);

    .tutorial_btn {
      background-color: var(--primary-text);
      color: var(--dark-color);
      border-radius: 5px;
      padding: 0px 10px;
    }
  }

  .cross_btn {
    position: absolute;
    float: right;
    top: -0px;
    right: -0px;

    transform: translate(40%, -50%);
    background-color: var(--primary-text);
    position: absolute;
    padding: 5px 10px;
    border-radius: 50%;
    display: inline-block;
    // margin-right: 10px;
  }

  .box_model {
    background-color: var(--secondary-bg-color);
    color: white;
    border-radius: 10px;
    padding: 10px 20px;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    p {
      span {
        background: var(--span-bg-color);
        border-radius: 50px;
        color: white;
        display: inline-block;
        // font-family: Raleway, sans-serif;
        max-width: 150px;
        padding: 5px 10px;
        margin-right: 5px;
        font-size: 10px;
      }
    }
  }

  .custom_link {
    background-color: var(--highlight-color);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
  }

  .widgets_div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0px;

    div {
      background-color: var(--secondary-bg-color);
      color: var(--primary-text-color);
      padding: 10px 20px;
      border-radius: 10px;
    }
    .link_text {
      color: var(--secondary-text);
    }

    .copy_link_div {
      background: var(--span-bg-color);
      color: var(--primary-text-color);
      padding: 5px 10px;
      border-radius: 10px;
      p{
        margin-bottom: 0rem;
        margin: 10px;
      }
    }
  }

  .tab_span {
    color: var(--secondary-text);
    padding: 20px;
  }
  .active_tab {
    color: var(--primary-text);
    border-bottom: 1px solid var(--highlight-color);
    padding-bottom: 10px;
  }

  button {
    background-color: var(--secondary-text);
    border-radius: 10px;
    padding: 5px 10px;
    background-color: var(--button-bg-color);
    color: var(--highlight-color);

    border: none;
  }
`;

export default function Section() {


  const [tab, setTab] = useState(1);

  const tabChange = (id) => {
    setTab(id);
  }


    return (
      <SectionStyling>
        <div>
          <div className="heading_div">
            <div>
              <h5>Section</h5>
              <div className="divider"></div>
            </div>
            <div className="heading_right_div">
              <p>
                <BiWalletAlt style={{ color: 'blue', margin: '10px' }} />
                0.2$XYZ
                <button style={{ margin: '10px' }}>Tier 1</button>
              </p>
            </div>
          </div>

          <div className="popup">
            <p>
              Lorem ipsum dolor sit amet consectetur adipi vitae modi totam
              repudiandae.{' '}
            </p>
            <button className="tutorial_btn">Tutorials</button>

            <p className="cross_btn">
              <span>
                <i class="fa fa-times" aria-hidden="true"></i>
              </span>
            </p>
          </div>

          {/* **************************** Rewards Section ***************************** */}

          <div className="box_model">
            <h5>Your Rewards</h5>
            <div>
              <h4>$ 0.26231428</h4>
              <button className="custom_link">
                <span>
                  <i
                    class="fa fa-external-link"
                    aria-hidden="true"
                    style={{ marginRight: '10px' }}
                  ></i>
                </span>
                Custom link
              </button>
            </div>
            <p>
              <span>$40 AVAX</span>
              <span>$10 BNB</span>
              <span>$210 BTC</span>
            </p>
          </div>

          {/* ************************** OFFER Section *********************** */}

          <div className="widgets_div">
            <div className="left_widget">
              <h5>
              
                12.5% of fee
              </h5>
              <p className="link_text">Your Referral Link for xyz</p>
              <div className="copy_link_div">
                <p>
                  https://unityexchange.design{' '}
                  <span>
                    <i
                      class="fa fa-clone"
                      aria-hidden="true"
                      style={{ margin: '0px 10px' }}
                    ></i>
                  </span>
                </p>
              </div>
            </div>
            <div className="right_widget">
              <h5>12.5% of fee</h5>
              <p className="link_text">Your Referral Link for xyz</p>
              <div className="copy_link_div">
                <p>
                  https://unityexchange.design{' '}
                  <span>
                    <i
                      class="fa fa-clone"
                      aria-hidden="true"
                      style={{ margin: '0px 10px' }}
                    ></i>
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* ***********************  Tab section ******************************************** */}

          <div>
            <p>
              <span
                className={tab === 1 ? 'active_tab' : 'tab_span'}
                onClick={() => tabChange(1)}
              >
                First Tab
              </span>
              <span
                className={tab === 2 ? 'active_tab' : 'tab_span'}
                onClick={() => tabChange(2)}
              >
                Second Tab
              </span>
            </p>
            <div>{tab === 1 ? <OrderDataTable /> : ' '}</div>
            
          </div>
        </div>
      </SectionStyling>
    );
}
