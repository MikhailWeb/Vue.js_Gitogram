<template>
  <div class="auth-page">
  <div class="content">
    <div class="app-title"><h1>Gitogram /</h1></div>
    <div class="slogan">
        More than just one repository.<br>
        This is our digital world.
    </div>
    <button class="auth-btn" @click="getCode">
       <div class="btn-title">
           Authorize with github
        </div><div class="icon"><icon name="github" /></div>
    </button>
    <div class="image">
      <img src="../../assets/macbook.png" />
    </div>
  </div>
  <div class="footer">
        <div class="subscribe">
          © Gitogram from Loftschool
        </div>
  </div>
  </div>
</template>

<script>
import icon from '../../icons/icon.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    icon
  },
  methods: {
    ...mapActions({
      getCode: 'auth/getAuthCode',
      authUser: 'auth/authUserByCode'
    })
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')

    if (code) {
      try {
        const token = await this.authUser({ code })
        // console.log(token)
        localStorage.setItem('token', token)
        this.$router.replace({ name: 'home' })
        window.location.href = window.location.origin
        return
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped src="./auth.scss"></style>
