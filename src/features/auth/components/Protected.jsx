import { useSelector } from "react-redux"
import { selectLoggedInUser } from "../authSlice"
import { Navigate } from "react-router-dom"



// eslint-disable-next-line react/prop-types
const Protected = ({children}) => {
    const user = useSelector(selectLoggedInUser)

    if (!user) {
        return <Navigate to="/login" replace={true}> </Navigate>
    }

    return (children)
}

export default Protected
