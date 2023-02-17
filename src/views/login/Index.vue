<template>
  <div class="login">
    <div class="login-container">
      <Owl :closed-eyes="isFocus" />
      <el-card class="login-card">
        <el-form ref="loginFormRef" status-icon :model="loginData" :rules="loginRules">
          <el-form-item prop="account">
            <el-input v-model="loginData.account" placeholder="account" @keyup.enter="login()">
              <template #prefix> <i class="iconfont icon-user"></i> </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input
              v-model="loginData.pwd"
              placeholder="password"
              type="password"
              @keyup.enter="login()"
              @blur="listenBlur()"
              @focus="listenFocus()"
            >
              <template #prefix> <i class="iconfont icon-lock-fill"></i> </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="captcha_code">
            <div class="code">
              <el-input v-model="loginData.captcha_code" placeholder="code" @keyup.enter="login()">
                <template #prefix> <i class="iconfont icon-safetycertificate-f"></i> </template>
              </el-input>
              <img src="@/assets/image/code.png" alt="验证码" />
            </div>
          </el-form-item>
          <el-button type="primary" :loading="loading" @click="login()">{{ loading ? '登陆中' : '登陆' }}</el-button>
        </el-form>
      </el-card>
      <div class="userPwd">
        <div>账号：admin 密码：123456</div>
        <div>账号：visitor 密码：123456</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Owl from './components/Owl.vue'

import { reactive, ref, toRefs } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { useInput } from '@/composables/useInput'
import { USER_LOGIN } from '@/store/type'

const { isFocus, listenBlur, listenFocus } = useInput()

const loginFormRef = ref()

const store = useStore()
const router = useRouter()
const route = useRoute()
const state = reactive({
  loading: false,
  loginData: {
    account: 'admin',
    pwd: '123456',
    captcha_code: '19055'
  },
  loginRules: {
    account: [
      { required: true, trigger: 'blur', message: '请输入账号' },
      { min: 5, trigger: 'blur', message: '账号至少5位数' }
    ],
    pwd: [
      { required: true, trigger: 'blur', message: '请输入密码' },
      { min: 5, trigger: 'blur', message: '密码至少6位数' }
    ],
    captcha_code: [
      { required: true, trigger: 'blur', message: '请输入验证码' },
      { min: 5, max: 5, trigger: 'blur', message: '请输入5位数验证码' }
    ]
  }
})

const { loginData, loginRules, loading } = toRefs(state)
const redirect = route.query.redirect?.toString()
const login = async () => {
  const chackData = await loginFormRef.value.validate()
  if (!chackData) {
    return false
  }
  const { account, pwd, captcha_code } = state.loginData
  if (account !== 'admin' && account !== 'visitor') {
    ElMessage({
      message: '账号或密码错误',
      type: 'error'
    })
    return
  }
  if (pwd !== '123456') {
    ElMessage({
      message: '账号或密码错误',
      type: 'error'
    })
    return
  }
  if (captcha_code !== '19055') {
    ElMessage({
      message: '验证码错误',
      type: 'error'
    })
    return
  }
  state.loading = true
  const data = await store.dispatch(USER_LOGIN, state.loginData)
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
      type: 'error'
    })
  }
}
</script>

<style lang="scss">
@import './index.scss';
</style>
