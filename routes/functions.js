const axios = require('axios');
const functions = {

        add: (x,y) => x+y,


	getAdmins: async () => {

        const Admins = await axios.get('http://localhost:3000/api/admins')

        return Admins

        },
        
    testaddAdmin : async()=>{
        return axios({
            method: 'post',
            url: 'http://localhost:3000/api/admins',
            headers:{'Content-Type':'application/json'},
            data: {
                FirstName: 'ahmed',
                LastName: 'yassin',
                password: 'rana23',   
                Birthdate: '10/10/1985',
                email: 'yassin@gmail.com',
                User_Category : 'Admin'
            }
          })
        
    },
    testupdateFName: async()=>{
        return axios({
            method: 'put',
            url: 'http://localhost:3000/api/admins/5ca11ef8462d4164881a7861',
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
        url: 'http://localhost:3000/api/admins/5ca11ef8462d4164881a7861',
        headers:{'Content-Type':'application/json'},
        data: {
           
                  LastName:'Malone'
          
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
        url: 'http://localhost:3000/api/admins/5ca11ef8462d4164881a7861',
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
  },testupdatepassword: async()=>{
  return axios({
    method: 'put',
    url: 'http://localhost:3000/api/admins/5ca11ef8462d4164881a7861',
    headers:{'Content-Type':'application/json'},
    data: {
       
      password:'g63sclasse'
      
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
    url: 'http://localhost:3000/api/admins/5ca11ef8462d4164881a7861',
    headers:{'Content-Type':'application/json'},
    data: {
       
      email:'anything@gmail.com'
      
    }

    
  }).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
 
  
},/*testdeletebmember: async()=>{
          return axios({
            method: 'delete',
            url: 'http://localhost:3000/api/admins/5ca11ef8462d4164881a7861',
            headers:{'Content-Type':'application/json'},
            data: {
               
              BoardMembers:'Galal Gella'
              
            }
        
            
          }).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
  
        }*/
        

};

module.exports = functions;