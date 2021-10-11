<template>
  <div class="login-panel-container">
    <h1 class="login-panel-title">高级路由管理系统</h1>
    <div>
      <el-tabs type="border-card" stretch v-model="currentTab">
        <el-tab-pane name="account">
          <template #label>
            <el-icon style="vertical-align: middle">
              <user />
            </el-icon>
            <span style="vertical-align: middle"> 账号登录</span>
          </template>
          <account-login ref="accountRef"></account-login>
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <el-icon style="vertical-align: middle">
              <iphone />
            </el-icon>
            <span style="vertical-align: middle"> 手机登录</span>
          </template>
          <phone-login ref="phoneRef"></phone-login>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="login-panel-password">
      <el-checkbox v-model="isRememberPassword">记住密码</el-checkbox>
      <el-link type="primary" :underline="false">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-panel-btn" @click="login">登录</el-button>
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
    //是否记住密码
    const isRememberPassword = ref(true);
    //当前登陆方法的标签页
    const currentTab = ref<string>("account");
    const accountRef = ref<InstanceType<typeof AccountLogin>>();
    const phoneRef = ref<InstanceType<typeof PhoneLogin>>();
    //登录方法
    const login = () => {
      if (currentTab.value == "account") {
        accountRef.value?.loginAction(isRememberPassword.value);
      } else {
        console.log("验证码登录");
      }
    };
    return {
      isRememberPassword,
      currentTab,
      accountRef,
      phoneRef,
      login
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
