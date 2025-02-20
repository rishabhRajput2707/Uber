import React , {useContext , useEffect} from "react";
import {CaptainDataContext} from '../context/CaptainContext';
import { Navigate , useNavigate} from "react-router-dom";
import axios from "axios";

const CaptainProtectWrapper = ({children})=>{
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const {captain, setCaptain} = useContext(CaptainDataContext)
    const [isLoading, setisLoading] = useState(true)

    useEffect(()=>{
        if(!token){
            Navigate('/captain-login')
        }
    }, [token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
        headers:{
            'Authorization': `Bearer ${token}`
        }
    }).then(responce => {
        if(responce.status === 200){
            setCaptain(responce.data.captain)
            setisLoading(false)
        }
    }).catch(err=>{
        console.log(err)
        localStorage.removeItem('token')
        navigate('/captain-login')
    })
    if(isLoading){
        return(
            <div>Loading...</div>
        )
    }

    return <>
    {children}
    </> 
}

export default CaptainProtectWrapper;