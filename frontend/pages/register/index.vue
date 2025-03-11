<template>
  <div class="register-container">
    <div class="register-card">
      <h1 class="register-title">Регистрация</h1>
      <form class="register-form" @submit.prevent="handleRegister">
        <div class="form-group">
          <input
            v-model="email"
            type="email"
            class="form-input"
            placeholder=" "
            required
          />
          <label class="form-label">Email</label>
        </div>

        <div class="form-group">
          <input
            v-model="password"
            type="password"
            class="form-input"
            placeholder=" "
            required
          />
          <label class="form-label">Пароль</label>
        </div>

        <button type="submit" class="submit-button">
          Зарегистрироваться
          <span class="button-overlay"></span>
        </button>

        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
// Состояния формы
const email = ref('');
const password = ref('');

// Сообщения об ошибках и успехе
const errorMessage = ref('');
const successMessage = ref('');

// Логика отправки данных
const handleRegister = async () => {
  console.log('Форма отправлена');
  errorMessage.value = '';
  successMessage.value = '';

  try {
    const response = await fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    console.log('Форма отправлена2');
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Ошибка при регистрации');
    }

    const data = await response.json();
    successMessage.value = `Регистрация успешна! Ваш ID: ${data.id}`;
  } catch (err) {
    if (err instanceof Error) {
      errorMessage.value = err.message;
    } else {
      errorMessage.value = 'Произошла неизвестная ошибка';
    }
  }
};
</script>

<style lang="scss">
.register-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 2rem;
}

.register-card {
  background: white;
  padding: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
}

.register-title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background: #3498db;
    margin: 0.5rem auto 0;
    border-radius: 2px;
  }
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: transparent;
  z-index: 1;
  position: relative;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  }

  &:placeholder-shown + .form-label {
    transform: translateY(1rem) scale(1);
    color: #95a5a6;
  }

  &:not(:placeholder-shown) + .form-label,
  &:focus + .form-label {
    transform: translateY(-1.25rem) scale(0.85);
    background: white;
    padding: 0 0.3rem;
    color: #3498db;
  }
}

.form-label {
  position: absolute;
  left: 1rem;
  top: 0.9rem;
  color: #2c3e50;
  pointer-events: none;
  transition: all 0.3s ease;
  transform-origin: left top;
}

.submit-button {
  position: relative;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  background: #3498db;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  .button-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover .button-overlay {
    opacity: 1;
  }
}

.error-message {
  color: #e74c3c;
  text-align: center;
  margin-top: 1rem;
}

.success-message {
  color: #2ecc71;
  text-align: center;
  margin-top: 1rem;
}

@media (max-width: 480px) {
  .register-container {
    padding: 1rem;
  }

  .register-card {
    padding: 1.5rem;
  }
}
</style>