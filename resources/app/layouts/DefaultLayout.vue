<template>
  <div>
    <header-layout></header-layout>
    <div class="container-fluid">
      <div class="row">
        <sidebar-layout></sidebar-layout>
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
import HeaderLayout from "./HeaderLayout";
import SidebarLayout from "./SidebarLayout";
export default {
  components: {
    HeaderLayout,
    SidebarLayout,
  },
};
</script>
