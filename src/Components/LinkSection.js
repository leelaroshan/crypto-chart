import React from 'react';

import styled from 'styled-components';
import { BiWalletAlt } from 'react-icons/bi';


const LinkStyling = styled.div`
  margin: 20px;
  color: white;

  .avalanche {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      background-color: #353945;
      border-radius: 5px;
      padding: 0px 10px;
    }
    .ava {
      background-color: transparent;
      border: 1px solid blue;
      padding: 0px 10px;
    }
  }

  .custom_link {
    background-color: var(--highlight-color);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
  }

  button {
    background-color: var(--secondary-text);
    border-radius: 10px;
    padding: 5px 10px;
    background-color: var(--button-bg-color);
    color: var(--highlight-color);

    border: none;
  }

  .custom_cancel_links {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: 20px 0px;

    p {
      border: 1px solid var(--secondary-text);
      border-radius: 5px;
      padding: 5px 10px;
    }
  }

  .in_cl {
    background-color: #242731 !important;
    border-radius: 5px;
    border: none;
    width: 70%;
    height: 50px;
  }
  .in_cl::placeholder {
    padding-left: 20px;
  }
`;




export default function LinkSection() {

    return (
      <LinkStyling>
        <div>
          <div className="avalanche">
            <p>
              <span>
                <img src="https://raw.githubusercontent.com/akshita151199/APIs/main/avax.png" width="20px" height="20px" />
              </span>
              Avalanche
              <span>
                <i
                  class="fa fa-angle-down"
                  aria-hidden="true"
                  style={{ padding: '10px', color: 'white' }}
                ></i>
              </span>
            </p>
            <p className="ava">
              <BiWalletAlt style={{color:'blue'}}/> 0xfye..134
              <span>
                <i
                  class="fa fa-angle-down"
                  aria-hidden="true"
                  style={{ padding: '10px', color: 'white' }}
                ></i>
              </span>
            </p>
          </div>
          <div>
            <p>
              <span>
                <i
                  class="fa fa-long-arrow-left"
                  aria-hidden="true"
                  style={{ marginRight: '30px' }}
                ></i>
              </span>{' '}
              Custom Link
            </p>
            <p>https://testnet.xyz.xyz/trade?ref=</p>
            <input type="text" placeholder="Enter" className="in_cl" />

            <div className="custom_cancel_links">
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

              <p>
                <span>
                  <i class="fa fa-sign-in" aria-hidden="true"></i>
                </span>{' '}
                Cancel
              </p>
            </div>
          </div>
        </div>
      </LinkStyling>
    );
}
