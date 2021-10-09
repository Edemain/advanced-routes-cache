<template>
  <div>
    <el-form :rules="accountRules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { accountRules } from "../config/rules";
export default defineComponent({
  name: "AccountLogin",
  setup() {
    const account = reactive({
      name: "",
      password: ""
    });

    return {
      account,
      accountRules
    };
  }
});
</script>

<style scoped lang="less"></style>
