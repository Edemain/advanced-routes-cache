<template>
  <div class="login-panel-container">
    <h1 class="login-panel-title">高级路由管理系统</h1>
    <div>
      <el-tabs type="border-card" stretch>
        <el-tab-pane>
          <template #label>
            <span><i class="el-icon-date"></i> 账号登录</span>
          </template>
          账号登录
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <span
              ><el-icon>
                <cellphone />
              </el-icon>
              手机登录</span
            >
          </template>
          手机登录
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LoginPanel",
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less">
.login-panel-container {
  .login-panel-title {
    text-align: center;
  }
}
</style>
