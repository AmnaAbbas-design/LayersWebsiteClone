// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Product from './components/Product'
// import Objtry from './components/Objtry'
// import StudentForm from './components/StudentForm'
// import Form from './components/Form'
// import Tryfuction from './components/Tryfuction'
// import Pp from './components/Pp'
// import { Link, Route, Routes } from 'react-router-dom'
// import Array from './components/array'
// import FormInput from './components/FormInput'
import Item from './components/Item'
import Cart from './components/Cart'
import { CartProvider } from './components/CartContextData'

function App() {
  //  let name
  // const [count, setCount] = useState(0)
  // let hell=20
  // let namec="amna"
  // let[ob,Setob]=useState(1)
  // let objectsc={
  //   name:"amna",
  //   class:"3rd semister",
  //   age:20,
  //   birthday:"25-july",

  // }
  // let objectc={
  //   name:"Laraib",
  //   class:"10 calss",
  //   age:5,
  //   birthday:"29 december",

  // }
  return (
    <>
  
   <h1>i am </h1>
    <Item name="choclate deram cake" price={1000}/>
      <Item name="ferror rocher" price={500}/>
        <Item name="red velvet" price={20}/>

        <Cart/>
        
    {/* <Link  to="/">Home</Link>
     <Link  to="/Array">Array</Link>
     <Link  to="/Pp">Pp wala</Link> */}
  
     

{/*     
<Tryfuction detail={objectsc}/>
<Tryfuction detail={objectc}/> */}
  {/* <Routes> 
     <Route path='/' element={<Pp/>}/>
     <Route path='/form' element={<FormInput/>}/> 
    {/* <Route path='/Pp' element={}/> */}
    {/* <Route path='/Array' element={<Array/>}/>
     <Route path='/Product' element={<Product/>}/>
  </Routes>  */} 

    {/* <Product/> */}
   {/* <StudentForm/> */}
   {/* <Form/> */}
    </>
  )
}

export default App
