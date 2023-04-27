<template>
  <default-layout>
    <main role="main" class="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
      <div
        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom"
      >
        <h1 class="h2">Dashboard</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group mr-2">
            <button class="btn btn-sm btn-outline-secondary">Share</button>
            <button class="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar"></span>
            This week
          </button>
        </div>
      </div>
      <h2>Section title</h2>
      <b-container fluid>
        <b-row>
          <b-col xs="12" sm="6" md="6" lg="3">
            <b-card style="max-width: 20rem" class="mb-2 bg-primary">
              <b-icon icon="person-fill" style="color: #7952b3"></b-icon>
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col xs="12" sm="6" md="6" lg="3">
            <b-card style="max-width: 20rem" class="mb-2 bg-success">
              <b-icon icon="person-fill" style="color: #7952b3"></b-icon>

              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col xs="12" sm="6" md="6" lg="3">
            <b-card style="max-width: 20rem" class="mb-2 bg-warning">
              <b-icon icon="person-fill" style="color: #7952b3"></b-icon>

              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col xs="12" sm="6" md="6" lg="3">
            <b-card style="max-width: 20rem" class="mb-2 bg-danger">
              <b-icon icon="person-fill" style="color: #7952b3"></b-icon>

              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </default-layout>
</template>
<script>
import {mapState} from "vuex";

export default {
  computed: mapState({
    token: (state) => state.token,
  }),
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
    };
  },
  methods: {},
};
</script>
<style>
body {
  font-size: 0.875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

/*
   * Sidebar
   */

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

.sidebar-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 48px; /* Height of navbar */
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}

/*
   * Navbar
   */

.navbar-brand {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
}

.navbar .form-control {
  padding: 0.75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
}

/*
   * Utilities
   */

.border-top {
  border-top: 1px solid #e5e5e5;
}

.border-bottom {
  border-bottom: 1px solid #e5e5e5;
}
</style>
