<script setup>
import { reactive, onMounted } from 'vue';
  const props = defineProps({
    ticket: { type: Object, default: null }
  });

  const emit = defineEmits(['close', 'save']);

  const PRIORIDADES = ['baja', 'media', 'alta'];
  const ESTADOS = ['abierto', 'en_proceso', 'cerrado'];

  const form = reactive({
    id:0,  
    asunto: '',
    descripcion: '',
    solicitante: '',
    prioridad: 'media',
    estado: 'abierto',
    solucion: '',
    incluirDatoSeguro: false,
    datoSeguroEtiqueta: '',
    datoSeguroValorEnClaro: ''
  });

  onMounted(() => {
    if (props.ticket) {

      form.id = props.ticket.id;
      form.asunto = props.ticket.asunto;
      form.descripcion = props.ticket.descripcion;
      form.solicitante = props.ticket.solicitante;
      form.prioridad = props.ticket.prioridad;
      form.estado = props.ticket.estado;
      form.solucion = props.ticket.solucion || '';
      if (props.ticket.datoSeguro) {
        form.incluirDatoSeguro = true;
        form.datoSeguroEtiqueta = props.ticket.datoSeguro.etiqueta;
      }
    }
  });

  const handleSubmit = () => {
    emit('save', { ...form });
    emit('close');
  };
</script>

<template>
  <section>
    <header class="modal-header">
      <h2> {{ props.ticket ? 'Editar Ticket: ' + props.ticket.codigo : 'Crear Nuevo Ticket' }} </h2>
      <button @click="$emit('close')">✕</button>
    </header>

    <div  @submit.prevent="handleSubmit" class="form">
      <div class="data" >
        <label>Nombre</label>
        <input/>
        <label>Apellido</label>
        <input/>
      </div>

      <div class="data">
        <label>Cargo</label>
        <select>
          <option>¿OPCIONES!</option>
        </select>
        <label>Departamento</label>
        <select>
          <option>¡OPCIONES!</option>
        </select>
      </div>

      <div class="data">
        <label>Asunto</label>
        <input/>
      </div>

      <div class="data">
        <label>E-Mail</label>
        <input type="text">
      </div>

      <div class="data">
        <label>Estado</label>
        <select>
          <option>Activo</option>
          <option>Inactivo</option>
        </select>
      </div>
    </div>    

    <div class="botones">
      <button>Guardar</button>
      <button class="cancelar">Cancelar</button>
    </div>
  </section>
  
</template>

<style scoped>
  header.modal-header {
    background-color: grey;
    padding: 2%;
    display: flex;
    width: 100%;
  }

  .data {
    width: 48%;
    padding: 1%;
  }

  .botones {
    width: 100%;
    padding: 2%;
  }

  button {
    padding: 2%;
    color: white;
    font-weight: bold;
    background-color: grey;
  }

  button.aceptar {
    background-color: green;
  }

  button.cancelar {
    background-color: red;
  }

  .form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  select {
    width: 100%;
    padding: 1%;
  }
</style>