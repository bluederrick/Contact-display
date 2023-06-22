import React, { useRef, useState } from 'react';
import './UserName.css';
import profile from '../Components/Assets /profile_image.png'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import './Register.css'
// use formik and react-hot-tost to validate and display success messages
import * as yup from "yup"

const Register = () => {
    const [image, SetImage] = useState("")
    const inputRef = useRef(null)

    function handleImageClick() {
        inputRef.current.click()
    }
    function handleImageChanger(event) {
        const file = event.target.files[0]
        console.log(file);
        SetImage(event.target.files[0])

    }

    const formik = useFormik({
        initialValues: {
            input: "admin123"
        },
        validationSchema: yup.object({
            input: yup.string().max(15, "Must be 15 Characters or less ").required("  😔  ****required"),
        }),
        onSubmit: (values) => {
            console.log(values)
        }

    })
    return (

        <div class="Reset-Container">
            <div className='box'>
                <div className='title'>
                    <h2 className='Heading'>Register</h2>
                    <div className='sub-head'>Explore more by connecting with us </div>
                </div>
                <form action="form_Control" onSubmit={formik.handleSubmit}>
                    <div onClick={handleImageClick}>
                        <div className='userImg'>
                            {image ? <img src={URL.createObjectURL(image)} width="100px" /> : <img src={profile} alt="avatar" width="100px" />}
                        </div>
                        <input type="file" name="profile" id="profile" ref={inputRef} onChange={handleImageChanger} />
                    </div>
                    <div className='form-btn'>
                        <input type="text" placeholder='email' className='input' id='input' value={formik.values.input} onChange={formik.handleChange} />
                        <input type="text" placeholder='username' className='input' id='input' value={formik.values.input} onChange={formik.handleChange} />
                        <input type="text" placeholder='password' className='input' id='input' value={formik.values.input} onChange={formik.handleChange} />
                        {formik.errors.input ? <p>{formik.errors.input}</p> : null}
                        <button type="submit" className='submit_btn'>let's Go</button>
                    </div>
                    <div className='Link-Register'>
                        <p>Already Register <span><Link to="/" className='Link-Register-here'>Login now</Link></span> </p></div>

                </form>
            </div>
        </div>

    )



}

export default Register 