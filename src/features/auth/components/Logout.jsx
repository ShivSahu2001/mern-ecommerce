import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { logoutAsync, selectLoggedInUser } from "../authSlice"
import { Navigate } from "react-router-dom"



const Logout = () => {

    const dispatch = useDispatch()
    const user = useSelector(selectLoggedInUser)
    useEffect(() => {
        dispatch(logoutAsync(user.id))
    }, [dispatch, user])

    return (
        <div>
            {!user && <Navigate to="/login" replace={true}></Navigate>}            
        </div>
    )
}

export default Logout
