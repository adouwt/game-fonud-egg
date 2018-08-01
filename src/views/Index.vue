<template>
  <div class="img-bg">
    <div class="mask">
    </div>
    <div class="content" ref="content" :class="{active: itemShow}">
      <div v-for="i in amount" :key="i" :data-class="radanGrid(i, amount)" class="item" ref="ITEM" :style="{height: itemWidth + 'px', width: itemWidth + 'px'}" @click="clickone($event)"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      itemHight: '',
      amount: '',
      gridNumber: '',
      vanishTime: '',
      indicator: 0,
      itemShow: false
    }
  },
  created () {
    this.gridNumber = this.$route.query.gridNumber ? this.$route.query.gridNumber : 10
    this.vanishTime = this.$route.query.vanishTime
    this.getColumn()
    this.continueClickFunction()
  },
  components: {
  },
  methods: {
    getColumn () {
      let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
      let clientWidth = document.documentElement.clientWidth || document.body.clientWidth
      this.itemWidth = clientWidth / this.gridNumber
      this.amount = Math.ceil((clientHeight * clientWidth) / (this.itemWidth * this.itemWidth)) + 5
    },
    clickone (e) {
      var ev = e.currentTarget
      ev.className = 'active'
      setTimeout(() => {
        ev.className = ''
      }, 800)
    },
    radanGrid (i, number) {
      let amountRandom = Math.floor(Math.random(number) * number)
      // console.log(i, amountRandom)
      if (i === amountRandom) {
        return 'continueClick'
      }
    },
    continueClickFunction () {
      let app = document.getElementById('app')
      let that = this
      app.addEventListener('click', function (e) {
        console.log('this.indicator', that.indicator)
        if (e.target.getAttribute('data-class') === 'continueClick') {
          that.indicator++
        }
        if (that.indicator === 6) {
          that.itemShow = true
        }
      })
    }
  }
}
</script>

<style lang="less">
  // @vanishTime: this.$route.query.vanishTime
  .img-bg {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: url(../assets/img/bg.jpg);
    background-size: 100%;
    background-origin: border-box;
    position: relative;
    z-index: 0;
    >div:nth-child(2) {
      position: relative;
      height: 100vh;
      div {
          float: left;
          // height: 30px;
          background: rgba(0, 0, 0, 1);
          transition: opacity 0.3s;
          position: relative;
          z-index: 1;
          &.active {
            animation: bg 1s;
          }
        }
    }
  }
  .content {
    opacity: 1;
    transform: all 2s;
  }
  .content.active {
    opacity: 0;
    >div {
      z-index: -10;
    }
  }
  @keyframes bg {
    from {
      // border-radius: 50%;
      background: rgba(0, 0, 0, 0.5);
    }
    to {
      // border-radius: 0%;
      background: rgba(0, 0, 0, 1);
    }
  }
</style>
