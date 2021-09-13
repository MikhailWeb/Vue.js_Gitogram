<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="title"><h1>Gitogram</h1></div>
        <div class="icons-block">
          <div class="icon">
            <router-link to="/"><icon name='close' /></router-link>
          </div>
        </div>
      </template>
      <template #content>
        <div class="stories">
          <Splide :options="options" @splide:mounted="onMounted" @splide:moved="loadReadme" ref="primary">
            <splide-slide v-for="(trending, index) in trendings" :key="trending.id" ref="item">
                <div class="slide-item" id="slide">
                    <slider
                    :data="getStoryData(trending)"
                    :active="SlideNdx === index"
                    :loading="(SlideNdx === index) && loading"
                    @onFinishProgress="goSlide(index + 1)"
                    @onFollow="starRepo"
                    @onUnfollow="unStarRepo"
                    />
                </div>
            </splide-slide>
          </Splide>
        </div>
      </template>
    </topline>
  </div>
</template>

<script>
import { topline } from '../../components/topline/'
import icon from '../../icons/icon.vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { slider } from '../../components/slider/'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Stories',
  components: {
    topline,
    icon,
    slider,
    Splide,
    SplideSlide
  },
  data () {
    return {
      SlideNdx: 0,
      loading: false,
      currentPage: 0,
      options: {
        rewind: false,
        perPage: 3,
        updateOnMove: true,
        pagination: false,
        focus: 'center',
        trimSpace: false,
        fixedWidth: 375,
        fixedHeight: 667
      }
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.data
    })
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchReadme: 'trendings/fetchReadme',
      starRepo: 'trendings/starRepo',
      unStarRepo: 'trendings/unStarRepo'
    }),
    async fetchReadmeCurPage () {
      if (this.SlideNdx >= this.trendings.length) {
        return false
      }
      const { id, owner, name } = this.trendings[this.SlideNdx]
      await this.fetchReadme({ id, owner: owner.login, repo: name })
    },
    getStoryData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme,
        following: obj.following
      }
    },
    async loadReadme (splide) {
      this.SlideNdx = splide.index
      this.loading = true
      try {
        await this.fetchReadmeCurPage()
      } catch (error) {
        console.log(error)
        throw error
      } finally {
        this.loading = false
      }
    },
    async goSlide (ndx) {
      const { primary } = this.$refs
      if ((ndx < 0) || (ndx > this.trendings.length)) {
        return false
      }
      await this.$nextTick(() => {
        primary.go(ndx)
        this.SlideNdx = ndx
      })
    },
    async onMounted (splide) {
      await this.fetchTrendings()
      if (this.$route.params.initSlide) {
        const index = this.trendings.findIndex(item => item.id === Number(this.$route.params.initSlide))
        this.SlideNdx = index
        await this.$nextTick(() => {
          splide.go(index)
        })
      } else {
        await this.loadReadme()
      }
    }
  }
}
</script>

<style lang="scss" scoped src="./stories.scss"></style>
