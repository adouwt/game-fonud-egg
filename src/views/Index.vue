<template>
  <div class="img-bg">
    <div class="content">
      <table class="" ref="content" :class="{active: itemShow}">
        <tr v-for="i in 5" :key="i">
          <td v-for="j in 6" :key="j" :data-class="judgeEqual(i, j)" @click="clickone($event)" class="item"> 
            space
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      gridTr: '',
      gridTd: '',
      vanishTime: '',
      indicator: 0,
      itemShow: false,
      randomTr: '',
      randomTd: '',
      option: {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 30000
      }
    }
  },
  created () {
    this.gridTd = this.$route.query.gridTd ? this.$route.query.gridTd : 10
    this.gridTr = this.$route.query.gridTr ? this.$route.query.gridTr : 10
    this.vanishTime = this.$route.query.vanishTime ? this.$route.query.vanishTime : 600
    this.continueClickFunction()
    this.radanGrid(this.gridTd, this.gridTr)
    // this.getCurrentPosition()
  },
  components: {
  },
  methods: {
    clickone (e) {
      var ev = e.currentTarget
      ev.style.animation = 'bg ' + this.vanishTime / 1000 + 's'
      setTimeout(() => {
        ev.style.animation = ''
      }, this.vanishTime)
    },
    radanGrid (tr, td) {
      this.randomTr = Math.ceil(Math.random(tr) * tr)
      this.randomTd = Math.ceil(Math.random(td) * td)
      console.log(this.randomTr, this.randomTd)
    },
    judgeEqual (i, j) {
      if (i === this.randomTr && j === this.randomTd) {
        return 'continueClick'
      }
    },
    continueClickFunction () {
      let app = document.getElementById('app')
      let that = this
      app.addEventListener('click', function (e) {
        console.log('this.indicator', that.indicator)
        e.stopPropagation;
        e.preventDefault;
        if (e.target.getAttribute('data-class') === 'continueClick') {
          that.indicator++
        }
        if (that.indicator === 6) {
          that.itemShow = true
        }
      })
    },
    getCurrentPosition () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition, this.showError, this.option)
      }
    },
    showPosition (position) {
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      let speed = position.coords.speed
      alert(`纬度${lat}，经度${lon}，${speed }`)
    },
    showError (error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          alert('您拒绝了地理定位服务')
          break
        case error.POSITION_UNAVAILABLE:
          alert('无法获取您的位置')
          break
        case error.TIMEOUT:
          alert('超时')
          break
      }
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
  }
  .content {
    table {
      width: 100vw;
      height: 100vh;
      border-collapse: collapse;
      .item {
        background: #000;
      }
    }
  } 
  table.active {
    .item {
      background: transparent;
      // transition: opacity 0.3s;
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
