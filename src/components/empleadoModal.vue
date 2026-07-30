<script setup></script>

<template>
  <section>
    <header class="modal-header">
      <h2>Crear o Editar Empleado</h2>
      <button>✕</button>
    </header>

    <div>
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
        <button>Cancelar</button>
        <button>Guardar</button>
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
    width: 50%;
  }

  .botones {
    width: 100%;
    padding: 2%;
  }

  button {
    
  }
</style>