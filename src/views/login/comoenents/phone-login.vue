<template>
  <div>
    <el-form :rules="phoneRules" :model="phone">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="code-container">
          <el-input v-model="phone.code"></el-input>
          <el-button type="primary" class="code-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { phoneRules } from "../config/rules";
export default defineComponent({
  name: "PhoneLogin",
  setup() {
    const phone = reactive({
      num: "",
      code: ""
    });
    return {
      phone,
      phoneRules
    };
  }
});
</script>

<style scoped lang="less">
.code-container {
  display: flex;
  .code-btn {
    margin-left: 10px;
  }
}
</style>
