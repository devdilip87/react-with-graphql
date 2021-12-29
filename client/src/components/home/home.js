import { useState, useEffect } from 'react'
import Accounts from '../accounts/accounts.js'
import Transactions from '../transactions/transactions'
import { accountsData } from '../../data/jsonData.js'
import {useQuery, gql} from '@apollo/client';
import {LOAD_ACCOUNTS} from '../../queries';

const Home = () => {
   const [accountList, setAccountList] = useState([])
   //const [accountList, setAccountList] = useState(accountsData.accounts)
   const [isTransactios, SetIsTransactios] = useState(false)
   const [selectedAcc, SetSelectedAcc] = useState({})

   const setSelectedAcc = (acc) => {
      showTransactios(acc)
   }
   const showTransactios = (account) => {
      SetSelectedAcc(account)
      SetIsTransactios(true)
   }

   const backToAccountList = () => {
      SetSelectedAcc({})
      SetIsTransactios(false)
   }

   const {error, loading, data} = useQuery(LOAD_ACCOUNTS);

   useEffect(() => {
      if(!loading){
         console.log(data.getAllAccounts);
         setAccountList(data.getAllAccounts);
      }
   },[error, loading, data]);

   return (
      <div className='container'>
         <header data-testid='Header-1' className='row header'>
            <h2>Simple Banking App</h2>
         </header>
         <div data-testid='breadcrumb-1' className='row bredcrumb'>
            {!isTransactios ? (
               <h3 data-testid='account-heading'>Account List</h3>
            ) : (
               <h3 data-testid='Transaction-heading'>
                  <span className='bredcrumb_link' onClick={backToAccountList}>
                     {selectedAcc.accName}
                  </span>{' '}
                  - Transactions List
               </h3>
            )}
         </div>
         {!isTransactios && !loading && accountList && accountList.length ? (
            <Accounts
               data-testid='accounts-list'
               accounts={accountList}
               setSelectedAcc={setSelectedAcc}
            ></Accounts>
         ) : (
            <Transactions data-testid='transaction-list' acc={selectedAcc}></Transactions>
         )}
      </div>
   )
}

export default Home
