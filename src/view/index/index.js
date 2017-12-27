export default{
  data () {
    return {
      msg: 'Welcome to Your Vue.js index'
    }
  },
  methods : {
    goPath(){
      console.log(this.$route)
    }
  }
}
