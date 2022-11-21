new Vue({
    el:"#app",
    data:{
      formData: {
        firstName: '',
        lastName:''
      }

  },
  methods: {
    update(name) {
        this.name = name;
    },
    getCoord(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    handleForm() {
      console.log(this.formData);
    },
    }
});