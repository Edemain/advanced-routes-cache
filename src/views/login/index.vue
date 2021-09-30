<template>
  <div class="login-container">
    <login-panel></login-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginPanel from "./comoenents/login-panel.vue";
export default defineComponent({
  name: "Login",
  components: {
    LoginPanel
  },
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less">
.login-container {
  width: 100%;
  height: 100%;
  background: url("~@/assets/img/login-bg.svg");
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
