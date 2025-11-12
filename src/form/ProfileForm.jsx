import React, { useState } from "react";
import "./ProfileForm.css";

export default function ProfileForm() {
  const [form, setForm] = useState({
    name: "",
    gender: "",
    dob: "",
    email: "",
    mobile: "",
    customerId: "",
    membership: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.gender) newErrors.gender = "Choose gender";

    if (!form.dob) newErrors.dob = "DOB required";

    if (!form.email) newErrors.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email";

    if (!form.mobile) newErrors.mobile = "Mobile number required";
    else if (!/^[0-9]{10}$/.test(form.mobile))
      newErrors.mobile = "Enter 10 digit number";

    if (!form.customerId) newErrors.customerId = "Enter Customer ID";

    if (!form.membership) newErrors.membership = "Select membership";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) alert("Form submitted successfully ✅");
  };

  return (
    <div className="container">
      <div className="left-section">
        <div className="avatar"></div>
        <h2>MelcoW</h2>
        <p>It's just for a form😝</p>
      </div>

      <form className="right-section" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label><input type="radio" name="gender" value="Male"
              onChange={(e) => setForm({ ...form, gender: e.target.value })}
            /> Male</label>
            <label><input type="radio" name="gender" value="Female"
              onChange={(e) => setForm({ ...form, gender: e.target.value })}
            /> Female</label>
          </div>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date"
            onChange={(e) => setForm({ ...form, dob: e.target.value })}
          />
          {errors.dob && <span className="error">{errors.dob}</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Mobile</label>
          <input type="text"
            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
          />
          {errors.mobile && <span className="error">{errors.mobile}</span>}
        </div>

        <div className="form-group">
          <label>Customer ID</label>
          <input type="text"
            onChange={(e) => setForm({ ...form, customerId: e.target.value })}
          />
          {errors.customerId && <span className="error">{errors.customerId}</span>}
        </div>

        <div className="form-group">
          <label>Membership</label>
          <div className="membership">
            <label><input type="radio" name="membership" value="Classic"
              onChange={(e) => setForm({ ...form, membership: e.target.value })}
            /> Classic</label>

            <label><input type="radio" name="membership" value="Silver"
              onChange={(e) => setForm({ ...form, membership: e.target.value })}
            /> Silver</label>

            <label><input type="radio" name="membership" value="Gold"
              onChange={(e) => setForm({ ...form, membership: e.target.value })}
            /> Gold</label>
          </div>
          {errors.membership && <span className="error">{errors.membership}</span>}
        </div>

        <div className="buttons">
          <button type="button" className="cancel">Cancel</button>
          <button type="submit" className="save">Save</button>
        </div>
      </form>
    </div>
  );
}