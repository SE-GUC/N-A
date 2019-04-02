 
const axios = require('axios');
const functions = {

        add: (x,y) => x+y,


	getpartners: async () => {

        const partners = await axios.get('http://localhost:3000/api/partner/')

        return partners

        },
        getpartner: async (id) => {

          const partner = await axios.get('http://localhost:3000/api/partner/'+id)
  
          return partner
  
          },
        
    testaddpartner : async()=>{
        return axios({
            method: 'post',
            url: 'http://localhost:3000/api/partner/addpartner',
            headers:{'Content-Type':'application/json'},
            data: {
                FirstName: 'ahmed',
                LastName: 'yassin',
                Basic_Info:'web configuration and innovation ',
                 password: 'rana23',   
                 Birthdate: '1/1/2001',
                 email: 'yassin@gmail.com',
                User_Category : 'Partner'
            }
          })
        
    },
    testupdateFName: async(id)=>{
        return axios({
            method: 'put',
            url: 'http://localhost:3000/api/partner/FirstName/'+id
            ,
            headers:{'Content-Type':'application/json'},
            data: {
               
                      FirstName:'seifo'
              
            }

            
          }).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    testupdateLName: async(id)=>{
      return axios({
        method: 'put',
        url: 'http://localhost:3000/api/partner/LastName/'+id,
        headers:{'Content-Type':'application/json'},
        data: {
           
                  LastName:'kholy'
          
        }

        
      }).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    testupdateBirthdate: async(id)=>{
      return axios({
        method: 'put',
        url: 'http://localhost:3000/api/partner/Birthdate/'+id,
        headers:{'Content-Type':'application/json'},
        data: {
           
                  Birthdate:'1997-09-08T00:00:00.000Z'
          
        }

        
      }).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      
  },  testdeletepartner: async(id)=>{
    return axios({
      method: 'delete',
      url: 'http://localhost:3000/api/partner/deletepart/'+id,
      headers:{'Content-Type':'application/json'},
      

      
    }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  ,testupdateBasic_Info: async(id)=>{
    return axios({
      method: 'put',
      url: 'http://localhost:3000/api/partner/Basic_Info/'+id,
      headers:{'Content-Type':'application/json'},
      data: {
         
        Basic_Info:'media engineering and technology'
        
      }

      
    }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
    
},testupdatepassword: async(id)=>{
  return axios({
    method: 'put',
    url: 'http://localhost:3000/api/partner/password/'+id,
    headers:{'Content-Type':'application/json'},
    data: {
       
      password:'udntknwmyp'
      
    }

    
  }).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  
  
},testupdatemail: async(id)=>{
  return axios({
    method: 'put',
    url: 'http://localhost:3000/api/partner/email/'+id,
    headers:{'Content-Type':'application/json'},
    data: {
       
      email:'random@gmail.com'
      
    }

    
  }).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
 
  
  },testupdatepastproject: async(id)=>{
    return axios({
      method: 'put',
      url: 'http://localhost:3000/api/partner/pproject/'+id,
      headers:{'Content-Type':'application/json'},
      data: {
         
        pproject:'Hilton Hotel'
        
      }
  
      
    }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  
   
    },testupdateboardmember: async(id)=>{
      return axios({
        method: 'put',
        url: 'http://localhost:3000/api/partner/Boardmembers/'+id,
        headers:{'Content-Type':'application/json'},
        data: {
           
          BoardMembers:'ahmed yassin'
          
        }
    
        
      }).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
     
      
      },testdeleteproject: async(id)=>{
        return axios({
          method: 'delete',
          url: 'http://localhost:3000/api/partner/deleteproject/'+id,
          headers:{'Content-Type':'application/json'},
          data: {
             
            pproject:'Hilton Hotel'
            
          }
        });
      },
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
 
       
        
        },testdeletebmember: async()=>{
          return axios({
            method: 'delete',
            url: 'http://localhost:3000/api/partner/deleteboardmem/5c9cfb2a8528961dd0f9e504',
            headers:{'Content-Type':'application/json'},
            data: {
               
              BoardMembers:'ahmed yassin'
              
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

