const axios = require('axios');
const functions = {

      add: (x,y) => x+y,


	getconsultancyAgenciess: async () => {

        const consultancyAgencies = await axios.get('http://localhost:3000/api/consultancyAgencies')

        return consultancyAgencies

        },
        
    testaddconsultancyAgencies : async()=>{
        return axios({
            method: 'post',
            url: 'http://localhost:3000/api/consultancyAgencies',
            headers:{'Content-Type':'application/json'},
            data: {
                FirstName: 'ahmed',
                LastName: 'yassin',
                Basic_Info:'web configuration and innovation ',
                 password: 'rana23',   
                 Birthdate: '2001-3-3',
                 email: 'yassin@gmail.com',
                User_Category : 'Consulting_Agent'
            }
          })
        
    },
    testupdateFName: async()=>{
        return axios({
            method: 'put',
            url: 'http://localhost:3000/api/consultancyAgencies/5ca11e6eb78ab03250aff870',
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
    testupdateLName: async()=>{
      return axios({
        method: 'put',
        url: 'http://localhost:3000/api/consultancyAgencies/5ca11e6eb78ab03250aff870',
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
    testupdateBirthdate: async()=>{
      return axios({
        method: 'put',
        url: 'http://localhost:3000/api/consultancyAgencies/5ca11e6eb78ab03250aff870',
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
  },testupdateBasic_Info: async()=>{
    return axios({
      method: 'put',
      url: 'http://localhost:3000/api/consultancyAgencies/5ca11e6eb78ab03250aff870',
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
    
    
},testupdatepassword: async()=>{
  return axios({
    method: 'put',
    url: 'http://localhost:3000/api/consultancyAgencies/5ca11e6eb78ab03250aff870',
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
  
  
},testupdatemail: async()=>{
  return axios({
    method: 'put',
    url: 'http://localhost:3000/api/consultancyAgencies/5ca11e6eb78ab03250aff870',
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
 
  
},

  //test delete 
  deleteconsultancyAgencies: async()=>{
    return axios({
      method: 'delete',
      url: 'http://localhost:3000/api/consultancyAgencies/5ca11e6eb78ab03250aff871',
      headers:{'Content-Type':'application/json'},
      data: {
      }
    })
},

//get BoardMembers
getconsultancyAgenciesBoardMembers: async () => {
const consultancyAgencies = await axios.get('http://localhost:3000/api/consultancyAgencies/BoardMembers/5ca11e6eb78ab03250aff870')
return consultancyAgencies
},
//add interest
addconsultancyAgenciesBoardMember : async()=>{
return axios({
method: 'post',
url: 'http://localhost:3000/api/consultancyAgencies/BoardMembers/5ca11e6eb78ab03250aff870',
headers:{'Content-Type':'application/json'},
data: {
    BoardMembers:'AAA'
}
})
},
//delete BoardMembers
deleteconsultancyAgenciesBoardMember: async()=>{
return axios({
method: 'delete',
url: 'http://localhost:3000/api/consultancyAgencies/BoardMembers/5ca11e6eb78ab03250aff870',
headers:{'Content-Type':'application/json'},
data: {
    BoardMembers:'MMM'
}
})
},
//update consultancyAgencies
updateconsultancyAgenciesBoardMembers: async()=>{
return axios({
method: 'put',
url: 'http://localhost:3000/api/consultancyAgencies/BoardMembers/5ca11e6eb78ab03250aff870',
headers:{'Content-Type':'application/json'},
data: {
oldvalue:'AAA' ,
newvalue:'MMM'
}
})
},
 
//get Past_Events
getconsultancyAgenciesPast_Events: async () => {
    const consultancyAgencies = await axios.get('http://localhost:3000/api/consultancyAgencies/Past_Events/5ca11e6eb78ab03250aff870')
    return consultancyAgencies
    },
    //add interest
    addconsultancyAgenciesPast_Events : async()=>{
    return axios({
    method: 'post',
    url: 'http://localhost:3000/api/consultancyAgencies/Past_Events/5ca11e6eb78ab03250aff870',
    headers:{'Content-Type':'application/json'},
    data: {
        BoardMembers:'AAA'
    }
    })
    },
    //delete BoardMembers
    deleteconsultancyAgenciesPast_Events: async()=>{
    return axios({
    method: 'delete',
    url: 'http://localhost:3000/api/consultancyAgencies/Past_Events/5ca11e6eb78ab03250aff870',
    headers:{'Content-Type':'application/json'},
    data: {
        Past_Events:'MMM'
    }
    })
    },
    //update consultancyAgencies
    updateconsultancyAgenciesPast_Events: async()=>{
    return axios({
    method: 'put',
    url: 'http://localhost:3000/api/consultancyAgencies/Past_Events/5ca11e6eb78ab03250aff870',
    headers:{'Content-Type':'application/json'},
    data: {
    oldvalue:'AAA' ,
    newvalue:'MMM'
    }
    })
    }
     

};

module.exports = functions;