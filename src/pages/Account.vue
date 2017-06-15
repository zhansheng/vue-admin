<template>
  <div class=" login">
    <div class="logo">
      <a href="index.html">
        <img src="../assets/img/logo-big.png" alt=""/> </a>
    </div>
    <div class="content">
      <h3 class="form-title" v-show="islogin">Login to your account</h3>
      <h3 v-show="isforget">Forget Password ?</h3>
      <h3 v-show="isregister">Sign Up</h3>
      <alert type="danger" dismissable :value="hasError" @input="close">
        {{errorMsg ? errorMsg : ''}}
      </alert>
      <form class="login-form" action="index.html" method="post" v-show="islogin">
        <div class="form-group">
          <!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
          <label class="control-label visible-ie8 visible-ie9">Username</label>
          <div class="input-icon">
            <i class="fa fa-user"></i>
            <input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="Username"
                   name="username"/></div>
        </div>
        <div class="form-group">
          <label class="control-label visible-ie8 visible-ie9">Password</label>
          <div class="input-icon">
            <i class="fa fa-lock"></i>
            <input class="form-control placeholder-no-fix" type="password" autocomplete="off" placeholder="Password"
                   name="password"/></div>
        </div>
        <div class="form-actions">
          <label class="rememberme mt-checkbox mt-checkbox-outline">
            <input type="checkbox" name="remember" value="1"/> Remember me
            <span></span>
          </label>
          <button type="submit" class="btn green pull-right"> Login </button>
        </div>
        <div class="forget-password">
          <h4>Forgot your password ?</h4>
          <p> no worries, click
            <a @click.prevent="toforget" id="forget-password"> here </a> to reset your password. </p>
        </div>
        <div class="create-account">
          <p> Don't have an account yet ?&nbsp;
            <a @click.prevent="toregister" id="register-btn"> Create an account </a>
          </p>
        </div>
      </form>
      <form class="forget-form" method="post" v-show="isforget">
        <p> Enter your e-mail address below to reset your password. </p>
        <div class="form-group">
          <div class="input-icon">
            <i class="fa fa-envelope"></i>
            <input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="Email"
                   name="email"/></div>
        </div>
        <div class="form-actions">
          <button type="button" id="back-btn" class="btn red btn-outline" @click="tologin">Back </button>
          <button type="submit" class="btn green pull-right"> Submit </button>
        </div>
      </form>
      <form class="register-form" v-show="isregister">
        <div class="form-group">
          <label class="control-label visible-ie8 visible-ie9">Full Name</label>
          <div class="input-icon">
            <i class="fa fa-font"></i>
            <input class="form-control placeholder-no-fix" type="text" placeholder="Full Name" v-model="fullname"/>
          </div>
        </div>
        <div class="form-group">
          <!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
          <label class="control-label visible-ie8 visible-ie9">Email</label>
          <div class="input-icon">
            <i class="fa fa-envelope"></i>
            <input class="form-control placeholder-no-fix" type="text" placeholder="Email" v-model="email"/></div>
        </div>
        <div class="form-group">
          <label class="control-label visible-ie8 visible-ie9">Username</label>
          <div class="input-icon">
            <i class="fa fa-user"></i>
            <input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="Username"
                   v-model="username"/></div>
        </div>
        <div class="form-group">
          <label class="control-label visible-ie8 visible-ie9">Password</label>
          <div class="input-icon">
            <i class="fa fa-lock"></i>
            <input class="form-control placeholder-no-fix" type="password" autocomplete="off" id="register_password"
                   placeholder="Password" v-model="password"/></div>
        </div>
        <div class="form-group">
          <label class="control-label visible-ie8 visible-ie9">Re-type Your Password</label>
          <div class="controls">
            <div class="input-icon">
              <i class="fa fa-check"></i>
              <input class="form-control placeholder-no-fix" type="password" autocomplete="off"
                     placeholder="Re-type Your Password" v-model="rpassword"/></div>
          </div>
        </div>
        <div class="form-group">
          <label class="mt-checkbox mt-checkbox-outline">
            <input type="checkbox" name="tnc"/> I agree to the
            <a href="javascript:;">Terms of Service </a> &
            <a href="javascript:;">Privacy Policy </a>
            <span></span>
          </label>
          <div id="register_tnc_error"></div>
        </div>
        <div class="form-actions">
          <button id="register-back-btn" type="button" class="btn red btn-outline" @click="tologin"> Back </button>
          <button type="submit" id="register-submit-btn" class="btn green pull-right" @click.prevent="preregister">
            Sign Up
          </button>
        </div>
      </form>
    </div>
    <div class="copyright"> 2014 &copy; Metronic - Admin Dashboard Template. </div>
  </div>
