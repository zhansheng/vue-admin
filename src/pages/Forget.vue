<template>
  <div class="login">
    <div class="logo">
      <a href="index.html">
        <img src="../assets/img/logo-big.png" alt=""/> </a>
    </div>
    <div class="content">
      <form class="forget-form" action="index.html" method="post">
        <h3>Forget Password ?</h3>
        <p> Enter your e-mail address below to reset your password. </p>
        <div class="form-group">
          <div class="input-icon">
            <i class="fa fa-envelope"></i>
            <input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="Email"
                   name="email"/></div>
        </div>
        <div class="form-actions">
          <button type="button" id="back-btn" class="btn red btn-outline">Back </button>
          <button type="submit" class="btn green pull-right"> Submit </button>
        </div>
      </form>
    </div>
    <div class="copyright"> 2014 &copy; Metronic - Admin Dashboard Template. </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
  @import '../style/pages/login-4.scss';
</style>
