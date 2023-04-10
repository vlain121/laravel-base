<template>
  <div>
    <input type="text" v-model="user.email" />
    <input type="password" v-model="user.password" />
    <button @click="login">Login</button>
  </div>
</template>
<script>
import AuthApi from "../api/auth";
export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    login() {
      AuthApi.login(
        this.user,
        (data) => {
          console.log(data);
        },
        (error) => {
          console.error(error);
        }
      );
    },
  },
};
</script>
