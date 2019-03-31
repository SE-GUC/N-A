//HTTP Client
const axios = require('axios');

const functions = {
    add: (x,y) => x+y,


    getLocationsid: async ()=>{
        const locations = await axios.get('http://localhost:3000/api/locations/5ca0c551baddba46db7b4006')
        return locations
    },
    getLocationsid2: async (v)=>{
        const locations = await axios.get('http://localhost:3000/api/locations/'+v)
        return locations
    },
    postLocations: async()=>{
        return axios({
            method: 'post',
            url: 'http://localhost:3000/api/locations/',
            headers:{'Content-Type':'application/json'},
            data: {
                name: 'opera',
                country: 'egypt',
                city:'cairo',
                 street: 'mohamedali',  
                 capacity: 12,
            }
        })
    },
    putLocations1: async()=>{
        return axios({
            method: 'put',
            url: 'http://localhost:3000/api/locations/5ca0cd7ebaddba46db7b400c',
            headers:{'Content-Type':'application/json'},
            data: {
                name: 'redbull', 
                 capacity: 2,
            }
        })
    },
    putLocations2: async()=>{
        return axios({
            method: 'put',
            url: 'http://localhost:3000/api/locations/5ca0cd7ebaddba46db7b400c',
            headers:{'Content-Type':'application/json'},
            data: {
                country: 'UnitedKingdom', 
                }
        })
    },
    deleteLocation: async()=>{
        return axios({
          method: 'delete',
          url: 'http://localhost:3000/api/locations/5ca0dc2ebaddba46db7b4018',
          headers:{'Content-Type':'application/json'},
          data: {
            name: 'opera',  
             capacity: 12,
          }
      
          
        }).then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
   
    postReservation: async(v)=>{
        const ur = 'http://localhost:3000/api/locations/reservations/'+v;
        return axios({
            method: 'post',
            url: ur,
            headers:{'Content-Type':'application/json'},
            data: {
                entry:{
                to: "10 am",
                from: "9 am",
                day: "Monday",
                ownerID: "mado"}
            }
        })
    },
    putReview: async(v)=>{
        const ur = 'http://localhost:3000/api/locations/review/'+v;
        return axios({
            method: 'put',
            url: ur,
            headers:{'Content-Type':'application/json'},
            data: {
                entry:{
                to: "10 am",
                from: "9 am",
                day: "Monday",
                status: 1,
                ownerID: "mado"}
            }
        })
    }
}
module.exports = functions