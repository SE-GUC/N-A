const axios = require('axios');
const functions = {

        add: (x,y) => x+y,


	getpartners: async () => {

        const partners = await axios.get('http://localhost:3000/api/partner/')

        return partners

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
    testupdateFName: async()=>{
        return axios({
            method: 'put',
            url: 'http://localhost:3000/api/partner/FirstName/5c9cc8b3b19333217411d273',
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
        url: 'http://localhost:3000/api/partner/LastName/5c9cc8b3b19333217411d273',
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
        url: 'http://localhost:3000/api/partner/Birthdate/5c9cc8b3b19333217411d273',
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
      url: 'http://localhost:3000/api/partner/Basic_Info/5c9cc8b3b19333217411d273',
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
    url: 'http://localhost:3000/api/partner/password/5c9cc8b3b19333217411d273',
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
    url: 'http://localhost:3000/api/partner/email/5c9cc8b3b19333217411d273',
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
 
  
  },testupdatepastproject: async()=>{
    return axios({
      method: 'put',
      url: 'http://localhost:3000/api/partner/pproject/5c9cfab98528961dd0f9e503',
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
  
   
    },testupdateboardmember: async()=>{
      return axios({
        method: 'put',
        url: 'http://localhost:3000/api/partner/Boardmembers/5c9cfab98528961dd0f9e503',
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
     
      
      },testdeleteproject: async()=>{
        return axios({
          method: 'delete',
          url: 'http://localhost:3000/api/partner/deleteproject/5c9cfb2a8528961dd0f9e504',
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
  
        }
        

};

module.exports = functions;