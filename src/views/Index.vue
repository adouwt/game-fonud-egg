<template>
  <div class="img-bg">
    <div class="mask">
    </div>
    <div class="content" ref="content" :class="{active: itemShow}">
      <div v-for="i in amount" :key="i" :data-class="judgeEqual(i)" class="item" ref="ITEM" :style="{height: itemWidth + 'px', width: itemWidth + 'px'}" @click="clickone($event)"></div>
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
      itemShow: false,
      randomNumber: ''
    }
  },
  created () {
    this.gridNumber = this.$route.query.gridNumber ? this.$route.query.gridNumber : 10
    this.vanishTime = this.$route.query.vanishTime ? this.$route.query.vanishTime : 600
    this.getColumn()
    this.continueClickFunction()
    this.radanGrid(this.amount)
  },
  components: {
  },
  methods: {
    getColumn () {
      let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
      let clientWidth = document.documentElement.clientWidth || document.body.clientWidth
      this.itemWidth = clientWidth / this.gridNumber
      this.amount = Math.ceil((clientHeight * clientWidth) / (this.itemWidth * this.itemWidth)) + 2 // 不能完整平均好 2 是预留量
    },
    clickone (e) {
      var ev = e.currentTarget
      ev.style.animation = 'bg ' + this.vanishTime / 1000 + 's'
      setTimeout(() => {
        ev.style.animation = ''
      }, this.vanishTime)
    },
    judgeEqual (i) {
      console.log(i, this.randomNumber)
      if (i === this.randomNumber) {
        return 'continueClick'
      }
    },
    radanGrid (number) {
      this.randomNumber = Math.floor(Math.random(number) * number) + 1 - 2 // 1 - amount  减去预留量2·
      return this.randomNumber
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
        }
    }
  }
  .content {
    opacity: 1;
    transition: all 2s;
  }
  .content.active {
    opacity: 0;
    height: 0;
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
