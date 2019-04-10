const axios = require('axios');
const functions =  {
  getadmins: async (z) => {
    const Candidates = await axios.get('http://localhost:3000/api/admins/' + z)
    return Candidates
    },
   //test for post 
  addadmin: async()=>{
    return axios({
        method: 'post',
        url: 'http://localhost:3000/api/admins',
        headers:{'Content-Type':'application/json'},
        data: {
             FirstName: 'ahmed',
             LastName: 'yassin',
             password: 'rana23',   
             Birthdate: '1/1/2001',
             email: 'yassin@gmail.com',
             User_Category : 'Admin'
        }
      })
  },
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
                  })},

   //   add: (x,y) => x+y,


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
testupdateFNameconsultancyAgency: async()=>{
    return axios({
        method: 'put',
        url: 'http://localhost:3000/api/consultancyAgencies/5ca11e6eb78ab03250aff870',
        headers:{'Content-Type':'application/json'},
        data: {
           
                  FirstName:'seifo'
          
        },
        
    testaddconsultancyAgencies : async()=>{
        return axios({
            method: 'post',
            url: 'http://localhost:3000/api/consultancyAgencies',
        })},
        add: (x,y) => x+y,
      }).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
},
testupdateLNameconsultancyAgency: async()=>{
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
testupdateBirthdateconsultancyAgency: async()=>{
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
},testupdateBasic_InfoconsultancyAgency: async()=>{
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


},testupdatepasswordconsultancyAgency: async()=>{
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


},testupdatemailconsultancyAgency: async()=>{
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
},
          
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
                  description:'jtest1jtest1jtest1jtest1jtest1jtest1jtest1jtest1jtest1jtest1jtest1jtest1',
                  Payment_Type:'Online',
                  partner_id:'1',
                  need_Consultancy:true,
                  main_skill:'testskill'
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
                  main_skill: 'testskill',
                     
                 })
             },
          delete_project:async(idx)=>{
             
             
              return  await axios.delete('http://localhost:3000/api/projects/'+idx)  
              
          },
          Addskill:async()=>{
              return  await axios.put('http://localhost:3000/api/projects/addSkill/5ca0305c5bb45716a83a51b5', {
                  Skill: 'testskill',
                     
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
     
  
  
  ,testupdatepastproject: async()=>{
 
  
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
getLocations: async ()=>{
  const locations = await axios.get('http://localhost:3000/api/locations/')
  return locations
},
    getLocationsid: async (v)=>{
        const locations = await axios.get('http://localhost:3000/api/locations/'+v)
        return locations
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
    },


// test for candidate
    //test for get
	getCandidates: async (c) => {
        const Candidates = await axios.get('http://localhost:3000/api/Candidates/'+c)
        return Candidates
        },
       //test for post 
    addCandidate: async()=>{
        return axios({
            method: 'post',
            url: 'http://localhost:3000/api/Candidates',
            headers:{'Content-Type':'application/json'},
            data: {
                 FirstName: 'test',
                 LastName: 'test',
                 password: 'test123',   
                 Birthdate: '5/5/1998',
                 email: 'random@gmail.com',
                 User_Category : 'Member'
            }
          })
    } ,
//test for update    
    updateFNameCandidate: async(c)=>{
        return axios({
            method: 'put',
            url: 'http://localhost:3000/api/Candidates/'+c,
            headers:{'Content-Type':'application/json'},
            data: {
                      FirstName:'Mahmoud'
            }})}
            ,
    updateLNameCandidate: async(c)=>{
      return axios({
        method: 'put',
        url: 'http://localhost:3000/api/Candidates/'+c,
        headers:{'Content-Type':'application/json'},
        data: {
                  LastName:'Nabil'
        }})},
    updateBirthdateCandidate: async(c)=>{
      return axios({
        method: 'put',
        url: 'http://localhost:3000/api/Candidates/'+c,
        headers:{'Content-Type':'application/json'},
        data: {
                  Birthdate:'1997-09-08T00:00:00.000Z'
        }})},
  updatepasswordCandidate: async(c)=>{
  return axios({
    method: 'put',
    url: 'http://localhost:3000/api/Candidates/'+c
    ,
    headers:{'Content-Type':'application/json'},
    data: {
      password:'123456789'
    }
  })},
  updateemailCandidate: async(c)=>{
    return axios({
      method: 'put',
      url: 'http://localhost:3000/api/Candidates/'+c
      ,
      headers:{'Content-Type':'application/json'},
      data: {
        email:'mahmoud@gmail'
      }
    })},  
  //test delete 
  deletecandidate: async(c)=>{
          return axios({
            method: 'delete',
            url: 'http://localhost:3000/api/Candidates/'+c ,
            headers:{'Content-Type':'application/json'},
            data: {
            }
          })        
  },
        
//get interessts
    getCandidateinterests: async (c) => {
    const Candidates = await axios.get('http://localhost:3000/api/Candidates/interests/'+c)
    return Candidates
    },
    //add interest
    addCandidateinterest : async(c)=>{
    return axios({
    method: 'post',
    url: 'http://localhost:3000/api/Candidates/interests/'+c,
    headers:{'Content-Type':'application/json'},
    data: {
        Interest:'AAA'
    }
    })
    },
    //delete interests
    deletecandidateinterests: async(c)=>{
    return axios({
    method: 'delete',
    url: 'http://localhost:3000/api/Candidates/interests/'+c,
    headers:{'Content-Type':'application/json'},
    data: {
      Interest :'MMM'
    }
  })
},
    //update interests
    updatecandidateinterestss: async(c)=>{
      return axios({
      method: 'put',
      url: 'http://localhost:3000/api/Candidates/interests/'+c,
      headers:{'Content-Type':'application/json'},
      data: {
      oldvalue:'AAA' ,
      newvalue:'MMM'
      }
      })
      },
  //get project
    getCandidateproject: async (c) => {
    const Candidates = await axios.get('http://localhost:3000/api/Candidates/projects/'+c)
    return Candidates
    },
    //add project
    addCandidateproject : async(c)=>{
    return axios({
    method: 'post',
    url: 'http://localhost:3000/api/Candidates/projects/'+c,
    headers:{'Content-Type':'application/json'},
    data: {
      Past_Projects:'AAA'
    }
    })
    },
    //delete project
    deletecandidateproject: async(c)=>{
        return axios({
        method: 'delete',
        url: 'http://localhost:3000/api/Candidates/projects/'+c,
        headers:{'Content-Type':'application/json'},
        data: {
          Past_Projects:'MMM'
        }
        })
        },
    //update project 
    updatecandidateprojects: async(c)=>{
        return axios({
        method: 'put',
        url: 'http://localhost:3000/api/Candidates/projects/'+c,
        headers:{'Content-Type':'application/json'},
        data: {
        oldvalue:'AAA' ,
        newvalue:'MMM'
        }
        })
        },
    //get certificate
    getCandidatecertificates: async (c) => {
    const Candidates = await axios.get('http://localhost:3000/api/Candidates/Certificates/'+c)
    return Candidates
    },
    //add certificate
    addCandidatecertificate : async(c)=>{
    return axios({
    method: 'post',
    url: 'http://localhost:3000/api/Candidates/Certificates/'+c,
    headers:{'Content-Type':'application/json'},
    data: {
      Certificates:'AAA'
    }
    })
    },
    //delete certificate
    deletecandidatecertificate: async(c)=>{
        return axios({
        method: 'delete',
        url: 'http://localhost:3000/api/Candidates/Certificates/'+c,
        headers:{'Content-Type':'application/json'},
        data: {
          Certificates:'MMM'
        }
        })
        },
    //update certificate
    updatecandidatecertificates: async(c)=>{
        return axios({
        method: 'put',
        url: 'http://localhost:3000/api/Candidates/Certificates/'+c,
        headers:{'Content-Type':'application/json'},
        data: {
        oldvalue:'AAA' ,
        newvalue:'MMM'
        }
        })
        },
    //get skills
    getCandidateskills: async (c) => {
    const Candidates = await axios.get('http://localhost:3000/api/Candidates/Skills/'+c)
    return Candidates
    },
    //add skills
    addCandidateskills : async(c)=>{
    return axios({
    method: 'post',
    url: 'http://localhost:3000/api/Candidates/Skills/'+c,
    headers:{'Content-Type':'application/json'},
    data: {
        Skills:'AAA'
    }
    })
    },
    //delete skills
    deletecandidateskills: async(c)=>{
        return axios({
        method: 'delete',
        url: 'http://localhost:3000/api/Candidates/Skills/'+c,
        headers:{'Content-Type':'application/json'},
        data: {
            Skills:'MMM'
        }
        })
        },
    //update skills 
    updatecandidateskills: async(c)=>{
        return axios({
        method: 'put',
        url: 'http://localhost:3000/api/Candidates/Skills/'+c,
        headers:{'Content-Type':'application/json'},
        data: {
        oldvalue:'AAA' ,
        newvalue:'MMM'
        }
        })
        },
    //rating
    //getrating
    getCandidaterating: async (c) => {
      const Candidates = await axios.get('http://localhost:3000/api/Candidates/rating/'+c)
      return Candidates
      },
    //postrating
    addCandidaterating : async(c)=>{
      return axios({
      method: 'post',
      url: 'http://localhost:3000/api/Candidates/rating/'+c,
      headers:{'Content-Type':'application/json'},
      data: {
          Ratings:{
            rating:1,
            review:"5ca0dc9c47286e02c049f6cdcdcfa",
            candidate_id:'5ca0dc9c47286e02c049f6fa',
            project_id:'5ca0dc9c47286eefrfrfre2'
      }
      }})
      },
    //updatetating
    updatecandidaterating : async(c)=>{
      return axios({
      method: 'put',
      url: 'http://localhost:3000/api/Candidates/rating/'+c,
      headers:{'Content-Type':'application/json'},
      data: {
      oldvalue:{
        rating:1,
            review:"5ca0dc9c47286e02c049f6cdcdcfa",
            candidate_id:'5ca0dc9c47286e02c049f6fa',
            project_id:'5ca0dc9c47286eefrfrfre2'
      } ,
      newvalue:{
            rating:2,
            review:"5ca0dc9c47286e02c049f6cdcdcfa",
            candidate_id:'5ca0dc9c47286e02c049f6fa',
            project_id:'5ca0dc9c47286eefrfrfre2'
      }
      }})
      },
    //deleterating
    deletecandidaterating: async(c)=>{
      return axios({
      method: 'delete',
      url: 'http://localhost:3000/api/Candidates/rating/'+c,
      headers:{'Content-Type':'application/json'},
      data: {
          Ratings: {
            rating:2,
            review:"5ca0dc9c47286e02c049f6cdcdcfa",
            candidate_id:'5ca0dc9c47286e02c049f6fa',
            project_id:'5ca0dc9c47286eefrfrfre2'
          }
      }
      })
      },
   //avgrating
   getCandidateavgrating: async(c)=>{
    return axios({
      method:'get',
      url: 'http://localhost:3000/api/Candidates/ratingsavg/'+c,
      headers:{'Content-Type':'application/json'},
     data: {
         Ratings: [2,"5ca0dc9c47286e02c049f6cdcdcfa","5ca0dc9c47286e02c049f6fa","5ca0dc9c47286eefrfrfre2"]
     }

   })
 },
//consultancy agency 
// test for consultancyAgencies
    //test for get
    getconsultancyAgencies: async (b1) => {
      const consultancyAgencies = await axios.get('http://localhost:3000/api/consultancyAgencies/'+b1)
      return consultancyAgencies
      },
     //test for post consultancyAgencies
  addconsultancyAgencies: async()=>{
      return axios({
          method: 'post',
          url: 'http://localhost:3000/api/consultancyAgencies',
          headers:{'Content-Type':'application/json'},
          data: {
               FirstName: 'test',
               LastName: 'test',
               password: 'test123',
               Basic_Info:'boola',
               Birthdate: '5/5/1998',
               email: 'random@gmail.com',
               User_Category : 'Consulting_Agent'
          }
        })
  } ,
//test for update FNameconsultancyAgencies
  updateFNameconsultancyAgencies: async(b1)=>{
      return axios({
          method: 'put',
          url: 'http://localhost:3000/api/consultancyAgencies/'+b1,
          headers:{'Content-Type':'application/json'},
          data: {
                    FirstName:'Mahmoud'
          }})}
          ,
  updateLNameconsultancyAgencies: async(b1)=>{
    return axios({
      method: 'put',
      url: 'http://localhost:3000/api/consultancyAgencies/'+b1,
      headers:{'Content-Type':'application/json'},
      data: {
                LastName:'Nabil'
      }})},
  updateBirthdateconsultancyAgencies: async(b1)=>{
    return axios({
      method: 'put',
      url: 'http://localhost:3000/api/consultancyAgencies/'+b1,
      headers:{'Content-Type':'application/json'},
      data: {
                Birthdate:'1997-09-08T00:00:00.000Z'
      }})},
updatepasswordconsultancyAgencies: async(b1)=>{
return axios({
  method: 'put',
  url: 'http://localhost:3000/api/consultancyAgencies/'+b1
  ,
  headers:{'Content-Type':'application/json'},
  data: {
    password:'123456789'
  }
})},
updateemailconsultancyAgencies: async(b1)=>{
  return axios({
    method: 'put',
    url: 'http://localhost:3000/api/consultancyAgencies/'+b1
    ,
    headers:{'Content-Type':'application/json'},
    data: {
      email:'mahmoud@gmail'
    }
  })},  
//test delete consultancyAgencies
deleteconsultancyAgencies: async(b1)=>{
        return axios({
          method: 'delete',
          url: 'http://localhost:3000/api/consultancyAgencies/'+b1 ,
          headers:{'Content-Type':'application/json'},
          data: {
          }
        })        
},
      
//BoardMembers
  getconsultancyAgenciesBoardMembers: async (b1) => {
  const consultancyAgencies = await axios.get('http://localhost:3000/api/consultancyAgencies/BoardMembers/'+b1)
  return consultancyAgencies
  },
  //add boardmemebr
  addconsultancyAgenciesBoardMember : async(b1)=>{
  return axios({
  method: 'post',
  url: 'http://localhost:3000/api/consultancyAgencies/BoardMembers/'+b1,
  headers:{'Content-Type':'application/json'},
  data: {
    BoardMembers:'AAA'
  }
  })
  },
  //delete BoardMembers
  deleteconsultancyAgenciesBoardMembers: async(b1)=>{
  return axios({
  method: 'delete',
  url: 'http://localhost:3000/api/consultancyAgencies/BoardMembers/'+b1,
  headers:{'Content-Type':'application/json'},
  data: {
    BoardMembers :'MMM'
  }
})
},
  //update BoardMembers
  updateconsultancyAgenciesBoardMemberss: async(b1)=>{
    return axios({
    method: 'put',
    url: 'http://localhost:3000/api/consultancyAgencies/BoardMembers/'+b1,
    headers:{'Content-Type':'application/json'},
    data: {
    oldvalue:'AAA' ,
    newvalue:'MMM'
    }
    })
    },
//get Past_Events
  getconsultancyAgenciesPast_Events: async (b1) => {
  const consultancyAgencies = await axios.get('http://localhost:3000/api/consultancyAgencies/Past_Events/'+b1)
  return consultancyAgencies
  },
  //add Past_Events
  addconsultancyAgenciesPast_Events : async(b1)=>{
  return axios({
  method: 'post',
  url: 'http://localhost:3000/api/consultancyAgencies/Past_Events/'+b1,
  headers:{'Content-Type':'application/json'},
  data: {
    Past_Events:'AAA'
  }
  })
  },
  //delete Past_Events
  deleteconsultancyAgenciesPast_Events: async(b1)=>{
      return axios({
      method: 'delete',
      url: 'http://localhost:3000/api/consultancyAgencies/Past_Events/'+b1,
      headers:{'Content-Type':'application/json'},
      data: {
        Past_Events:'MMM'
      }
      })
      },
  //update Past_Events 
  updateconsultancyAgenciesPast_Events: async(b1)=>{
      return axios({
      method: 'put',
      url: 'http://localhost:3000/api/consultancyAgencies/Past_Events/'+b1,
      headers:{'Content-Type':'application/json'},
      data: {
      oldvalue:'AAA' ,
      newvalue:'MMM'
      }
      })
      },
//co_working spaces
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
