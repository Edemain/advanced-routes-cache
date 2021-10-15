<template>
  <div>
    <el-form :rules="accountRules" :model="account" ref="formRef">
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
import { defineComponent, reactive, ref } from "vue";
import { useStore } from "vuex";
import { accountRules } from "../config/rules";
import localCache from "@/utils/cache";
import { ElForm } from "element-plus";
export default defineComponent({
  name: "AccountLogin",
  setup() {
    const account = reactive({
      name: localCache.getCache("advance-name") ?? "",
      password: localCache.getCache("advance-password") ?? ""
    });

    const store = useStore();

    const formRef = ref<InstanceType<typeof ElForm>>();

    //执行登录
    const loginAction = (isRememberPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isRememberPassword) {
            //记住密码操作
            localCache.setCache("advance-name", account.name);
            localCache.setCache("advance-password", account.password);
          } else {
            localCache.deleteCache("advance-name");
            localCache.deleteCache("advance-password");
          }
          //执行登录操作
          store.dispatch("login/accountLoginAction", { ...account });
        }
      });
    };

    return {
      account,
      accountRules,
      formRef,
      loginAction
    };
  }
});
</script>

<style scoped lang="less"></style>
