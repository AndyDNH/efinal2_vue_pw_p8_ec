<template>
  <div class="container-doc" >
    <div class="container-formulario">

      <label for="cedula">Cedula</label>
      <input id="cedula" v-model="ncedula" type="text" />

      <label for="nombre">Nombre</label>
      <input id="nombre" v-model="nnombre" type="text" />

      <label for="apellido">Apellido</label>
      <input id="apellido" v-model="napellido" type="text" />

      <label for="genero">Genero</label>
      <input id="genero" v-model="ngenero" type="text" />
    </div>

  </div>
  <button @click="guardarDoctor" >Guardar</button>
</template>

<script>
import { guardarDoctorFachada } from "@/clients/HospitalClient";
export default {

    data(){
        return {
            doctorLocal:{
                cedula:'',
                nombre:'',
                apellido:'',
                genero:''
            },
            ncedula : '',
            nnombre: '',
            napellido: '',
            ngenero: '',
        }
    },
    methods:{
        
        async guardarDoctor(){
            console.log('ejecutando');

            this.doctorLocal.cedula = this.ncedula;
            this.doctorLocal.nombre = this.nnombre;
            this.doctorLocal.apellido = this.napellido;
            this.doctorLocal.genero = this.ngenero;
            console.log(this.doctorLocal);
            await guardarDoctorFachada(this.doctorLocal)
        }
    }
};
</script>


<style>

.container-doc {
    display: flex;
    align-content: center;
    justify-items: center;
}


</style>