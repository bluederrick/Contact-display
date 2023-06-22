import React from 'react'
import './Recovery.css';
// import profile from '../Components/Assets /profile_image.png'
// import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
// use formik and react-hot-tost to validate and display success messages
import * as yup from "yup"

const Recovery = () => {
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
                    <h2 className='Heading'>Recovery</h2>
                    <div className='sub-head'>Enter OTP recover Password </div>
                </div>
                <form action="form_Control" onSubmit={formik.handleSubmit}>
                    <div className='OTP'>Enter 6 Digit OTP sent to your Email Address </div>
                    <div className='form-btn'>
                        <input type="text" placeholder='OTP' className='input' id='input' value={formik.values.input} onChange={formik.handleChange} />
                        {/* {formik.errors.input ? <p>{formik.errors.input}</p> : null} */}
                        <button type="submit" className='submit_btn'>sign in</button>
                    </div>
                    <div className='Link-Register'>
                        <p>can't get OTP? <button className='Resend'>Resend</button></p>
                    </div>

                </form>
            </div>
        </div>

    )
}




export default Recovery