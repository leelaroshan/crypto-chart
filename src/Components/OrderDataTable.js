import React, { useEffect, useState } from 'react';

import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import { FiExternalLink } from 'react-icons/fi';
import axios from 'axios'


const FirstColumnStyling = styled.div`
  .column1_styling {
    display: flex;
    // grid-template-columns: 1fr 1fr;
    justify_content: space-between;
    align-items: baseline;
  }

.text_div{
  margin-top: 20px;
  margin-left:20px;
}
  .chain_styling {
    background: var(--span-bg-color);
    border-radius: 50px;
    color: white;
    display: inline-block;
  
    max-width: 150px;
    padding: 5px 10px;
    margin-right: 5px;
  }
`;

const SecondColumnStyling = styled.div`
margin-top:20px;
color: white;
.state{
  color: var(--secondary-text);
}

`


const FourthColumnStyling = styled.section`
margin-top: 20px;
  color: white;
.bsc_link{
  color: var(--secondary-text);
}
`;




export default function OrderDataTable() {


  const [orderData, setOrderData] = useState( JSON.parse(localStorage.getItem("orders")) || []);
 

  useEffect(() => {
  
 

     axios
       .get('https://raw.githubusercontent.com/akshita151199/APIs/main/data')
       .then((res) => {
         if (res.data.data) {
           localStorage.setItem('orders', JSON.stringify(res.data.data));
              setOrderData(res.data.data);
         }
      
       })
       .catch((err) => {
         console.log(err);
       });

  }, []);


  console.log('order data', orderData);
  const columns = [
    {
      name: 'Asset',
      selector: (row) => row.asset,
      cell: (row) => (
        <FirstColumnStyling>
          <div className="column1_styling">
            <span className="icon_span">
              <img src={row.img}></img>
            </span>
            <div className="text_div" style={{ color: 'white' }}>
              {' '}
              {row.asset}
              <p>
                <span style={{ paddingRight:'5px'}}>{row.type}</span>
                <span className="chain_styling">
                  <img src={row.chain.img} />
                  {row.chain.name}
                </span>
              </p>
            </div>
          </div>
        </FirstColumnStyling>
      ),
    },

    {
      name: 'Amount',
      selector: (row) => row.amount,
      cell: (row) => (
        <SecondColumnStyling>
          <div>
            <p>{row.amount} BNB</p>
            <p className="state">{row.state}</p>
          </div>
        </SecondColumnStyling>
      ),
    },
    {
      name: 'User',
      selector: (row) => row.user,
      cell: (row) => (
        <div style={{ color: 'white' }}>
          <p>{row.user} </p>
        </div>
      ),
    },
    {
      name: 'Referral Earning',
      selector: (row) => row.referral_earnings,
      cell: (row) => (
        <FourthColumnStyling>
          <div>
            <p>{row.amount} BNB</p>
            <p className="bsc_link"> View on BSC scan <FiExternalLink />  </p>
          </div>
        </FourthColumnStyling>
      ),
    },

   
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: '90px', // override the row height
        border: '0px',
        backgroundColor: 'var(--span-bg-color)',
        borderBottomColor: '#000000 !important',
        borderColor: '#000000 !important',
      },
    },
    headCells: {
      style: {
        backgroundColor: 'var(--span-bg-color)', // override the cell padding for head cells
        color: 'var(--secondary-text)',
        fontSize: '15px',
        borderBottom: '0px',
        borderBottomColor: '#000000 !important',
      },
    },
    cells: {
      style: {
        // paddingLeft: '2px',
        // paddingRight: '2px',
        backgroundColor: '#000000',
        borderBottomColor: '#000000 !important',
      },
    },
  };


  return (
    <div>
      {/* {isLoading ? (
        'data is loading ....'
      ) : ( */}
        <div className="dt-responsive table-responsive">
          <DataTable
            columns={columns}
            data={orderData}
            customStyles={customStyles}
          />
        </div>
      {/* )} */}
    </div>
  );
}
