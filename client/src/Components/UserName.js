import React from 'react'
import './UserName.css'
import profile from '../Components/Assets /profile_image.png'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
// use formik and react-hot-tost to validate and display success messages
import * as yup from "yup"

const UserName = () => {
    
    const formik = useFormik({
        initialValues: {
            input: ""
        },
        validationSchema: yup.object({
            input: yup.string().max(15, "Must be 15 Characters or less ").required("  😔  ****required"),
        }),
        onSubmit: (values) => {
            console.log(values)
        }

    })
    return (

        <div class="Container">
            <div className='box'>
                <div className='title'>
                    <h2 className='Heading'>Hello Again!</h2>
                    <div className='sub-head'>Explore more by connecting with us </div>
                </div>
                <form action="form_Control" onSubmit={formik.handleSubmit}>
                    <div className='userImg'>
                        <img src={profile} alt="avatar" width="100px" />
                    </div>
                    <div className='form-btn'>
                        <input type="text" placeholder='UserName' className='input' id='input' value={formik.values.input} onChange={formik.handleChange} />
                        {formik.errors.input ? <p>{formik.errors.input}</p> : null}
                        <button type="submit" className='submit_btn'>let's Go</button>
                    </div>
                    <div className='Link-Register'>
                        <p>Not a member <span><Link to="/Register" className='Link-Register-here'> Register</Link></span> </p></div>

                </form>
            </div>
        </div>

    )
}

export default UserName