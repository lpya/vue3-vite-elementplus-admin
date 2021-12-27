<template>
  <div class="login">
    <div class="content">
      <div class="title">Vue3-Vite-ElementPlus-admin</div>
      <el-form ref="loginForm" label-position="left" :model="state.loginForm" status-icon :rules="state.loginRules">
        <el-form-item prop="username">
          <el-input placeholder="请输入账号" v-model="state.loginForm.username">
            <template #prefix>
              <el-icon class="el-input__icon iconfont icon-user"></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="请输入密码" type="password" v-model="state.loginForm.password">
            <template #prefix>
              <el-icon class="el-input__icon iconfont icon-lock-fill"></el-icon>
            </template>
          </el-input>
        </el-form-item>
      </el-form>
      <div class="loginbtn">
        <el-button type="primary" @click="handleLogin" :loading="state.loading">{{ state.loading ? '登陆中' : '登陆' }}</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { USER_LOGIN } from '@/store/type'
import { ElMessage } from 'element-plus'

import { Values } from 'async-validator'
import { validUsername } from '@/utils/validate'
const store = useStore()
const router = useRouter()
const route = useRoute()
type Callback = (msg?: Error) => void
/**
 * @desc: 校验用户名
 * @param {*}
 * @return {*}
 */
const validateUsername = (rule: Values, username: string, callback: Callback) => {
  if (!validUsername(username)) {
    return callback(new Error('请输入正确用户名'))
  }
  callback()
}
/**
 * @desc: 校验密码
 * @param {*}
 * @return {*}
 */
const validatePassword = (rule: Values, password: string, callback: Callback) => {
  if (password.length < 6) {
    return callback(new Error('密码至少6位数'))
  }
  callback()
}

const state = reactive({
  loginForm: { username: 'admin', password: '123456' },
  loginRules: {
    username: [{ required: true, trigger: 'blur', validator: validateUsername }],
    password: [{ required: true, trigger: 'blur', validator: validatePassword }]
  },
  loading: false
})

const loginForm = ref()
const redirect = route.query.redirect?.toString()
const handleLogin = async () => {
  state.loading = true
  const chackData = await loginForm.value.validate()
  if (!chackData) {
    return false
  }
  const data = await store.dispatch(USER_LOGIN, state.loginForm)
  if (data) {
    ElMessage({
      message: '登陆成功',
      type: 'success'
    })
    state.loading = false
    router.push(redirect ? `/${redirect}` : '/dashboard')
  } else {
    ElMessage({
      message: '账号或密码错误',
      type: 'warning'
    })
  }
}
</script>

<style lang="scss">
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('../../assets/image/bg.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;

  > .content {
    width: 450px;
    box-shadow: 0 0 5px $white;
    border-radius: 5px;
    padding: 30px;
    .title {
      font-size: 20px;
      color: $white;
      text-align: center;
      height: 50px;
    }
    > .el-form {
      .el-form-item {
        padding: 10px 0;
        .el-form-item__label {
          color: $white;
        }
        .el-form-item__content {
          .el-input {
            .el-input__inner {
              background: rgba(255, 255, 255, 0.2);
              color: $white;
            }
          }
        }
      }
    }
    .loginbtn {
      padding-top: 10px;
      button {
        width: 100%;
      }
    }
  }
}
</style>
