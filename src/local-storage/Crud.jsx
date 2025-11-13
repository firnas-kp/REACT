import React, { useEffect, useState } from 'react'
import './crud.css'

const Crud = () => {
    const [formData, setFormdata] = useState({
        id: '',
        name: '',
        email: '',
        age: ''
    })

    const [users, setUsers] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [error, setErrors] = useState({});
    const [isloading, setIsLoading] = useState(false);

    //Load users from local storage
    useEffect(() => {
        const stored = localStorage.getItem("users");
        if (stored) {
            try {
                const parseduser = JSON.parse(stored);
                setUsers(parseduser);
            } catch (error) {
                console.error("Error parsing data", error);
                localStorage.removeItem("users");//clear currepted data
            }
        }
        setIsLoading(true);
    }, [])

    //save users to local storage
    useEffect(() => {
        if (isloading) {
            localStorage.setItem("users", JSON.stringify(users))
        }
    }, [users, isloading])

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormdata(prev => ({
            ...prev,
            [name]: value
        }))
    }
    // validation
    const validate = () => {
        const newErrors = {};
        const { name, email, age } = formData;

        if (!name.trim()) newErrors.name = 'name is required';

        if (!email) newErrors.email = 'email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Email is Valid";

        if (!age) newErrors.age = "Age is required";
        else if (isNaN(age) || age < 1 || age > 120) newErrors.age = "Age must be between 1 and 120";

        return newErrors;

    }
    // form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        if (editMode) {
            setUsers(users.map(user => user.id === formData.id ? formData : user));
            setEditMode(false)
        } else {
            const newUser = { ...formData, id: Date.now().toString() };
            setUsers([...users, newUser])
        }

        setFormdata({
            id: '',
            name: '',
            email: '',
            age: ''

        });

        setErrors({});
    }
    const handleEdit = (user) => {
        setFormdata(user);
        setEditMode(true);
    }

    const handleCancel = () => {
        setFormdata({ id: '', name: '', email: '', age: '' });
        setEditMode(false);
        setErrors({})
    }

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
    }

    const handleClearAll = () => {
        if(window.confirm('Are you sure you want to clear all data? this action cannot be undone')){
            setUsers([]);
            localStorage.removeItem("users");
            //also clear the form if in edit mode
            if(editMode){
                setFormdata({id:'', name:'', age:'', email:''});
                setEditMode(false);
                setErrors({});
            } 
        }
    }


    return (
        <div className='formnew'>
            <h1>React CRUD - Simple Form</h1>
            <form onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                    <input type="text" name='name' onChange={handleChange} value={formData.name} placeholder='Your name' />
                    {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
                </div>
                {/* email */}
                <div>
                    <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Your Email' />
                    {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
                </div>
                {/* Age */}
                <div>
                    <input type="number" name='age' onChange={handleChange} value={formData.age} placeholder='Your age' />
                    {error.age && <p style={{ color: 'red' }}>{error.age}</p>}

                </div>
                <button type='submit'>{editMode ? 'Update user' : 'Add User'}</button>

                {
                    editMode && (
                        <button type='button' onClick={handleCancel} style={{ marginLeft: '10px' }}>Cancel</button>
                    )
                }
            </form>

            <hr />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h2>User List</h2>
                {/* clear data button */}
                {users.length > 0 && (
                    <button onClick={handleClearAll}
                        style={{
                            background: '#dc345',
                            color: 'white',
                            border: 'none',
                            padding: '8px 12px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            marginLeft: '30px'

                        }}>Clear all data</button>
                )}
            </div>

            {users.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(us => (
                            <tr key={us.id}>
                                <td>{us.name}</td>
                                <td>{us.email}</td>
                                <td>{us.age}</td>
                                <td>
                                    <button onClick={() => handleEdit(us)}>Edit</button>
                                    <button onClick={() => handleDelete(us.id)} style={{ marginLeft: '10px' }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No users added yet.</p>
            )}
        </div>
    )
}

export default Crud