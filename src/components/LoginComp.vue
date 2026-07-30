<script setup>
    import { ref, reactive } from 'vue';
    import { http } from '../services/http.services';
</script>

<template>
    <section class="login">
        <h1>Iniciar sesión</h1>
        <label for="user">Usuario:</label>
        <input type="text" name="user" id="user">
        <label for="pass">Contraseña:</label>
        <input type="text" name="pass" id="pass">
        <button>Entrar</button>
    </section>

</template>

<style>
    section.login {
        width: 80%;
        padding: 2%;
        margin: 3% auto;
        background-color: greenyellow;
        border-radius: 10px;
    }

    section h1 {
        width: 100%;
        text-align: center;
    }

    section label {
        text-align: left;
        font-weight: bold;
        width: 100%;
    }

    section input {
        padding: 1%;
        width: 98%;
        margin-bottom: 2%;
    }

    section button {
        padding: 1%;
        width: 100%;
        font-weight: bold;
    }
</style>