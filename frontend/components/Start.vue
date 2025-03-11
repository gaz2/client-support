<template>
  <div class="container">
    <h1>Добро пожаловать на мой сайт!</h1>
    <p>Это пример текста с использованием SCSS.</p>
    <button class="button">Нажми меня</button>
    <div class="card">
      <p>Это карточка с тенью.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  h1 {
    color: $secondary-color;
    padding: 20px;
  }

  .card {
    background-color: $primary-color;
    margin: 20px;
  }
}
</style>