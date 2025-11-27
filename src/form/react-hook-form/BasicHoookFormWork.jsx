// import React, { useState } from 'react'
// import "./rhf.css";
// import { useForm } from 'react-hook-form';
// // import { data } from 'react-router-dom';
// import {motion} from "framer-motion";


// const BasicHoookFormWork = () => {

//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         reset
//     } = useForm();

//     const [images, setImages] = useState([]);
//     const [success, setSuccess] = useState(false);

//     //handle image upload
//     const handleImageChange = (e) => {
//         const files = Array.from(e.target.files);
//         const imgArray = files.map((file) => ({
//             url: URL.createObjectURL(file),
//             file
//         }));
//         setImages([...images, ...imgArray]);
//     };

//     const removeImage = (index) => {
//         const updated = [...images];
//         updated.splice(index, 1);
//         setImages(updated);
//     };

//     const onSubmit = (data) => {
//         console.log("Form Data:", data);
//         console.log("Uploaded Images:", images);

//         setSuccess(true);

//         setTimeout(() => {
//             setSuccess(false);
//         }, 2000);

//         reset();
//         setImages([]);
//     };
//     return (
//         <div className='form-container'>
//             {success && (
//                 <motion.div
//                     className="success-popup"
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     exit={{ scale: 0 }}
//                 >
//                     <p>Form submitted successfully</p>
//                 </motion.div>
//             )}

//             <form onSubmit={handleSubmit(onSubmit)} className='form-box'>
//                 {/* Name */}
//                 <label>Name:</label>
//                 <input
//                     {...register("name", { required: "Name is required" })}
//                     placeholder='Enter Name'
//                 />
//                 {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}

//                 {/* email */}
//                 <label>Email:</label>
//                 <input
//                     {...register("email", {
//                         required: "Email is required",
//                         pattern: {
//                             value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                             message: "Invalid email"
//                         }
//                     })}
//                 />
//                 {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

//                 {/* multiple image upload */}
//                 <label>Upload Images:</label>
//                 <input
//                     type='file'
//                     multiple
//                     accept='image/*'
//                     onChange={handleImageChange}
//                 />

//                 {/* preview */}
//                 <div className='image-preview'>
//                     {images.map((img, index) => (
//                         <div key={index}
//                             className='image-box'>
//                             <img src={img.url} alt="preview" />
//                             <button type='button' onClick={() => removeImage(index)}>
//                                 Remove
//                             </button>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Buttons */}
//                 <div className='btn-group'>
//                     <button type='submit' className='submit-btn'>Submit</button>
//                     <button type='reset' className='reset-btn' onClick={() => reset()}>Reset</button>
//                 </div>

//             </form>

//         </div>
//     )
// }

// export default BasicHoookFormWork
import React, { useState } from "react";
import "./rhf.css";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const BasicHookForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const [images, setImages] = useState([]);
  const [success, setSuccess] = useState(false);

  // Handle image upload
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imgArray = files.map((file) => ({
      url: URL.createObjectURL(file),
      file
    }));
    setImages([...images, ...imgArray]);
  };

  const removeImage = (index) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    console.log("Uploaded Images:", images);

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 2200);

    reset();
    setImages([]);
  };

  return (
    <div className="form-container">
      {/* Success Popup */}
      {success && (
        <motion.div
          className="success-popup"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        >
          <p>✔ Form Submitted Successfully!</p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="form-box">

        {/* Name */}
        <label>Name:</label>
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Enter Name"
        />
        {errors.name && <p className="error">{errors.name.message}</p>}

        {/* Email */}
        <label>Email:</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email",
            },
          })}
          placeholder="Enter Email"
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        {/* Multiple Image Upload */}
        <label>Upload Images:</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
        />

        {/* Preview */}
        <div className="image-preview">
          {images.map((img, index) => (
            <div key={index} className="image-box">
              <img src={img.url} alt="preview" />
              <button type="button" onClick={() => removeImage(index)}>
                ✖
              </button>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="btn-group">
          <button type="submit" className="submit-btn">
            Submit
          </button>

          <button type="reset" className="reset-btn" onClick={() => reset()}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasicHookForm;