
import axios from "axios";
export const runSimulation=(data)=>{
return axios.post("http://127.0.0.1:8000/api/simulate/",data);
}
