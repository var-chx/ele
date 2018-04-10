<template>
	<div class="login_page fillcontain">
		<transition name="form-fade" mode="in-out">
			<div class="form_contianer "  v-show="showLogin">
				<div class="manage_tip">
		  			<p>elm后台管理系统</p>
		  		</div>
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" >
					<el-form-item  prop="name">
						<el-input v-model="ruleForm.name" placeholder="用户名"></el-input>
					</el-form-item>
					<el-form-item  prop="password">
						<el-input v-model="ruleForm.password" placeholder="密码"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submitForm('ruleForm')" class="submit_btn">登陆</el-button>
					</el-form-item>
				</el-form>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
	  },
	  showLogin:false
	  
    };
  },
  mounted() {
    this.showLogin = true;
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: "登陆成功!",
            type: "success"
          });
          this.$router.push("/manage");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../style/mixin";
.login_page {
  background-color: #324057;
}
.manage_tip {
  position: absolute;
  width: 100%;
  top: -100px;
  left: 0;
  p {
    font-size: 34px;
    color: #fff;
  }
}
.form_contianer {
  .wh(320px, 210px);
  .ctp(320px, 210px);
  padding: 25px;
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
  .submit_btn {
    width: 100%;
    font-size: 16px;
  }
}
.tip {
  font-size: 12px;
  color: red;
}
.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 1s;
}
.form-fade-enter,
.form-fade-leave-active {
  transform: translate3d(0, -50px, 0);
  opacity: 0;
}
</style>