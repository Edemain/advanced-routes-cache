<template>
  <div class="login-panel-container">
    <h1 class="login-panel-title">高级路由管理系统</h1>
    <div>
      <el-tabs type="border-card" stretch>
        <el-tab-pane>
          <template #label>
            <el-icon style="vertical-align: middle">
              <user />
            </el-icon>
            <span style="vertical-align: middle"> 账号登录</span>
          </template>
          <account-login></account-login>
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <el-icon style="vertical-align: middle">
              <iphone />
            </el-icon>
            <span style="vertical-align: middle"> 手机登录</span>
          </template>
          <phone-login></phone-login>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="login-panel-password">
      <el-checkbox v-model="isRememberPassword">记住密码</el-checkbox>
      <el-link type="primary" :underline="false">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-panel-btn">登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AccountLogin from "./account-login.vue";
import PhoneLogin from "./phone-login.vue";
export default defineComponent({
  name: "LoginPanel",
  components: {
    AccountLogin,
    PhoneLogin
  },
  setup() {
    const isRememberPassword = ref(true);
    return {
      isRememberPassword
    };
  }
});
</script>

<style scoped lang="less">
.login-panel-container {
  width: 360px;
  margin-bottom: 150px;
  .login-panel-title {
    text-align: center;
  }
  .login-panel-password {
    display: flex;
    justify-content: space-between;
  }
  .login-panel-btn {
    width: 100%;
  }
}
</style>
