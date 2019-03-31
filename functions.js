const axios = require('axios');
const functions = {
    //test for get
	getCandidates: async () => {
        const Candidates = await axios.get('http://localhost:3000/api/Candidates')
        return Candidates
        },
       //test for post 
    addCandidate: async()=>{
        return axios({
            method: 'post',
            url: 'http://localhost:3000/api/Candidates',
            headers:{'Content-Type':'application/json'},
            data: {
                 FirstName: 'ahmed',
                 LastName: 'yassin',
                 password: 'rana23',   
                 Birthdate: '1/1/2001',
                 email: 'yassin@gmail.com',
                 User_Category : 'Member'
            }
          })

    } ,
//test for update    
    updateFName: async()=>{
        return axios({
            method: 'put',
            url: 'http://localhost:3000/api/Candidates/5ca12dc90906934584e82afa',
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
    updateLName: async()=>{
      return axios({
        method: 'put',
        url: 'http://localhost:3000/api/Candidates/5ca12dc90906934584e82afa',
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
    updateBirthdate: async()=>{
      return axios({
        method: 'put',
        url: 'http://localhost:3000/api/Candidates/5ca12dc90906934584e82afa',
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
  },
  updatepassword: async()=>{
  return axios({
    method: 'put',
    url: 'http://localhost:3000/api/Candidates/5ca12dc90906934584e82afa'
    ,
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
},updatemail: async()=>{
  return axios({
    method: 'put',
    url: 'http://localhost:3000/api/Candidates/5ca12dc90906934584e82afa',
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
  deletebmember: async()=>{
          return axios({
            method: 'delete',
            url: 'http://localhost:3000/api/Candidates/5ca12dd90906934584e82afb',
            headers:{'Content-Type':'application/json'},
            data: {
            }
          })        
  },
        
//get interessts
    getCandidateinterests: async () => {
    const Candidates = await axios.get('http://localhost:3000/api/Candidates/interests/5ca12dc90906934584e82afa')
    return Candidates
    },
    //add interest
    addCandidateinterest : async()=>{
    return axios({
    method: 'post',
    url: 'http://localhost:3000/api/Candidates/interests/5ca12dc90906934584e82afa',
    headers:{'Content-Type':'application/json'},
    data: {
        interest:'AAA'
    }
    })
    },
    //delete interests
    deletecandidateinterests: async()=>{
    return axios({
    method: 'delete',
    url: 'http://localhost:3000/api/Candidates/interests/5ca12dc90906934584e82afa',
    headers:{'Content-Type':'application/json'},
    data: {
      interest :'MMM'
    }
  })
},
    //update interests
    updatecandidateinterestss: async()=>{
      return axios({
      method: 'put',
      url: 'http://localhost:3000/api/Candidates/interests/5ca12dc90906934584e82afa',
      headers:{'Content-Type':'application/json'},
      data: {
      oldvalue:'AAA' ,
      newvalue:'MMM'
      }
      })
      },
  //get project
    getCandidateproject: async () => {
    const Candidates = await axios.get('http://localhost:3000/api/Candidates/projects/5ca12dc90906934584e82afa')
    return Candidates
    },
    //add project
    addCandidateproject : async()=>{
    return axios({
    method: 'post',
    url: 'http://localhost:3000/api/Candidates/projects/5ca12dc90906934584e82afa',
    headers:{'Content-Type':'application/json'},
    data: {
        project:'AAA'
    }
    })
    },
    //delete project
    deletecandidateproject: async()=>{
        return axios({
        method: 'delete',
        url: 'http://localhost:3000/api/Candidates/projects/5ca12dc90906934584e82afa',
        headers:{'Content-Type':'application/json'},
        data: {
        project:'MMM'
        }
        })
        },
    //update project 
    updatecandidateprojects: async()=>{
        return axios({
        method: 'put',
        url: 'http://localhost:3000/api/Candidates/projects/5ca12dc90906934584e82afa',
        headers:{'Content-Type':'application/json'},
        data: {
        oldvalue:'AAA' ,
        newvalue:'MMM'
        }
        })
        },
    //get certificate
    getCandidatecertificates: async () => {
    const Candidates = await axios.get('http://localhost:3000/api/Candidates/Certificates/5ca12dc90906934584e82afa')
    return Candidates
    },
    //add certificate
    addCandidatecertificate : async()=>{
    return axios({
    method: 'post',
    url: 'http://localhost:3000/api/Candidates/Certificates/5ca12dc90906934584e82afa',
    headers:{'Content-Type':'application/json'},
    data: {
        certificate:'AAA'
    }
    })
    },
    //delete certificate
    deletecandidatecertificate: async()=>{
        return axios({
        method: 'delete',
        url: 'http://localhost:3000/api/Candidates/Certificates/5ca12dc90906934584e82afa',
        headers:{'Content-Type':'application/json'},
        data: {
        certificate:'MMM'
        }
        })
        },
    //update certificate
    updatecandidatecertificates: async()=>{
        return axios({
        method: 'put',
        url: 'http://localhost:3000/api/Candidates/Certificates/5ca12dc90906934584e82afa',
        headers:{'Content-Type':'application/json'},
        data: {
        oldvalue:'AAA' ,
        newvalue:'MMM'
        }
        })
        },
    //get skills
    getCandidateskills: async () => {
    const Candidates = await axios.get('http://localhost:3000/api/Candidates/Skills/5ca12dc90906934584e82afa')
    return Candidates
    },
    //add skills
    addCandidateskills : async()=>{
    return axios({
    method: 'post',
    url: 'http://localhost:3000/api/Candidates/Skills/5ca12dc90906934584e82afa',
    headers:{'Content-Type':'application/json'},
    data: {
        Skills:'AAA'
    }
    })
    },
    //delete skills
    deletecandidateskills: async()=>{
        return axios({
        method: 'delete',
        url: 'http://localhost:3000/api/Candidates/Skills/5ca12dc90906934584e82afa',
        headers:{'Content-Type':'application/json'},
        data: {
            Skills:'MMM'
        }
        })
        },
    //update skills 
    updatecandidateskills: async()=>{
        return axios({
        method: 'put',
        url: 'http://localhost:3000/api/Candidates/Skills/5ca12dc90906934584e82afa',
        headers:{'Content-Type':'application/json'},
        data: {
        oldvalue:'AAA' ,
        newvalue:'MMM'
        }
        })
        },
    //rating
    //getrating
    getCandidaterating: async () => {
      const Candidates = await axios.get('http://localhost:3000/api/Candidates/rating/5ca12dc90906934584e82afa')
      return Candidates
      },
    //postrating
    addCandidaterating : async()=>{
      return axios({
      method: 'post',
      url: 'http://localhost:3000/api/Candidates/rating/5ca12dc90906934584e82afa',
      headers:{'Content-Type':'application/json'},
      data: {
          Ratings:[1,"5ca0dc9c47286e02c049f6cdcdcfa","5ca0dc9c47286e02c049f6fa","5ca0dc9c47286eefrfrfre2"]
      }
      })
      },
    //updatetating
    updatecandidaterating : async()=>{
      return axios({
      method: 'put',
      url: 'http://localhost:3000/api/Candidates/rating/5ca12dc90906934584e82afa',
      headers:{'Content-Type':'application/json'},
      data: {
      oldvalue: [1,"5ca0dc9c47286e02c049f6cdcdcfa","5ca0dc9c47286e02c049f6fa","5ca0dc9c47286eefrfrfre2"],
      newvalue: [2,"5ca0dc9c47286e02c049f6cdcdcfa","5ca0dc9c47286e02c049f6fa","5ca0dc9c47286eefrfrfre2"]
      }
      })
      },
    //deleterating
    deletecandidaterating: async()=>{
      return axios({
      method: 'delete',
      url: 'http://localhost:3000/api/Candidates/rating/5ca12dc90906934584e82afa',
      headers:{'Content-Type':'application/json'},
      data: {
          Ratings: [2,"5ca0dc9c47286e02c049f6cdcdcfa","5ca0dc9c47286e02c049f6fa","5ca0dc9c47286eefrfrfre2"]
      }
      })
      },
   //avgrating
   getCandidaterating: async()=>{
    return axios({
      method:'get',
      url: 'http://localhost:3000/api/Candidates/ratingsavg/5ca12dc90906934584e82afa',
      headers:{'Content-Type':'application/json'},
     data: {
         Ratings: [2,"5ca0dc9c47286e02c049f6cdcdcfa","5ca0dc9c47286e02c049f6fa","5ca0dc9c47286eefrfrfre2"]
     }

   })
 }
}
   module.exports = functions;
