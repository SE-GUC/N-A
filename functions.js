 
const axios = require('axios');
const functions = {

        add: (x,y) => x+y,
        getProject: async () => {
          const Project = await axios.get('http://localhost:3000/api/projects/')
          return Project
          },
          getProjectID: async (id) => {
              const Project = await axios.get('http://localhost:3000/api/projects/'+id)
              return Project
              },
          InsertProject:async()=>{
           return   axios.post('http://localhost:3000/api/projects/', {
                  name: 'jtest1',
                  descreption:'jtest1jtest1jtest1jtest1jtest1jtest1jtest1jtest1jtest1jtest1jtest1jtest1',
                  Payment_Type:'Online',
                  partner_id:'1',
                  need_Consultancy:'false',
                  main_skill:'tester'
              })
          },
          updateName:async()=>{
              return  await axios.put('http://localhost:3000/api/projects/name/5ca0305c5bb45716a83a51b5', {
                 "name": 'jtestupname'
                     
                 })
             },
          updatestatus:async()=>{
              return  await axios.put('http://localhost:3000/api/projects/status/5ca0305c5bb45716a83a51b5', {
                     status: 'Review',
                     
                 })
             },
          updateapproved:async()=>{
              return  await axios.put('http://localhost:3000/api/projects/approved/5ca0305c5bb45716a83a51b5', {
                     approved: 'true',
                     
                 })
             },
          updateExpected_Duration:async()=>{
              return  await axios.put('http://localhost:3000/api/projects/Expected_Duration/5ca0305c5bb45716a83a51b5', {
                  Expected_Duration: '24hours',
                     
                 })
             },
          updateexp_level:async()=>{
              return  await axios.put('http://localhost:3000/api/projects/exp_level/5ca0305c5bb45716a83a51b5', {
                  least_exp_level_needed: 'expert',
                     
                 })
             },
      
          updatecomitment_level:async()=>{
              return  await axios.put('http://localhost:3000/api/projects/comitment_level/5ca0305c5bb45716a83a51b5', {
                  comitment_level_needed: '5 days a week',
                     
                 })
             },
          updateprice:async()=>{
              return  await axios.put('http://localhost:3000/api/projects/price/5ca0305c5bb45716a83a51b5', {
                  price: 500,
                     
                 })
             },  
          updatePaymentType:async()=>{
              return  await axios.put('http://localhost:3000/api/projects/PaymentType/5ca0305c5bb45716a83a51b5', {
                  Payment_Type: 'Other',
                     
                 })
             },
          updateconsultancy_agency_id:async()=>{
              return  await axios.put('http://localhost:3000/api/projects/consultancy_agency_id/5ca0305c5bb45716a83a51b5', {
                  consultancy_agency_id: '4',
                     
                 })
             },
          updateneed_Consultancy:async()=>{
              return  await axios.put('http://localhost:3000/api/projects/need_Consultancy/5ca0305c5bb45716a83a51b5', {
                  need_Consultancy: 'true',
                     
                 })
             },        
          updateMembersNeeded:async()=>{
              return  await axios.put('http://localhost:3000/api/projects/MembersNeeded/5ca0305c5bb45716a83a51b5', {
                  members_needed: 999,
                     
                 })
             },
      
          updatemain_skill:async()=>{
              return  await axios.put('http://localhost:3000/api/projects/main_skill/5ca0305c5bb45716a83a51b5', {
                  main_skill: 'computer nerd',
                     
                 })
             },
          delete_project:async(idx)=>{
             
             
              return  await axios.delete('http://localhost:3000/api/projects/'+idx)  
              
          },
          Addskill:async()=>{
              return  await axios.put('http://localhost:3000/api/projects/addSkill/5ca0305c5bb45716a83a51b5', {
                  Skill: 'jtestaddskill',
                     
                 })
             },
          Addattrib:async()=>{
              return  await axios.put('http://localhost:3000/api/projects/addattrib/5ca0305c5bb45716a83a51b5', {
                  attribute: 'attributejtest',
                     
                 })
             },
          DELskill:async()=>{
              return  await axios.delete('http://localhost:3000/api/projects/delskill/5ca0305c5bb45716a83a51b5',{
              data:{
              Skill: 'jtestaddskill'
              }      
                 })
             },
          DELattrib:async()=>{
              return  await axios.delete('http://localhost:3000/api/projects/delattrib/5ca0305c5bb45716a83a51b5', {
              data:{   
              attribute: 'attributejtest',
              }     
                 })
             },
          notyet:async()=>{
              const Project = await axios.get('http://localhost:3000/api/projects/approved/notyet')
              return Project
          },
          Approved:async()=>{
              const Project = await axios.get('http://localhost:3000/api/projects/approved/Yes')
              return Project
          },
          DissApproves:async()=>{
              const Project = await axios.get('http://localhost:3000/api/projects/approved/No')
              return Project
          },
          Apply:async()=>{
              return await axios.put('http://localhost:3000/api/projects/apply/5ca0305c5bb45716a83a51b5',{
                  
                      memberid:"jtestmemberid"
               })
          },
          Assign:async()=>{
              return  await axios.put('http://localhost:3000/api/projects/assign/5ca0305c5bb45716a83a51b5',{
                  
                  memberid:"jtestmemberid"
               })
          },
          NeedCon:async()=>{
            return await axios.get('http://localhost:3000/api/projects/Consultancy/needed')
          },
          Pending:async()=>{
              return  await axios.get('http://localhost:3000/api/projects/Pending/member')
          },
          Avalible:async()=>{
              return  await axios.get('http://localhost:3000/api/projects/View/Avalible')
          },
          Certified:async()=>{
              return  await axios.post('http://localhost:3000/api/projects/certified/5c95271ff92aa8054c9a00dd',{
                  
                      id:"5c9fea1562abd31b80a766c7"
                  
              })
          },

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
        });
      },
    add: (x,y) => x+y,

// Locationssss
getLocations: async ()=>{
  const locations = await axios.get('http://localhost:3000/api/locations/')
  return locations
},
    getLocationsid: async (v)=>{
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
    putLocations: async(v)=>{
        return axios({
            method: 'put',
            url: 'http://localhost:3000/api/locations/'+v,
            headers:{'Content-Type':'application/json'},
            data: {
              name: 'zoo',
              country: 'UK',
              city:'londo',
               street: 'londonstreet',  
               capacity: 2,
            }
        })
    },
    deleteLocation: async(v)=>{
        return axios({
          method: 'delete',
          url: 'http://localhost:3000/api/locations/'+v,
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

