
import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import {getData,BaseUrl,postData,postDataAndImage} from './FetchServices'

export default function MaterialTableDemo() {
    const [credit,setCredit]=useState('')
    const [debit,setDebit]=useState('')
    const [amount,setAmount]=useState('')
    const [stateCol, setStateCol] = React.useState({
    columns: [
      { title: 'Amount', field: 'amount' },
      { title: 'Description', field: 'description' },
      { title: 'Date', field: 'date' },
      { title: 'Status', field: 'status' },
      
    ],
    
  });
  const [state, setState] = React.useState({
    data: []});
 const [getFile,setFile]=React.useState('') 
  
 const readAllRecords=async()=>{
   var list=await getData('crud/displayall') 
   setState({data:list.data})
   let t=list.credit-list.debit
   setCredit(list.credit)
   setDebit(list.debit)
   setAmount(t)
   }
useEffect(()=>{
 readAllRecords()

},[]) 

 const View=()=>{
 return(
<MaterialTable
     title="Data Table"
     columns={stateCol.columns}
     data={state.data}
    
   />
   
 )}

 return (
     <div> {View()}
     <h3>Credit Amount: {credit}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Debit Amount: {debit}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Total Amount: {amount}</h3>
      </div>
   
 );
}