</template>

<script>
  import alert from '@/components/vuestrap/Alert'

  export default {
    name: 'Account',
    components: {alert},
    data: function () {
      return {
        type: 'login',
        fullname: '',
        email: '',
        username: '',
        password: '',
        rpassword: '',
        hasError: false,
        errorMsg: '',
      }
    },
    methods: {
      tologin: function () {
        this.type = 'login'
      },
      toregister: function () {
        this.type = 'register'
      },
      toforget: function () {
        this.type = 'forget'
      },
      preregister: function () {
        if (_.isEmpty(this.fullname)){
          this.hasError = true;
          this.errorMsg = 'please input your fullname';
        }
      },
      close(val){
        if (!val) {
          this.hasError = false;
        }
      }
    },
    computed: {
      islogin: function () {
        return this.type === 'login'
      },
      isregister: function () {
        return this.type === 'register'
      },
      isforget: function () {
        return this.type === 'forget'
      },
    },

    mounted (){
      let type = this.$route.query.type
      this.type = type
    }

  }
</script>

<style lang="scss">
  @import '../style/global/components/_mixins'; // global mixings.

  /* logo page */
  .login {
    /*background-color: #666 !important;*/
  }

  .login .logo {
    margin: 60px auto 20px auto;
    padding: 15px;
    text-align: center;
  }

  .login .content {
    background: url(../assets/img/bg-white-lock.png) repeat;
    width: 360px;
    margin: 0 auto;
    margin-bottom: 0px;
    padding: 30px;
    padding-top: 20px;
    padding-bottom: 15px;
    @include border-radius(7px);
  }

  .login .content h3 {
    color: #eee;
  }

  .login .content h4 {
    color: #eee;
  }

  .login .content p,
  .login .content label {
    color: #fff;
  }

  .login .mt-checkbox > span:after {
    border-color: #eee;
  }

  .login .content .login-form,
  .login .content .forget-form {
    padding: 0px;
    margin: 0px;
  }

  .login .content .form-control {
    background-color: #fff;
  }

  .login .content .form-title {
    font-weight: 300;
    margin-bottom: 25px;
  }

  .login .content .form-actions {
    background-color: transparent;
    clear: both;
    border: 0px;
    padding: 0px 30px 25px 30px;
    margin-left: -30px;
    margin-right: -30px;
  }

  .login .content .forget-form .form-actions {
    border: 0;
    margin-bottom: 0;
    padding-bottom: 20px;
  }

  .login .content .register-form .form-actions {
    border: 0;
    margin-bottom: 0;
    padding-bottom: 0px;
  }

  .login .content .form-actions .rememberme {
    margin-top: 8px;
    display: inline-block;
  }

  .login .content .form-actions .btn {
    margin-top: 1px;
  }

  .login .content .forget-password {
    margin-top: 25px;
  }

  .login .content .create-account {
    border-top: 1px dotted #eee;
    padding-top: 10px;
    margin-top: 15px;
  }

  .login .content .create-account a {
    display: inline-block;
    margin-top: 5px;
  }

  /* select2 dropdowns */
  .login .content .select2-container i {
    display: inline-block;
    position: relative;
    color: #ccc;
    z-index: 1;
    top: 1px;
    margin: 4px 4px 0px -1px;
    width: 16px;
    height: 16px;
    font-size: 16px;
    text-align: center;
  }

  .login .content .has-error .select2-container i {
    color: #b94a48;
  }

  .login .content .select2-container a span {
    font-size: 13px;
  }

  .login .content .select2-container a span img {
    margin-left: 4px;
  }

  /* footer copyright */
  .login .copyright {
    text-align: center;
    margin: 0 auto;
    padding: 10px;
    color: #eee;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    /***
    Login page
    ***/
    .login .logo {
      margin-top: 10px;
    }

    .login .content {
      padding: 30px;
      width: 222px;
    }

    .login .content h3 {
      font-size: 22px;
    }

    .login .checkbox {
      font-size: 13px;
    }
  }
</style>
