import React from 'react'

const UserList = () => {
    const users = [
        {id:1,name:"alice",age:25},
        {id:2,name:"john",age:21},
        {id:3,name:"bob",age:18},
    ]
  return (
    <div>
        {users.map(({id,name,age}) => (
            <ul key={Math.random()}>
                <li>{id}</li>
                <li>{name}</li>
                <li>{age}</li>
            </ul>
        ))}
    </div>
  )
}

export default UserList