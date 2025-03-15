<template>
  <div class="users-page">
    <h1>Users List</h1>
    <div v-if="pending" class="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error.message }}</div>
    <div v-if="data">
      <ul class="users-list">
        <li v-for="user in data" :key="user._id" class="user-item">
        <div class="user-info">
          <span class="username">{{ user.username }}</span>
          <span class="email">{{ user.email }}</span>
        </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from 'nuxt/app';

interface IUser {
  _id: string;
  username: string;
  email: string;
  createdAt: string;
  role: string;
  status: string;
}

const { data, pending, error } = await useFetch<IUser[]>('http://localhost:3001/api/users');
</script>

<style lang="scss" scoped>
.users-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
  }

  .loading {
    text-align: center;
    font-size: 1.2rem;
    color: #666;
  }

  .error {
    text-align: center;
    font-size: 1.2rem;
    color: red;
  }

  .users-list {
    list-style: none;
    padding: 0;

    .user-item {
      background: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 15px;
      margin-bottom: 10px;

      .user-info {
        display: flex;
        flex-direction: column;
        gap: 5px;

        .username {
          font-weight: bold;
          font-size: 1.1rem;
        }

        .email {
          color: #555;
        }

        .age {
          color: #777;
        }
      }
    }
  }
}
</style>
