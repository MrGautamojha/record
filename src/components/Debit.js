import React from  'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper' 
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Avatar from '@material-ui/core/Avatar'
import {postDataAndImage} from './FetchServices'
import { postData } from './FetchServices'
 

const useStyles = makeStyles(theme => ({
    paper:{padding:'30px',marginTop:'10px'},
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1),
      },
      input: {
        display: 'none',
      },
      rightIcon: {
        marginLeft: theme.spacing(1),
      },
      bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
      },
      
  }));
export default function  Debit(props){
    const classes = useStyles();
   const [debitAmount,setDebitAmount]=React.useState('')
   const [categoryDescription,setCategoryDescription]=React.useState('')
   const[getDate,setDate]=React.useState(new Date())
   const [message,setMessage]=React.useState('')
  
   const addNewRecord=async()=>{
    let body={
     'amount':debitAmount,
     'description':categoryDescription,
     'date':new Date(),
     status:'debit'
   }
     const result=await postData('crud/savecredit',body)
     if(result){
   
       setDebitAmount('')
       setCategoryDescription('')
       alert('submitted')
     }
     
     else{
       alert('no')
     }
     }

return(<Container maxWidth="xs">
   <Paper className={classes.paper}>
      <Typography>
      Debit Amount
      </Typography>  
<Grid container>
 <Grid item xs={12}>
 <TextField
        id="outlined-dense"
        label="Debit amount"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={debitAmount}
        variant="outlined"
        onChange={(event)=>setDebitAmount(event.target.value)}
        fullWidth
      />
 </Grid>   
 <Grid item xs={12}>
 <TextField
        id="outlined-dense"
        label="Description"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={categoryDescription}
        variant="outlined"
        onChange={(event)=>setCategoryDescription(event.target.value)}
        fullWidth
      />
 </Grid>   

  
 
 <Grid item xs={12}>
 <Button variant="contained"  onClick={addNewRecord} color="primary" className={classes.button} fullWidth>
        Submit
      </Button>
 </Grid>    
</Grid>
</Paper>
<Typography>
{message}
</Typography>

</Container>)
}
