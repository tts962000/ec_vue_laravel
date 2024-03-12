export default {
    methods: {
        async loadData (route) {
          let res = await fetch(`http://localhost:8000/api/${route}`);
          let data = await res.json();
          // console.log(data);
          return data;
        }
      }
}