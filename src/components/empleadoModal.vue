<script setup></script>

<template>
  <div>
    <div>
      <div>
        <h2>Crear o Editar Empleado</h2>
        <button>✕</button>
      </div>

      <form>
        <div>
          <div>
            <label>Nombre</label>
            <input/>
            <label>Apellido</label>
            <input/>
          </div>
          <div>
            <label>Cargo</label>
            <select>
              <option>¿OPCIONES!</option>
            </select>
            <label>Departamento</label>
            <select>
              <option>¡OPCIONES!</option>
            </select>
          </div>
        </div>

        <div>
          <label>Asunto</label>
          <input/>
        </div>

        <div>
          <label>E-Mail</label>
          <input type="text">
        </div>

        <div>
          <label>Estado</label>
          <select>
            <option>Activo</option>
            <option>Inactivo</option>
          </select>
        </div>

        <div>
          <button>Cancelar</button>
          <button>Guardar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>