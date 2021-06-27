const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  computed: {
    fullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Shum";
    },
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },
  methods: {
    // confirmInput() {
    //   this.confirmedName = this.name;
    // // },
    submitForm() {
      alert("Submitted!");
    },
    resetInput() {
      this.name = "";
    },
    setName(e, lastName) {
      this.name = e.target.value;
    },
    add(number) {
      this.counter = this.counter + number;
    },
    minus(number) {
      this.counter = this.counter - number;
    },
  },
});

app.mount("#events");
