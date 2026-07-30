<script setup></script>

<template>
    <div>
        <header>
            <div>
                <h1>Registro de trabajadores</h1>
                <p>Departamento de Recursos Humanos, PokeMetálicos Asociados</p>
            </div>
            <button>Agregar Empleado</button>
        </header>

    <!-- Filtros -->
        <div>
        <input />
            <div>
                <select>
                    <option value="">Todos los cargos?</option>
                    <option value="">OPCIÓN 1</option>
                    <option value="">OPCIÓN 2</option>
                    <option value="">OPCIÓN ETC</option>
                </select>
                <select>
                    <option value="">Todos los departamentos</option>
                    <option value="">OPCIÓN 1</option>
                    <option value="">OPCIÓN 2</option>
                    <option value="">OPCIÓN ETC</option>
                </select>
            </div>
        </div>

    <!-- Tabla -->
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
                        <tr>
                            <td>Nombre y apellido</td>
                            <td>E-Mail</td>
                            <td>Cargo</td>
                            <td>Departamento</td>
                            <td>Activo</td>
                            <td>BOTONES DE ACCIONES</td>
                        </tr>
                        <tr>
                            <td>No se encontraron empleados.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style></style>