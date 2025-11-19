import React, { useState } from "react";
import axios from "axios";

function UpdateUser() {
  const [name, setName] = useState("");

  const updateUser = async () => {
    try {
      const response = await axios.put("https://jsonplaceholder.typicode.com/users/1", {
        name: name,
      });
      console.log("Updated Successfully:", response.data);
      alert("User Updated!");
    } catch (error) {
      console.error(error);
      alert("Update Failed!");
    }
  };

  return (
    <div>
      <h2>Axios PUT Example</h2>
      <input
        type="text"
        placeholder="Enter new name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={updateUser}>Update User</button>
    </div>
  );
}

export default UpdateUser;