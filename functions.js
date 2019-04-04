const axios = require('axios');
const functions =  {
//test for update    
updateFNameadmin: async(z)=>{
  return axios({
      method: 'put',
      url: 'http://localhost:3000/api/admins/' + z,
      headers:{'Content-Type':'application/json'},
      data: {
                FirstName:'Mahmoud'
      }
    })},
  updateLNameadmin:async(z)=>{
    return axios({
        method: 'put',
        url: 'http://localhost:3000/api/admins/' + z,
        headers:{'Content-Type':'application/json'},
        data: {
                  LastName:'seliem'
        }
      })},
      updateemailadmin:async(z)=>{
        return axios({
            method: 'put',
            url: 'http://localhost:3000/api/admins/' + z,
            headers:{'Content-Type':'application/json'},
            data: {
                      email:'random@random.com'
            }
          })},
          updatepaswordadmin:async(z)=>{
            return axios({
                method: 'put',
                url: 'http://localhost:3000/api/admins/' + z,
                headers:{'Content-Type':'application/json'},
                data: {
                          password:'123456789'
                }
              })},
              updatebirthdateadmin:async(z)=>{
                return axios({
                    method: 'put',
                    url: 'http://localhost:3000/api/admins/' + z,
                    headers:{'Content-Type':'application/json'},
                    data: {
                              Birthdate:'1997-09-08'
                    }
                  })},
      //test for delete 
      deleteadmin:async(z)=>{
        return axios({
          method:'delete',
          url:'http://localhost:3000/api/admins/' + z,
          headers:{'Content-Type':'application/json'},
                    data: {
                              
                    }
                  })}
    }
    module.exports = functions