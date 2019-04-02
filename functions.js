 
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
    testdeletebmember: async(id)=>{
        return axios({
          method: 'delete',
          url: 'http://localhost:3000/api/partner/deleteboardmem/'+id,
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

      }
    
}
module.exports = functions

