import toast from "react-hot-toast"

/** validate Username */
function usernameVerify(error = {}, values) {
    if (!values.username) {
        error.username = toast.error("usernamer required .......!")
    } else (values.username.includes(""))

} 