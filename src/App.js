import React from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Tooltip from '@mui/material/Tooltip';



 const App = ()=>{
  const [Number,  setNumber] = React.useState(0);

  const AddValue = ()=>{
    setNumber(Number + 1);
  }

  const DeleteValue = ()=>{
    if(Number > 0)
    setNumber(Number - 1);
    else{
      alert("Maximum low value reached");
      setNumber(0);
    }
  }
// const [nameValue, setValue] = React.useState({
//   lname:" ",
//   fname:" ",
//   email:" ",
//   contact:" ",
// });
 

// const click = (obj)=>{
//   console.log( obj.target.value);
//   console.log( obj.target.name);
//   const {value, name} = obj.target;
 
//     setValue((preValue)=>{
//     console.log(preValue);
//     return {
//       ...preValue,
//       [name] : value,
//     }
//   });
// };


// const submit = (obj)=>{
//   obj.preventDefault();
//   window.confirm("form Submitted");
// }
  return (
    <>
    <h1 class="text-center text-danger text-capitalize my-3">  Welcome To My Website !!!</h1>
  
        {/* <form onSubmit={submit}>
        <h1> Hello,{nameValue.fname} {nameValue.lname}</h1>
        <p>{nameValue.email}</p>
        <p>{nameValue.contact}</p>
        <input type="text" onChange={click} name="fname" placeholder='Enter First Name'  value={nameValue.fname}/>
        <input type="text" onChange={click} name="lname" placeholder='Enter lastName'  value={nameValue.lname}/>
        <input type="text" onChange={click} name="email" placeholder='Enter email' value={nameValue.email}/>
        <input type="text" onChange={click} name="contact" placeholder='Enter contact' value={nameValue.contact}/>
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
        Send
        </Button>
        </form> */}

<div class="container">
    <div class="row">
     <div class="col">

  <div class="card shadow-lg">
  <img src="https://picsum.photos/205/300" class="card-img-top" alt="logo" height="400" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
     </div>

  <div class="col">
  <div className="card shadow-lg">
  <img src="https://picsum.photos/203/300" class="card-img-top" alt="logo" height="400"  />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
  </div>

    <div class="col">
    <div class="card shadow-lg ">
  <img src="https://picsum.photos/201/300" class="card-img-top" alt="logo" height="400" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
  </div>

  </div>
  </div>

  <div className='container'>
      <div className='div-center'>
        <h1>{Number}</h1>
            <div className='ButtonStyle'>
         <Tooltip title="Add">
          <Button onClick={AddValue}  className='Add'><AddIcon  /></Button>
          </Tooltip>
          <Tooltip title="Delete">
            <Button onClick={DeleteValue}  className='Delete'><DeleteOutlineIcon /></Button>
            </Tooltip>
            </div>
      </div>
    </div>
 
    </>
  )
}
export default App;
