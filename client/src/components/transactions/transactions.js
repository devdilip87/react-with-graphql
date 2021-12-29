import { useState, useEffect } from 'react'
import { transactionData } from '../../data/jsonData.js'
import useSortTable from '../../utills/sortTable'

const Transactions = (props) => {

   const temp = transactionData.transactions.filter((trns) => trns.accNo === props.acc.accNo);
   const defaultKey = 'id';
   const defaulOrder = 'asc';

   const [order] = useState(defaulOrder);
   const [list, setList] = useState([]);
   const [sortedList, sortByCoulmn] = useSortTable(list, defaultKey, defaulOrder);
   
   const sort = (keys) => {
      sortByCoulmn([...list], keys, order);
   }

   useEffect(() => {
      setList(sortedList);
      console.log('sortedlist: ', sortedList);
   },[sortedList]);

   useEffect(() => {
      setList(temp);
   }, [])

   return (
      <div data-testid='transaction-table' className=''>
         <table className='row table'>
            <thead>
               <tr>
                  <td onClick={()=>sort('id')}>Transaction Id</td>
                  <td onClick={()=>sort('accNo')}>Account Id</td>
                  <td onClick={()=>sort('accName')}>From Account</td>
                  <td onClick={()=>sort('date')}>Transaction Data</td>
                  <td onClick={()=>sort('amount')}>Amount</td>
               </tr>
            </thead>
            <tbody>
               {list && list.map((transaction) => (
                  <tr key={transaction.id}>
                     <td>{transaction.id}</td>
                     <td>{transaction.accNo}</td>
                     <td>{transaction.accName}</td>
                     <td>{transaction.date}</td>
                     <td>{transaction.amount}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   )
}

export default Transactions
