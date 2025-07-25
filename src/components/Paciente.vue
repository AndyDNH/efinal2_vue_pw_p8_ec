<template>
  <div class="container-pac" >
    <div class="container-formulario">

      <label for="cedula">Cedula</label>
      <input id="cedula" v-model="ncedula" type="text" placeholder="Ingrese su cedula" />

      <label for="nombre">Nombre</label>
      <input id="nombre" v-model="nnombre" type="text" />

      <label for="apellido">Apellido</label>
      <input id="apellido" v-model="napellido" type="text" />

      <label for="nacimiento">Fecha de Nacimiento</label>
      <input id="nacimiento" v-model="nnacimiento" type="text" />

    </div>

  </div>
  <button @click="guardarPaciente" >Guardar</button>
</template>

<script>
import { guardarpacienteFachada } from "@/clients/HospitalClient";
export default {
    data(){
        return {
            pacienteLocal:{
                cedula:'',
                nombre:'',
                apellido:'',
                genero:''
            },
            ncedula : '',
            nnombre: '',
            napellido: '',
            nnacimiento: '',
        }
    },
    methods:{
        
        async guardarPaciente(){
            console.log('ejecutando');
            this.pacienteLocal.cedula = this.ncedula;
            this.pacienteLocal.nombre = this.nnombre;
            this.pacienteLocal.apellido = this.napellido;
            this.pacienteLocal.genero = this.nnacimiento;
            console.log(this.pacienteLocal);
            await guardarpacienteFachada(this.pacienteLocal)
        }
    }

}
</script>

<style>

</style>