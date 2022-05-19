import  {useEffect,useState} from "react";
import axios from "axios";

const useRequestData = (url) =>{
    const [data,setData] = useState();

    useEffect((url)=>{
    axios
    .post("https://supertrunfomarvel.herokuapp.com/supertrunfomarvel/start")
    .then((response)=>{
        
        setData(response.data);
    })
    .catch((error)=>{
        console.log("erro",error)
       // alert("ocorreu um erro")
    });
},[url]);

return data;

}

export default useRequestData

