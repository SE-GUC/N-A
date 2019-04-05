
   
   const axios = require('axios');
   const functions =  {
      getCo_working_spaces: async (d) => {
        const co_working_spacess = await axios.get('http://localhost:3000/api/co_working_spaces/'+d)
        return co_working_spacess
        },
       //test for post 
       addCo_working_space: async()=>{
        return axios({
            method: 'post',
            url: 'http://localhost:3000/api/co_working_spaces',
            headers:{'Content-Type':'application/json'},
            data: {
                 Basic_Info:'test',
                 FirstName: 'test',
                 LastName: 'test',
                 password: 'test123',   
                 Birthdate: '5/7/1998',
                 email: 'random@gmail.com',
                 User_Category : 'Partner_CoWorkingSpace'
            }
          })
    } ,
   //test for update    
   updateFNameCo_working_space: async(d)=>{
        return axios({
            method: 'put',
            url: 'http://localhost:3000/api/co_working_spaces/'+d,
            headers:{'Content-Type':'application/json'},
            data: {
                      FirstName:'Mohamad'
            }})}
            ,
            updateLNameCo_working_space: async(d)=>{
      return axios({
        method: 'put',
        url: 'http://localhost:3000/api/co_working_spaces/'+d,
        headers:{'Content-Type':'application/json'},
        data: {
                  LastName:'galal'
        }})},
        updateBirthdateCo_working_space: async(d)=>{
      return axios({
        method: 'put',
        url: 'http://localhost:3000/api/co_working_spaces/'+d,
        headers:{'Content-Type':'application/json'},
        data: {
                  Birthdate:'1997-09-08T00:00:00.000Z'
        }})},
        updatepasswordCo_working_space: async(d)=>{
   return axios({
    method: 'put',
    url: 'http://localhost:3000/api/co_working_spaces/'+d
    ,
    headers:{'Content-Type':'application/json'},
    data: {
      password:'12345'
    }
   })},
   updateemailCo_working_space: async(d)=>{
    return axios({
      method: 'put',
      url: 'http://localhost:3000/api/co_working_spaces/'+d
      ,
      headers:{'Content-Type':'application/json'},
      data: {
        email:'student@gmail'
      }
    })},  
     
   //get Facilites
   getCo_working_spaceFacility: async (d) => {
    const co_working_spacess = await axios.get('http://localhost:3000/api/co_working_spaces/Facilites/'+d)
    return co_working_spacess
    },
    //add Facility
    addCo_working_spaceFacility : async(d)=>{
    return axios({
    method: 'post',
    url: 'http://localhost:3000/api/co_working_spaces/Facilites/'+d,
    headers:{'Content-Type':'application/json'},
    data: {
     Facility:'AAA'
    }
    })
    },
    //delete Facilites
    deleteCo_working_spaceFacility: async(d)=>{
    return axios({
    method: 'delete',
    url: 'http://localhost:3000/api/co_working_spaces/Facilites/'+d,
    headers:{'Content-Type':'application/json'},
    data: {
      Facility :'MMM'
   }
   })
   },
    //update Facilites
    updateCo_working_spaceFacilites: async(d)=>{
      return axios({
      method: 'put',
      url: 'http://localhost:3000/api/co_working_spaces/Facilites/'+d,
      headers:{'Content-Type':'application/json'},
      data: {
      oldvalue:'AAA' ,
      newvalue:'MMM'
      }
      })
      },
   //get Business_Plan_Offered
   getCo_working_spaceBusiness_Plans_Offered: async (d) => {
    const co_working_spacess = await axios.get('http://localhost:3000/api/co_working_spaces/Business_Plans_Offered/'+d)
    return co_working_spacess
    },
    //add Business_Plan_Offered
    addCo_working_spaceBusiness_Plan_Offered: async(d)=>{
    return axios({
    method: 'post',
    url: 'http://localhost:3000/api/co_working_spaces/Business_Plans_Offered/'+d,
    headers:{'Content-Type':'application/json'},
    data: {
      Business_Plan_Offered:'AAA'
    }
    })
    },
    //delete Business_Plan_Offered
    deleteCo_working_spaceBusiness_Plans_Offered: async(d)=>{
        return axios({
        method: 'delete',
        url: 'http://localhost:3000/api/co_working_spaces/Business_Plans_Offered/'+d,
        headers:{'Content-Type':'application/json'},
        data: {
         Business_Plan_Offered:'MMM'
        }
        })
        },
    //update Business_Plan_Offered 
    updateCo_working_spaceBusiness_Plans_Offereds: async(d)=>{
        return axios({
        method: 'put',
        url: 'http://localhost:3000/api/co_working_spaces/Business_Plans_Offered/'+d,
        headers:{'Content-Type':'application/json'},
        data: {
        oldvalue:'AAA' ,
        newvalue:'MMM'
        }
        })
        },
        //test delete 
   deleteCo_working_space: async(d)=>{
     return axios({
       method: 'delete',
       url: 'http://localhost:3000/api/co_working_spaces/'+d ,
       headers:{'Content-Type':'application/json'},
       data: {
       }
     })        
   },
      }
   module.exports = functions
   