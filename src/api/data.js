export default {
    methods: {
        async loadData (route) {
          let res = await fetch(`http://localhost:8000/api/${route}`);
          //  let res = await fetch(route);
          let resData = await res.json();
          // if(resData.con==true){
          //   return resData.data;
          // }else{
          //   return []
          // }
         return resData.data;
          
          // // console.log(data);
          
          
        },

        
      }
}