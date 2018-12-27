<template>
  <div class="login-wrapper">
    <span class="login-title">在线图表制作</span>
    <div class="login-form">
      <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm" label-width="50px">
        <el-form-item label="账号" prop="userName">
          <el-input type="text" v-model="loginForm.userName" auto-complete="off" clearable="clearable" size="small"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" auto-complete="off" clearable="clearable" size="small"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="submit-btn" size="small" type="primary" @click="submitForm('loginForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      clearable: true,
      loginForm: {
        userName: '',
        password: ''
      },
      loginRules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'change' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      console.log(formName)
      var self = this
      self.$refs[formName].validate((valid) => {
        if (valid) {
          localStorage.setItem('the_user', self.loginForm.username)
          self.$router.push('/home/index')
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
  body{
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
  }
  .login-wrapper {
    position: absolute;
    background-color: aliceblue;
    margin: 0px;
    padding: 0px;
    height: 100%;
    width: 100%;
  }
  .login-title {
    font-size: 24px;
    position: absolute;
    top: 30%;
    left: 37%;
  }
  .login-form {
    position: absolute;
    background-color: #FFF;
    box-shadow: #989898 0px 0px 4px;
    border-radius: 4px;
    padding: 30px;
    width: 400px;
    height:180px;
    left: 37%;
    top: 37%;
  }
  .submit-btn{
    width: 120px;
  }
</style>
