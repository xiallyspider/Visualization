<template>
  <div class="login-wrapper">
    <span class="login-title">在线图表制作系统</span>
    <div class="login-form">
      <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm" label-width="100px">
        <el-form-item label="账号" prop="userName">
          <el-input type="text" v-model="loginForm.userName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        loginForm: {
          userName: '',
          password: ''
        },
        loginRules: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods:{
      submitForm(formName) {
        console.log(formName)
        var self = this
        self.$refs[formName].validate((valid)=>{
          if (valid) {
            localStorage.setItem('the_user',self.loginForm.username)
            self.$router.push('/upload')
          } else {
            console.log('error submit!')
            return false
          }
        })
      }
    }
  }
</script>

<style>
  .login-wrapper {
    position: relative;
    background-color: bisque;
    margin: 0px;
    padding: 0px;
    height: 100%;
    width: 100%;
  }
  .login-title {
    font-size: 20px;

  }
  .login-form {
    width: 400px;
    height: 300px;
    margin: 300px auto;
  }
</style>

