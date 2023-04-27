<template>
  <form class="form-signin text-center">
    <img
      class="mb-4"
      src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
      alt=""
      width="72"
      height="72"
    />
    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
    <label for="inputEmail" class="sr-only">Email address</label>
    <b-form-input
      v-model="user.email"
      placeholder="Enter your email"
    ></b-form-input>
    <label for="inputPassword" class="sr-only">Password</label>
    <b-form-input
      type="password"
      v-model="user.password"
      placeholder="Enter your password"
    ></b-form-input>
    <b-button variant="primary" class="btn-block" @click="login"
    >Sign in
    </b-button
    >
    <!-- <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button> -->
  </form>
</template>
<script>
import {mapActions} from "vuex";
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
    ...mapActions(["setUser"]),
    login() {
      AuthApi.login(
        this.user,
        (request) => {
          localStorage.setItem("access_token", request.data.token);
          this.setUser(request.data.user);
          this.$router.push({path: "/"});
        },
        (error) => {
          console.error(error);
        }
      );
    },
  },
};
</script>
<style scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
