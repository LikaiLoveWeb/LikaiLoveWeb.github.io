export default{
  data () {
    return {
      msg: 'Element-ui',
      swiperList:[]
    }
  },
  methods : {
    goPath(){
      console.log(this.$route)
    }
  },
  mounted:function () {
    let swiperList = [
      require('../../assets/swiper-1.jpg'),
      require('../../assets/swiper-2.jpg'),
      require('../../assets/swiper-3.jpg'),
    require('../../assets/swiper-4.jpg')
    ];
    this.swiperList=swiperList;
  }
}
