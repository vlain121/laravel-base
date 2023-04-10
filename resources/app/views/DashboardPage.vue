<template>
  <div>
    <input type="text" v-model="user.email" />
    <input type="password" v-model="user.password" />
    <button @click="login">Login</button>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import AuthApi from "../api/auth";
export default {
    computed: mapState({
        token: state => state.token
    }),
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    ...mapActions(['commitSetToken']),
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
    }
  watch: {
        token(value) {
            console.log(value)
        }
    },
};
</script>
