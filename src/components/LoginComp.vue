<script setup>
    import { ref, reactive } from 'vue';
    import { http } from '../services/http.services';

    const emit = defineEmits(['login-success']);

    const form = reactive({
        usuario: '',
        password: '',
        frasePasoMaster: '',
    });

    const showPassword = ref(false);
    const showFrasePaso = ref(false);
    const isLoading = ref(false);
    const errorMessage = ref(null);

    const handleLogin = async () => {
    errorMessage.value = null;

    if (!form.usuario || !form.password) {
        errorMessage.value = 'Por favor completa el usuario y la contraseña.';
        return;
    }

    isLoading.value = true;

    try {
    
    const {status,data}= await http.post('/login',{
            "username": form.usuario,
            "password": form.password
        });

        console.log(status,data);
        
        if(status==200 && data?.message =='Login exitoso'){
            guardarToken(data.token)
            emit('login-success', true);
        }
            
        } catch (err) {
            console.log(err);
            errorMessage.value = 'Credenciales inválidas o error de conexión.';
        } finally {
            isLoading.value = false;
        }
    };
</script>

<template>

    <section class="login">
        <header>
            <h1>Registro de Empleados</h1>
            <h2>Departamento de Recursos Humanos - PokeMetálicos Asociados</h2>
        </header>
    
        <div v-if="errorMessage" class="error">
            {{ errorMessage }}
        </div>

        <form @submit.prevent="handleLogin">
            <div>
                <label>Usuario o Correo</label>
                <input v-model="form.usuario" type="text" required placeholder="ej. Memi" />
            </div>

            <div>
                <label>Contraseña</label>
                <div class="password-wrapper">
                    <input v-model="form.password" :type="showPassword ? 'text' : 'password'" required placeholder="••••••••"/>
                    <button type="button" @click="showPassword = !showPassword" class="btn-toggle">{{ showPassword ? 'Ocultar' : 'Ver' }}</button>
                </div>
            </div>

            <button type="submit" :disabled="isLoading" class="send">
                {{ isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión' }}
            </button>
        </form>
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

    section button.send {
        padding: 1%;
        width: 100%;
        font-weight: bold;
    }

    .password-wrapper {
        display: flex;
    }

    .error {
        padding: 2%;
        background-color: red;
        color: white;
        margin-bottom: 2%;
    }
</style>