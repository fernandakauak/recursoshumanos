<script setup>
import { ref, onMounted } from 'vue';
import { http } from '../services/http.services'
import EmpleadoModal from './empleadoModal.vue'

const personas = ref([])
const departamentos = ref([])
const buscar = ref('')
const filtroDepartamento = ref('')
const mostrarModal = ref(false)
const personaSeleccionada = ref(null)

const cargarPersonas = async () => {
    const params = {}
    if (buscar.value) params.buscar = buscar.value
    if (filtroDepartamento.value) params.departamento = filtroDepartamento.value

    const respuesta = await http.get('/personas', { params })
    personas.value = respuesta.data.resultados
}

onMounted(async () => {
    await cargarPersonas()
    const respuestaDept = await http.get('/personas/departamentos')
    departamentos.value = respuestaDept.data
})

const abrirCrear = () => {
    personaSeleccionada.value = null
    mostrarModal.value = true
}

const abrirEditar = (persona) => {
    personaSeleccionada.value = { ...persona }
    mostrarModal.value = true
}

const cerrarModal = () => {
    mostrarModal.value = false
    personaSeleccionada.value = null
}

const eliminar = async (persona) => {
    if (!confirm(`¿Eliminar a ${persona.nombre} ${persona.apellido}?`)) return
    const token = localStorage.getItem('token')
    await http.delete(`/personas/${persona.id}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
    await cargarPersonas()
}
</script>

<template>
    <div>
        <header>
            <div>
                <h1>Registro de trabajadores</h1>
                <p>Departamento de Recursos Humanos, PokeMetálicos Asociados</p>
            </div>
            <button @click="abrirCrear">Agregar Empleado</button>
        </header>

        <div>
            <input v-model="buscar" @input="cargarPersonas" placeholder="Buscar por nombre..." />
            <div>
                <select v-model="filtroDepartamento" @change="cargarPersonas">
                    <option value="">Todos los departamentos</option>
                    <option v-for="dep in departamentos" :key="dep" :value="dep">{{ dep }}</option>
                </select>
            </div>
        </div>

        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>E-Mail</th>
                            <th>Cargo</th>
                            <th>Departamento</th>
                            <th>Activo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="personas.length == 0">
                            <td colspan="6">No hay personas registradas</td>
                        </tr>
                        <tr v-else v-for="p in personas" :key="p.id">
                            <td>{{ p.nombre }} {{ p.apellido }}</td>
                            <td>{{ p.email }}</td>
                            <td>{{ p.cargo }}</td>
                            <td>{{ p.departamento }}</td>
                            <td>{{ p.activo ? 'Activo' : 'Inactivo' }}</td>
                            <td>
                                <button @click="abrirEditar(p)">Editar</button>
                                <button @click="eliminar(p)">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <EmpleadoModal
            v-if="mostrarModal"
            :persona="personaSeleccionada"
            @cerrar="cerrarModal"
            @guardado="cargarPersonas"
        />
    </div>
</template>

<style></style>