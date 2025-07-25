import axios from "axios";

const guardarDoctor = async(body) => {
    axios.post("http://localhost:8081/api/hospital/v1/doctor",body).then(res => res.data);
}


export const guardarDoctorFachada = async(body) => {
    await guardarDoctor(body);
}


const guardarpaciente = async(body) => {
    axios.post("http://localhost:8081/api/hospital/v1/paciente",body).then(res => res.data);
}


export const guardarpacienteFachada = async(body) => {
    await guardarpaciente(body);
}