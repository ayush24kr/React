import ProfileCard from './components/ProfileCard';
import { useState } from 'react';
import StyleCard from './components/StyleCard';
// import './index.css'
import { FaCartPlus } from "react-icons/fa";

const App = () => {
  // const styles = { color : "white" , backgroundColor : "black" , padding : "2rem"}
  // const Button = () => {
  //   const handleClick = () => console.log(Math.round(Math.random()*30));
  //   return <button onClick={handleClick}>Click Me</button>
  // }
  // const Copy = () => {
  //   const copyhandler = () => console.log("stop stealing my content")
  //   return (
  //     <p onCopy={copyhandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus impedit sunt molestias cumque velit dolore quibusdam quasi saepe repellendus porro error consequatur repellat, placeat voluptates excepturi molestiae praesentium hic doloribus.</p>
  //   )
  // }
  // const Move =() => {
  //   function movehandler() {
  //     alert("Mouse move event fired")
  //     console.log("Mouse move event fired")
  //   }
  //   return (
  //     <p onMouseMove={movehandler}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis expedita accusantium perspiciatis beatae illo voluptatum ducimus optio, repellat eius excepturi dolor odit, doloremque sint error quia? Ipsum eligendi veritatis error?</p>
  //   )
  // }
  // const [count,setCount] = useState(0)
  // const clickinc = () => setCount(count+1)
  // const clickdec = () => setCount(count-1)

  // const [friends,setFriends] = useState(["Alex","John"])
  // const addfriend = () => setFriends([...friends,"Huxn","Ayush"])
  // const removefriend = () => setFriends(friends.filter(f => f != "John"))
  // const updateonefriend = () => {
  //   setFriends(friends.map((f) => (f == 'Alex' ? 'Alex Smith' : f)))
  // };

  const [movie, setMovie] = useState({
    title: "Max Level NewVibe",
    ratings: 10
  });

  const changeRating = () => {
    setMovie({ ...movie, ratings: 5 });
  };
  
  return (
    <div>
      {/* <h1 style={styles}> Inline Style</h1>
      <h1 style={{ color : "white" , backgroundColor : "crimson" , padding : "2rem" }}> Inline Style</h1> */}
      {/* <h1>Outline Styling</h1><br />
      <h2><FaCartPlus /></h2> */}
      {/* <StyleCard />
      <ProfileCard /> */}
      {/* <Button /> */}
      {/* <Copy /> */}
      {/* <Move /> */}
      {/* <h1>{count}</h1>
      <button onClick={clickinc}>Increase</button>-
      <button onClick={clickdec}>Decrease</button> */}

      {/* {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}
      <button onClick={addfriend}>Add New Friend</button>
      <button onClick={removefriend}>Remove Friend</button>
      <button onClick={updateonefriend}>Update Friend</button> */}

      <h1>{movie.title}</h1>
      <h1>{movie.ratings}</h1>
      <button onClick={changeRating}>Change Rating</button>
    </div>
  )
}

export default App
