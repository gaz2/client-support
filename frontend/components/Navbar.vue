<template>
  <nav class="navbar">
    <!-- Логотип или название сайта -->
    <div class="navbar-brand">
      <NuxtLink to="/" class="navbar-logo">MySite</NuxtLink>
    </div>

    <!-- Кнопка для мобильного меню -->
    <button class="navbar-toggle" @click="toggleMenu">
      <span class="navbar-toggle-icon"></span>
    </button>

    <!-- Основное меню -->
    <ul :class="['navbar-menu', { 'is-active': isMenuOpen }]">
      <li class="navbar-item">
        <NuxtLink to="/" class="navbar-link">Home</NuxtLink>
      </li>
      <li class="navbar-item">
        <NuxtLink to="/blog" class="navbar-link">Blog</NuxtLink>
      </li>
      <li class="navbar-item">
        <NuxtLink to="/register" class="navbar-link">Register</NuxtLink>
      </li>
      <li class="navbar-item">
        <NuxtLink to="/users" class="navbar-link">Users</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Состояние меню (открыто/закрыто)
const isMenuOpen = ref(false);

// Функция для переключения меню
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style lang="scss" scoped>
// Импорт переменных и миксинов (если есть)
@use '~/assets/scss/variables' as *;
@use '~/assets/scss/mixins' as *;

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $spacing-medium;
  background-color: $primary-color;
  color: white;

  &-brand {
    font-size: 1.5rem;
    font-weight: bold;
    background-color: $teal-500;

  }
   &-logo {
    font-size: 1rem;
    font-weight: bold;
    color: white;
    padding: 10px;

  }

  &-toggle {
    display: none; // Скрыть на десктопе
    background: none;
    border: none;
    cursor: pointer;

    &-icon {
      display: block;
      width: 25px;
      height: 3px;
      background-color: white;
      position: relative;

      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: white;
      }

      &::before {
        top: -8px;
      }

      &::after {
        top: 8px;
      }
    }
  }

  &-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    &.is-active {
      transform: translateX(0); // Показываем меню на мобильных устройствах
    }
  }

  &-item {
    margin-left: $spacing-medium;
  }

  &-link {
    color: white;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
}

// Адаптивные стили для мобильных устройств
@media (max-width: 768px) {
  .navbar {
    position: relative;

    &-toggle {
      display: block; // Показываем кнопку на мобильных устройствах
    }

    &-menu {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 250px;
      background-color: $primary-color;
      flex-direction: column;
      align-items: flex-start;
      padding: $spacing-large;
      transform: translateX(-100%);
      transition: transform 0.3s ease;

      &.is-active {
        transform: translateX(0); // Показываем меню
      }
    }

    &-item {
      margin: $spacing-medium 0;
    }
  }
}
</style>