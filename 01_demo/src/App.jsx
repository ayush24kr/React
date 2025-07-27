import React from 'react'
import Great from './components/Great'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import WelcomeMessage from './components/WelcomeMessage'
import ProductInfo from './components/ProductInfo'
import UserList from './components/UserLIst'
import Weather from './components/Weather'
import Userstatus from './components/Userstatus'

// dyanmic rendering
// const Cart = () => {
//   const items = ["ayush","isha","teena","mobileno","list"]

//   return (
//     <div>
//       <h1>Cart 🛒</h1>
//       {items.length > 0 && <h2>You have {items.length} items in your cart</h2>}
//       <ul>
//         <h4>Products</h4>
//         {items.map(item => (
//           <li key={Math.random()}>{item}</li>
//         ) )}
//       </ul>
//     </div>
//   )
// }

// dyanmic rendering
// const Validpass = () => <h1>Valid Password</h1>
// const Invalidpass = () => <h1>Invalid Password</h1>
// const Password = ({isvalid}) => {
  // if (isvalid) {
  //   return <Validpass />
  // } else {
  //     return <Invalidpass />
  // }
  // return isvalid ? <Validpass /> : <Invalidpass />
// }


const App = () => {
  // const numbers =[1,2,3,4,5]
  // const userinfo = [
  //   {
  //     username : "hun",
  //     email: "test@gmail.com",
  //     location: "uk"
  //   },
  //   {
  //     username : "hux",
  //     email: "test@yahoo.com",
  //     location: "usa"
  //   },
  //   {
  //     username : "hut",
  //     email: "test@hotmail.com",
  //     location: "duabi"
  //   },
  // ]
  return (
    <div>
      {/* List Mapping */}
      {/* {numbers.map(number => (
        <ul key={number}>
          <li>{number}</li>
        </ul> 
      ))} */}
      {/* { userinfo.map(({username,location,email}) => (
        <ul key={Math.random()}>
          <li>{username}</li>
          <li>{email}</li>
          <li>{location}</li>
        </ul>
      ))} */}
      {/* <UserList /> */}
      {/* <User img="" name="Ayush" age={22} ismarried={false} /> */}
      {/* <Password isvalid={false} /> */}
      {/* <Cart /> */}
      {/* <Weather /> */}
      <Userstatus loggedIn={true} isAdmin={false}  />
    </div>
  )
}

// Props
// const User = (props) => {
//   return (
//     <section>
//       <img src={props.img} alt={props.name} />
//       <h1>Name : {props.name}</h1>
//       <h1>age : {props.age}</h1>
//       <h1>is married : {props.ismarried}</h1>
//     </section>
//   )
// }
export default App