/* validate password  */

export async function resetPasswordValidate(values) {
    const errors = passwordVerify({}, values);

    if (values.password !== values.confirmpassword) {
        <p>password not match</p>
    }

    return errors
}

// password verificaton
function passwordVerify(errors = {}, values)