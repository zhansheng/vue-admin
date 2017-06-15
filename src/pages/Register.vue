<template>
  <div class="login">
    <div class="logo">
      <a href="index.html">
        <img src="../assets/img/logo-big.png" alt=""/> </a>
    </div>
    <div class="content">
      <form class="register-form">
        <h3>Sign Up</h3>
        <alert type="danger" dismissable :value="hasError" @input="close">
          {{errorMsg ? errorMsg : ''}}
        </alert>
        <bs-input name="fullname"
                  :error="$t('register.fullname.error')"
                  :help="$t('register.fullname.help')"
                  :minlength="helper.fullname.minLength"
                  :placeholder="$t('register.fullname.placeholder')"
                  :required="helper.fullname.required"
                  :hide-help="unified.hideHelp"
                  :clear-button="unified.clearButton"
                  v-model="fullname"
                  :withIcon="true"
        >
          <i slot="before" class="fa fa-envelope"></i>
        </bs-input>

        <!--<div class="form-group">
          <label class="control-label visible-ie8 visible-ie9">Full Name</label>
          <div class="input-icon">
            <i class="fa fa-font"></i>
            <input class="form-control placeholder-no-fix" type="text" placeholder="Full Name" v-model="fullname"/>
          </div>
        </div>-->
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
          <button id="register-back-btn" type="button" class="btn red btn-outline"> Back </button>
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
  import bsInput from '@/components/vuestrap/Input.vue'
  require('../i18n/vue-strap-lang.js')

  export default {
    components: {alert, bsInput},
    name: 'Login',
    data: function () {
      return {
        unified: {
          hideHelp: true,
          clearButton: true
        },
        helper: {
          fullname: {
            required: true,
            minLength: 2
          }
        },
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
      preregister: function () {
        if (_.isEmpty(this.fullname)) {
          this.hasError = true;
          this.errorMsg = 'please input your fullname';
        }
        else if (_.isEmpty(this.email)) {
          this.hasError = true;
          this.errorMsg = 'please input your email';
        }
        else if (_.isEmpty(this.username)) {
          this.hasError = true;
          this.errorMsg = 'please input your username';
        }
        else if (_.isEmpty(this.password)) {
          this.hasError = true;
          this.errorMsg = 'please input your password';
        }
        else if (_.isEmpty(this.rpassword)) {
          this.hasError = true;
          this.errorMsg = 'please repeat your password';
        }
        else if (!_.isEqual(this.password, this.rpassword)) {
          this.hasError = true;
          this.errorMsg = 'your password is not equal';
        }
        else {
          this.hasError = true;
          this.errorMsg = 'look ok';
        }
      },
      close(val){
        if (!val) {
          this.hasError = false;
        }
      },
      mask (value) {
        return value.toLowerCase().replace(/^[^a-z]+/, '').replace(/[^a-z0-9]/g, '')
      }
    }
  }
</script>

<style lang="scss">
  @import '../style/pages/login-4.scss';
</style>
