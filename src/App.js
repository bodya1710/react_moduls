import React, { useState, useEffect } from 'react';

import Users from './components/Users/Users'
import Form from './components/Form/Form'
function App() {
  const [users, setUsers] = useState([]);
  const [filterUsers, setFilterUsers] = useState([]);

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(json =>{
                  setUsers(json)
                  setFilterUsers(json)
          }
                )},[]);

  const getFilter = (data) => {
    let filet = [...users]
      if (data.name){
          filet = filet.filter(user=> user.name.toLowerCase().includes(data.name.toLowerCase()))
      }
      if (data.username){
          filet = filet.filter(user=> user.username.toLowerCase().includes(data.username.toLowerCase()))
      }
      if (data.email){
          filet = filet.filter(user=> user.email.toLowerCase().includes(data.email.toLowerCase()))
      }
      setFilterUsers(filet)
  }
  return (
     <div>
        <Form getFilter={getFilter}/>
       <Users users={filterUsers}/>
    </div>
  );
}

export default App;
