const axios = require('axios');
const functions = {
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
          Ratings:"[1,'5ca0dc9c47286e02c049f6cdcdcfa','5ca0dc9c47286e02c049f6fa','5ca0dc9c47286eefrfrfre2']"
      }
      })
      },
    //updatetating
    updatecandidaterating : async(c)=>{
      return axios({
      method: 'put',
      url: 'http://localhost:3000/api/Candidates/rating/'+c,
      headers:{'Content-Type':'application/json'},
      data: {
      oldvalue:"[1,'5ca0dc9c47286e02c049f6cdcdcfa','5ca0dc9c47286e02c049f6fa','5ca0dc9c47286eefrfrfre2']",
      newvalue: "[2,'5ca0dc9c47286e02c049f6cdcdcfa','5ca0dc9c47286e02c049f6fa','5ca0dc9c47286eefrfrfre2']"
      }
      })
      },
    //deleterating
    deletecandidaterating: async(c)=>{
      return axios({
      method: 'delete',
      url: 'http://localhost:3000/api/Candidates/rating/'+c,
      headers:{'Content-Type':'application/json'},
      data: {
          Ratings: [2,"5ca0dc9c47286e02c049f6cdcdcfa","5ca0dc9c47286e02c049f6fa","5ca0dc9c47286eefrfrfre2"]
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
}
module.exports = functions
