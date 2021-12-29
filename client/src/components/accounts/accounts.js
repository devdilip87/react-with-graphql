import { useState, useEffect } from 'react'
//import useSortTable from '../../utills/sortTable'

const Accounts = ({ accounts, setSelectedAcc }) => {
   //const defaultKey = 'accNo';
   //const defaulOrder = 'asc';

   //const [order] = useState(defaulOrder);
   const [accList, setAccList] = useState(accounts);

   //const [sortedList, sortByCoulmn] = useSortTable(accounts, defaultKey, defaulOrder);
   debugger;
   const sort = (keys) => {
      //sortByCoulmn([...accounts], keys, order);
   }

   // useEffect(() => {
   //    setAccList(sortedList);
   //    console.log('sortedlist: ', sortedList);
   // },[sortedList]);

   const showTransactios = (account) => {
      setSelectedAcc(account)
   }

   return (
      <div data-testid='accounts-table' className=''>
         <table className='row table'>
            <thead>
               <tr>
                  <td onClick={()=>sort('accNo')}>Account Number</td>
                  <td onClick={()=>sort('accName')}>Account Name</td>
                  <td onClick={()=>sort('accType')}>Type</td>
                  <td onClick={()=>sort('balance')}>Balance</td>
                  <td onClick={()=>sort('currency')}>Currency</td>
               </tr>
            </thead>
            <tbody>
               {accList && accList.map((acc) => (
                  <tr key={acc.id} onClick={() => showTransactios(acc)}>
                     <td>{acc.accNo}</td>
                     <td>{acc.accName}</td>
                     <td>{acc.accType}</td>
                     <td>{acc.balance}</td>
                     <td>{acc.currency}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   )
}

export default Accounts
