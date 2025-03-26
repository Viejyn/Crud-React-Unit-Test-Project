import { useState } from "react";
import UserList from "./components/List/UserList.jsx";
import Form from "./components/Form/Form.jsx";

function App() {
  const [users, setUsers] = useState([
    {
      name: "Mehmet",
      email: "mehmet65@gmail.com",
      age: 59,
    },
    {
      name: "Ali",
      email: "alihtp@gmail.com",
      age: 34,
    },
  ]);

  const addUser = (user) => {
    setUsers(users.concat(user));
  };

  return (
    <div className="container">
      <Form addUser={addUser}/>
      <UserList users={users} />
    </div>
  );
};

export default App;
