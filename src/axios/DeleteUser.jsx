import React from "react";
import axios from "axios";

function DeleteUser() {
  const deleteUser = async () => {
    try {
      const response = await axios.delete("https://jsonplaceholder.typicode.com/users/1");
      console.log("Deleted Successfully:", response.data);
      alert("User Deleted!");
    } catch (error) {
      console.error(error);
      alert("Delete Failed!");
    }
  };

  return (
    <div>
      <h2>Axios DELETE Example</h2>
      <button onClick={deleteUser}>Delete User</button>
    </div>
  );
}

export default DeleteUser;