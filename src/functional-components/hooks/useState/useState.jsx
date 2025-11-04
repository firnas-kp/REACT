import React from 'react'

function NameForm(){
  const [name, setName] = useState('');
}

const useState = () => {
  return (
    <div>
      <input
      type="name"
      placeholder="Enter your name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default useState
