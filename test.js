const funcs = require('./functions');/*
test(`Admin 's data should match the one being inserted`, async () => {
  const user =  await funcs.addadmin();
  window.zid = user.data.data._id
  const expectation = {
          FirstName: 'ahmed',
          LastName: 'yassin',
          password: 'rana23',   
          Birthdate: '1/1/2001',
          email:'yassin@gmail.com',
          User_Category : 'Admin'
  }
expect(user.data.data.email).toEqual(expectation.email)
expect(user.data.data.FirstName).toEqual(expectation.FirstName)
expect(user.data.data.LastName).toEqual(expectation.LastName)
expect(user.data.data.password).toEqual(expectation.password)
});
test(`first Admin 's id should be this certain encrypted id`, async () => {
  const user =  await funcs.getadmins(zid);
  expect(user.data._id).toEqual(zid)
});
test(`first Admin 's first name should be updated to Mahmoud  `, async () => {
    const user =await funcs.updateFNameadmin(zid);
  const expected = {
          FirstName: 'Mahmoud',
  }
  expect(user.data.data).toEqual(expected.FirstName)
});
test(`first Admin 's last name should be updated to kholy  `, async () => {
  const user =  await funcs.updateLNameadmin(zid);
  const expected = {
    LastName:'seliem'
  }
  expect(user.data.data).toEqual(expected.LastName)
  });
test(`first Admin 's Birth date should be updated to 09/08/1997  `, async () => {
  const user =  await funcs.updatebirthdateadmin(zid);
  const expected = {
    Birthdate: '1997-09-08'
  }
  expect(user.data.data).toEqual(expected.Birthdate)

});
test(`first Admin 's password should be updated to 'udntknwmypassword'  `, async () => {
  const user =  await funcs.updatepaswordadmin(zid);
  const expected = {
    password:'123456789'
  }
  expect(user.data.data).toEqual(expected.password)
});
test(`first Admin 's email should be updated to 'random@gmail.com' `, async () => {


  const user =  await funcs.updateemailadmin(zid);
  const expected = {
    email:'random@random.com'
  }
  expect(user.data.data).toEqual(expected.email)

});
//delete
test(`Admin delete`, async () => {
  const user =  await funcs.deleteadmin(zid);
  expect(user.data).toEqual({msg:'admin was deleted successfully'})
});

test('Project amount increases by 1',async()=>{
// expect.assertions(1)
jest.setTimeout(30000)
 const project=await funcs.getProject()

 // console.log(project.data.data.length)
   const z=await funcs.InsertProject();
 //  console.log(z.data.msg)
  const project2=await funcs.getProject()
//console.log(project2.)
  expect(project.data.data.length).toBe(project2.data.data.length-1)
});

    test('update name',async()=>{
     //expect.assertions(1)
     const project=await funcs.updateName()
     //console.log(project.data.msg)

      expect(project.data.msg).toEqual('Project Updated Succsefully')
    });
    test('update status',async()=>{
      //expect.assertions(1)
      const project=await funcs.updatestatus()
      //console.log(project.data.msg)
 
       expect(project.data.msg).toEqual('Project updated successfully')
     });
    test('update approved',async()=>{
      //expect.assertions(1)
      const project=await funcs.updateapproved()
      //console.log(project.data.msg)
 
       expect(project.data.msg).toEqual('Project updated successfully')
     });
     test('update duration',async()=>{
      //expect.assertions(1)
      const project=await funcs.updateExpected_Duration()
      //console.log(project.data.msg)
 
       expect(project.data.msg).toEqual('Project updated successfully')
     }); 
     test('update exp level',async()=>{
      //expect.assertions(1)
      const project=await funcs.updateexp_level()
      //console.log(project.data.msg)
 
       expect(project.data.msg).toEqual('Project updated successfully')
     });  
     test('update comitment level',async()=>{
      //expect.assertions(1)
      const project=await funcs.updatecomitment_level()
      //console.log(project.data.msg)
 
       expect(project.data.msg).toEqual('Project updated successfully')
     });
     test('update price',async()=>{
      //expect.assertions(1)
      const project=await funcs.updateprice()
      //console.log(project.data.msg)
 
       expect(project.data.msg).toEqual('Project updated successfully')
     });
     test('update Paymenttype',async()=>{
      //expect.assertions(1)
      const project=await funcs.updatePaymentType()
      //console.log(project.data.msg)
 
       expect(project.data.msg).toEqual('Project updated successfully')
     });
     test('update Consultancy agency id',async()=>{
      //expect.assertions(1)
      const project=await funcs.updateconsultancy_agency_id()
      //console.log(project.data.msg)
 
       expect(project.data.msg).toEqual('Project updated successfully')
     });
     test('update needconsultancy',async()=>{
      //expect.assertions(1)
      const project=await funcs.updateneed_Consultancy()
      //console.log(project.data.msg)
 
       expect(project.data.msg).toEqual('Project updated successfully')
     });
     test('update Members needed',async()=>{
      //expect.assertions(1)
      const project=await funcs.updateMembersNeeded()
      //console.log(project.data.msg)
 
       expect(project.data.msg).toEqual('Project updated successfully')
     });
     test('update main skill',async()=>{
      //expect.assertions(1)
      const project=await funcs.updatemain_skill()
      //console.log(project.data.msg)
 
       expect(project.data.msg).toEqual('Project updated successfully')
     });

     test('Deleting a project',async()=>{
      jest.setTimeout(300000); 
     //expect.assertions(5)
      const p=await funcs.getProject()
        const n1=p.data.data.length;
        const p2=await funcs.InsertProject()
        const p3=await funcs.getProject()
        const n2=p3.data.data.length
        const id=p2.data.data._id
        
        await funcs.delete_project(id)
        
        const p5=await funcs.getProject()
        
        const n3=p5.data.data.length

        
        expect(n1).toBe(n2-1)
        expect(n3).toBe(n2-1)
        expect(n3).toBe(n1)

     });
     test('Adding extra skill to project',async()=>{
      //expect.assertions(1)
      
      await funcs.Addskill()
      const project=await funcs.getProjectID("5ca0305c5bb45716a83a51b5")
      
      expect(project.data.data.extra_skills).toEqual(expect.arrayContaining(['jtestaddskill']));
 
      
     });
     test('Adding extra attribute to project',async()=>{
      //expect.assertions(1)
      
      await funcs.Addattrib()
      const project=await funcs.getProjectID("5ca0305c5bb45716a83a51b5")
      
      expect(project.data.data.extra_attributes).toEqual(expect.arrayContaining(['attributejtest']));
 
      
     });
     test('Deleting extra skill from project',async()=>{
      //expect.assertions(1)
      
      await funcs.DELskill()
      const project=await funcs.getProjectID("5ca0305c5bb45716a83a51b5")
      
      expect(project.data.data.extra_skills).not.toEqual(expect.arrayContaining(['jtestaddskill']));
 
      
     });
     test('Deleting extra attribute from project',async()=>{
      //expect.assertions(1)
      
      await funcs.DELattrib()
      const project=await funcs.getProjectID("5ca0305c5bb45716a83a51b5")
      
      expect(project.data.data.extra_attributes).not.toEqual(expect.arrayContaining(['attributejtest']));
 
      
     });
     test('Not yet decided by admin',async()=>{
      //expect.assertions(1)
      const projects=await funcs.notyet()
      expect(projects.data.data[0].approved).toEqual(null);
 
      
     });
     test('Approved Projects',async()=>{
      //expect.assertions(1)
      const projects=await funcs.Approved()
      
      expect(projects.data.data[0].approved).toEqual(true);
 
      
     });test('Dissapproved Projects',async()=>{
      //expect.assertions(1)
      const projects=await funcs.DissApproves()
      
      expect(projects.data.data[0].approved).toEqual(false);
 
      
     });
     test('Member Apply to Project',async()=>{
       await funcs.Apply()
       const P=await funcs.getProjectID('5ca0305c5bb45716a83a51b5')
       
       expect(P.data.data.current_members_applied_ids).toEqual(expect.arrayContaining(['jtestmemberid']));
     });
     test('Assign to Project',async()=>{
      //expect.assertions(1)
      await funcs.Assign()
      const P=await funcs.getProjectID("5ca0305c5bb45716a83a51b5")
      
      expect(P.data.data.current_members_applied_ids).not.toEqual(expect.arrayContaining(['jtestmemberid']))
      expect(P.data.data.accepted_members_ids).toEqual(expect.arrayContaining(['jtestmemberid']))
      
     });
     test('Projects that need consultancy',async()=>{
      //expect.assertions(1)
      const P=await funcs.NeedCon()
      expect(P.data.data[0].consultancy_agency_id).toEqual(null)
      expect(P.data.data[0].need_Consultancy).toEqual(true)
      
      
     });
     test('member id should be included in project',async()=>{
      const M=await funcs.Pending()
      expect(M.data.data.length).toBe(0)
      
     });
     test('Projects that have been posted to the site and need members',async()=>{
      const M=await funcs.Avalible()
      expect(M.data.data.length).toBe(0)
      
     });
     test('Is this member certified for this project',async()=>{
        const P=await funcs.Certified()
        expect(P.data.data).toEqual(true)
     });

 
/**enter* @jest-environment node *//*
test('adds 1 + 2 to be 3', () => {

    expect(funcs.add(1, 2)).toBe(3);
  
  });  test(`first partner's id should be this certain encrypted id  `, async () => {

    
    const user =  await funcs.getpartners();
  
    expect(user.data.data[0]._id).toEqual("5c9cc8b3b19333217411d273")

  });
  test(`partner's data  should match the one being inserted  `, async () => {

    
    const user =  await funcs.testaddpartner();
    const expectation = {
      Certificates: [],
            BoardMembers: [],
            Past_Events: [],
            Reviews: [],
            Intrests: [],
            Past_Projects: [],
            Skills: [],
            Business_Plans_Offered: [],
            Facilites: [],
            FirstName: 'ahmed',
            LastName: 'yassin',
            Basic_Info:'web configuration and innovation ',
             password: 'rana23',   
             Birthdate: '1/1/2001',
             email: 'yassin@gmail.com',
            User_Category : 'Partner',
            
    }
  expect(user.data.data.email).toEqual(expectation.email)
  expect(user.data.data.FirstName).toEqual(expectation.FirstName)
  expect(user.data.data.LastName).toEqual(expectation.LastName)
  expect(user.data.data.password).toEqual(expectation.password)
  });
  test(`partner's data  should match the one being inserted  `, async () => {

    
    const user =  await funcs.testaddpartner();
    const expectation = {
      Certificates: [],
            BoardMembers: [],
            Past_Events: [],
            Reviews: [],
            Intrests: [],
            Past_Projects: [],
            Skills: [],
            Business_Plans_Offered: [],
            Facilites: [],
            FirstName: 'ahmed',
            LastName: 'yassin',
            Basic_Info:'web configuration and innovation ',
             password: 'rana23',   
             Birthdate: '1/1/2001',
             email: 'yassin@gmail.com',
            User_Category : 'Partner',
            
    }
  expect(user.data.data.email).toEqual(expectation.email)
  expect(user.data.data.FirstName).toEqual(expectation.FirstName)
  expect(user.data.data.LastName).toEqual(expectation.LastName)
  expect(user.data.data.password).toEqual(expectation.password)
  });
  test(`partner's data  should match the one being inserted  `, async () => {

    
    const user =  await funcs.testaddpartner();
    const expectation = {
      Certificates: [],
            BoardMembers: [],
            Past_Events: [],
            Reviews: [],
            Intrests: [],
            Past_Projects: [],
            Skills: [],
            Business_Plans_Offered: [],
            Facilites: [],
            FirstName: 'ahmed',
            LastName: 'yassin',
            Basic_Info:'web configuration and innovation ',
             password: 'rana23',   
             Birthdate: '1/1/2001',
             email: 'yassin@gmail.com',
            User_Category : 'Partner',
            
    }
  expect(user.data.data.email).toEqual(expectation.email)
  expect(user.data.data.FirstName).toEqual(expectation.FirstName)
  expect(user.data.data.LastName).toEqual(expectation.LastName)
  expect(user.data.data.password).toEqual(expectation.password)
  });
  
  test(`first partner's first name should be updated to seif  `, async () => {

    expect.assertions(1)
      const user =await funcs.testupdateFName();
    const expected = {
      Certificates: [],
      _id: '5c9cc8b3b19333217411d273',
            FirstName: 'seifo',
            LastName: 'sharkawy',
            Basic_Info: 'media engineering and technology',
            password: '54321 ',
            Birthdate: '1997-09-08T00:00:00.000Z',
            email: 'random@gmail.com',
            User_Category: 'Partner',
            
    }
    const x =  await funcs.getpartners();

    expect(x.data.data[0].FirstName).toEqual(expected.FirstName)

  });
  module.exports = {
    setupTestFrameworkScriptFile: './jest.setup.js'
  }
  
  // jest.setup.js
  jest.setTimeout(30000)
  
  test(`first partner's last name should be updated to kholy  `, async () => {

    const user =  await funcs.testupdateLName();
    const expected = {
      Certificates: [],
      _id: '5c9cc8b3b19333217411d273',
            FirstName: 'yassin',
            LastName: 'kholy',
            Basic_Info: 'web configuration and design',
            password: '12345',
            Birthdate: '2001-12-31T22:00:00.000Z',
            email: 'flinstone@gmail.com',
            User_Category: 'Partner',
    }
    const x =  await funcs.getpartners();
    expect(x.data.data[0].LastName).toEqual(expected.LastName)

  });

  

  test(`first partner's Birth date should be updated to 09/08/1997  `, async () => {

    
    const user =  await funcs.testupdateBirthdate();
    const expected = {
      Birthdate: '1997-09-08T00:00:00.000Z'
    }
    const x =  await funcs.getpartners();
    expect(x.data.data[0].Birthdate).toEqual(expected.Birthdate)

  });
  
  test(`first partner's basic information should be updated to media engineering and technology  `, async () => {

    
    const user =  await funcs.testupdateBasic_Info();
    const expected = {
      Basic_Info: 'media engineering and technology'
    }
    const x =  await funcs.getpartners();
    expect(x.data.data[0].Basic_Info).toEqual(expected.Basic_Info)

  });
  test(`first partner's password should be updated to 'udntknwmypassword'  `, async () => {

    
    const user =  await funcs.testupdatepassword();
    const expected = {
      password: 'udntknwmyp'
    }
    const x =  await funcs.getpartners();
    expect(x.data.data[0].password).toEqual(expected.password)

  });
  test(`first partner's email should be updated to 'random@gmail.com' `, async () => {

    
    const user =  await funcs.testupdatemail();
    const expected = {
      email: 'random@gmail.com'
    }
    const x =  await funcs.getpartners();
    expect(x.data.data[0].email).toEqual(expected.email)

  });
  test(`partner's board member was deleted ' `, async () => {

    
    const user =  await funcs.testdeletebmember();
    const expected = {
      BoardMembers: []
    }
    const x =  await funcs.getpartners();
    expect(x.data.data[2].BoardMembers).toEqual(expected.BoardMembers)

  });
  test(`partner's past project was deleted ' `, async () => {

    
    const user =  await funcs.testdeleteproject();
    const expected = {
      Past_Projects: []
    }
    const x =  await funcs.getpartners();
    expect(x.data.data[2].Past_Projects).toEqual(expected.Past_Projects)

  });
  test(`partner's project was added ' `, async () => {

    
    const user =  await funcs.testupdatepastproject();
    const s = 'Hilton Hotel'
    const expected = {
      Past_Projects:['Hilton Hotel']
    }
    const x =  await funcs.getpartners();
    expect(x.data.data[1].Past_Projects).toEqual(expected.Past_Projects)

  });
  test(`partner's board member was added ' `, async () => {

    
    const user =  await funcs.testupdateboardmember();
    const expected = {
      BoardMembers: ['ahmed yassin']
    }
    const x =  await funcs.getpartners();
    expect(x.data.data[1].BoardMembers).toEqual(expected.BoardMembers)

  });

 


//Location testing

test('Testing Post Method',async()=>{
  expect.assertions(6)
  const test = await funcs.postLocations()
  idd= test.data.data._id
  window.gid = idd
  console.log(idd)
  console.log(gid)
  const location = {
    name: 'opera',
    country: 'egypt',
    city:'cairo',
     street: 'mohamedali',  
     capacity: 12,
  }
  expect(test.data.msg).toEqual('location regiesterd successfully')
  expect(test.data.data.name).toEqual(location.name)
  expect(test.data.data.country).toEqual(location.country)
  expect(test.data.data.city).toEqual(location.city)
  expect(test.data.data.street).toEqual(location.street)
  expect(test.data.data.capacity).toEqual(location.capacity)


});   

test('Testing Get method ',async()=>{
    expect.assertions(1);//Verifies that a certain number of assertions is called. Leaving it out will lead to succeeding the test even if name doesnt match
    const test = await funcs.getLocationsid(gid)
            expect(test.data.name).toEqual("opera")

});

  
  test('Testing Put Method ',async()=>{
    expect.assertions(3);
    const test = await funcs.putLocations(gid)
    const location = {
         name: 'zoo', 
        capacity: 2
    }
    const x = await funcs.getLocationsid(gid)
    expect(test.data.msg).toEqual('location updated')
    expect(x.data.name).toEqual(location.name)
    //expect(arr.data.country).toEqual(location.country)
   // expect(arr.data.city).toEqual(location.city)
   // expect(arr.data.street).toEqual(location.street)
    expect(x.data.capacity).toEqual(location.capacity)

});
test('Testing Post Method for Reservation',async()=>{
  const test = await funcs.postReservation(gid)
  expect(test.data.msg).toEqual('New reservation requested')
  
});

test('Testing Put Method for review and reservation',async()=>{
const test = await funcs.putReview(gid)

expect(test.data.msg).toEqual('Reservation reviewed successfully')

});
test('Testing Delete Method', async () => {

          const l=await funcs.getLocations()
          const n1=l.data.data.length;
          const l2=await funcs.postLocations()
          const l3=await funcs.getLocations()
          const n2=l3.data.data.length
          const sid=l2.data.data._id
          await funcs.deleteLocation(sid)
          const l5=await funcs.getLocations()
          const n3=l5.data.data.length          
          expect(n1).toBe(n2-1)
          expect(n3).toBe(n2-1)
          expect(n3).toBe(n1)
  });
//candidate tests
//post
 test(`Candidate 's data  should match the one being inserted`, async () => {
    const user =  await funcs.addCandidate();
    const expectation = {
            FirstName: 'test',
            LastName: 'test',
            password: 'test123',   
            Birthdate: '5/5/1998',
            email:'random@gmail.com',
            User_Category : 'Member'
    }
    window.cid = user.data.data._id
  expect(user.data.data.email).toMatch(expectation.email)
  expect(user.data.data.FirstName).toMatch(expectation.FirstName)
  expect(user.data.data.LastName).toMatch(expectation.LastName)
  expect(user.data.data.password).toMatch(expectation.password)
  expect(user.data.data.User_Category).toMatch(expectation.User_Category)
  });
     //get
  test(`Candidates get`, async () => {
    const user =  await funcs.getCandidates(cid);
    expect(user.data._id).toEqual(cid)
  });
 //update
  //firstname
 test(`first Candidate 's first name should be updated to Mahmoud`, async () => {
    expect.assertions(1)
      const user =await funcs.updateFNameCandidate(cid);
    const expected = {
            FirstName: 'Mahmoud',
    }
    const x =  await funcs.getCandidates(cid);
    expect(x.data.FirstName).toEqual(expected.FirstName)
  });
  module.exports = {
    setupTestFrameworkScriptFile: './jest.setup.js'
  },

  // jest.setup.js
  jest.setTimeout(30000),
//lastname
  test(` Candidate 's last name should be updated to Nabil  `, async () => {

    const user =  await funcs.updateLNameCandidate(cid);
    const expected = {
      LastName:'Nabil'
    }
    const x =  await funcs.getCandidates(cid);
    expect(x.data.LastName).toEqual(expected.LastName)
  }),
  // jest.setup.js
  jest.setTimeout(30000),
  // update birthdate
  test(`first Candidate 's Birth date should be updated to 09/08/1997  `, async () => {
    const user =  await funcs.updateBirthdateCandidate(cid);
    const expected = {
      Birthdate: '1997-09-08T00:00:00.000Z'
    }
    const x =  await funcs.getCandidates(cid);
    expect(x.data.Birthdate).toEqual(expected.Birthdate)
  })
  //update password
  test(`first Candidate 's password should be updated to 'udntknwmypassword'  `, async () => {
    const user =  await funcs.updatepasswordCandidate(cid);
    const expected = {
      password: '123456789'
    }
    const x =  await funcs.getCandidates(cid);
    expect(x.data.password).toEqual(expected.password)
  })
  //update email
  test(`first Candidate 's email should be updated to 'random@gmail.com' `, async () => {
    const user =  await funcs.updateemailCandidate(cid);
    const expected = {
      email: 'mahmoud@gmail'
    }
    const x =  await funcs.getCandidates(cid);
    expect(x.data.email).toEqual(expected.email)

  }),
  // test interests
  //post
  test(`Candidate interests insert  `, async () => {
    const user =  await funcs.addCandidateinterest(cid);
    const expected={
      Interests:["AAA"]
    }
    const x =  await funcs.getCandidates(cid);
  expect(x.data.Intrests).toEqual(expected.Interests)
  }),
  //get
  test(`get candidate interests`, async () => {
    const user =  await funcs.getCandidateinterests(cid);
    expect(user.data).toEqual({"data": [["AAA"]]})
  }),
  //update
  test(` update candidate interests`, async () => {
    const user =  await funcs.updatecandidateinterestss(cid);
    const x =  await funcs.getCandidates(cid);
    expect(x.data.Intrests).toEqual(["MMM"])
  }),
  //delete
  test(`candidate delete intereset`, async () => {
    const user =  await funcs.deletecandidateinterests(cid);
    const x =  await funcs.getCandidates(cid);
    expect(x.data.Intrests).toEqual([])
  }),
//test projects 
//post
test(`Candidate projects insert  `, async () => {
  const user =  await funcs.addCandidateproject(cid);
    const expected={
    Past_Projects:["AAA"]
    }
    const x =  await funcs.getCandidates(cid);
  expect(x.data.Past_Projects).toEqual(expected.Past_Projects)
}),
//get 
 test(` get candidate projects`, async () => {
  const user = await funcs.getCandidateproject(cid);
  expect(user.data).toEqual({"data": [["AAA"]]})
  }),
//update
test(` update candidate projects`, async () => {
  const user =  await funcs.updatecandidateprojects(cid);
  const x =  await funcs.getCandidates(cid);
  expect(x.data.Past_Projects).toEqual(["MMM"])
}),
//delete
test(`candidate delete project`, async () => {
  const user =  await funcs.deletecandidateproject(cid);
  const x =  await funcs.getCandidates(cid);
  expect(x.data.Intrests).toEqual([])
}),
  //test certificate
//post 
test(`Candidate certificates insert  `, async () => {
  const user =  await funcs.addCandidatecertificate(cid);
    const expected={
      Certificates:["AAA"]
    }
    const x =  await funcs.getCandidates(cid);
  expect(x.data.Certificates).toEqual(expected.Certificates)
}),
//get
 test(` get candidate certificate`, async () => {
    const user =  await funcs.getCandidatecertificates(cid);
    expect(user.data).toEqual({"data": [["AAA"]]})
  }),
//update
test(` update candidate certificates`, async () => {
  const user =  await funcs.updatecandidatecertificates(cid);
  const x =  await funcs.getCandidates(cid);
  expect(x.data.Certificates).toEqual(["MMM"])
}),
//delete
test(`candidate delete certificate`, async () => {
  const user =  await funcs.deletecandidatecertificate(cid);
  const x =  await funcs.getCandidates(cid);
  expect(x.data.Certificates).toEqual([])
}),
//test skills
//post
test(`Candidate skills insert  `, async () => {
  const user =  await funcs.addCandidateskills(cid);
  const expected={
    Skills:["AAA"]
  }
  const x =  await funcs.getCandidates(cid);
expect(x.data.Skills).toEqual(expected.Skills)
}),
//get
 test(` get candidate skills`, async () => {
  const user =  await funcs.getCandidateskills(cid);
  expect(user.data).toEqual({"data": [["AAA"]]})
  }),
//update
test(` update candidate skills`, async () => {
  const user =  await funcs.updatecandidateskills(cid);
  const x =  await funcs.getCandidates(cid);
  expect(x.data.Skills).toEqual(["MMM"])
}),
//delete
test(`candidate delete skills`, async () => {
  const user =  await funcs.deletecandidateskills(cid);
  const x =  await funcs.getCandidates(cid);
  expect(x.data.Skills).toEqual([])
}),
//testrating
//post
test(`Candidate rating insert  `, async () => {
  const user =  await funcs.addCandidaterating(cid);
  const expected={
    Ratings:{
      rating:1,
      review:"5ca0dc9c47286e02c049f6cdcdcfa",
      candidate_id:'5ca0dc9c47286e02c049f6fa',
      project_id:'5ca0dc9c47286eefrfrfre2'
    }
  }
  const x =  await funcs.getCandidates(cid);
expect(x.data.Ratings).toEqual([expected.Ratings])
}),
//get
test(` get candidate rating`, async () => {
  const user =  await funcs.getCandidaterating(cid);
  expect(user.data.data).toEqual([[{
    rating:1,
    review:"5ca0dc9c47286e02c049f6cdcdcfa",
    candidate_id:'5ca0dc9c47286e02c049f6fa',
    project_id:'5ca0dc9c47286eefrfrfre2'
  }]])
}),
//update
test(` update candidate rating`, async () => {
  jest.setTimeout(30000)
  const user =  await funcs.updatecandidaterating(cid);
  const x =  await funcs.getCandidates(cid);
  expect(user.data.data.Ratings).toEqual([{
    rating:2,
    review:"5ca0dc9c47286e02c049f6cdcdcfa",
    candidate_id:'5ca0dc9c47286e02c049f6fa',
    project_id:'5ca0dc9c47286eefrfrfre2'
}])
}),
//testavgrating
//avg_rating
test(` get candidate avgrating`, async () => {
  jest.setTimeout(30000)
  const user =  await funcs.getCandidateavgrating(cid);
  expect(user.data).toEqual({"avg": 2});
}),
//delete
test(`candidate delete rating`, async () => {
  const user =  await funcs.deletecandidaterating(cid);
  const x =  await funcs.getCandidates(cid);
  expect(x.data.Ratings).toEqual([])
})//,
//delete
test(`candidate delete test`, async () => {
  const user =  await funcs.deletecandidate(cid);
  expect(user.data).toEqual({data: "Candidate was deleted successfully"})
})  
//consultancyAgencies tests
//post
test(`consultancyAgencies 's data  should match the one being inserted`, async () => {
  const user =  await funcs.addconsultancyAgencies();
  const expectation = {
          FirstName: 'test',
          LastName: 'test',
          password: 'test123',
          Basic_Info:'boola',
          Birthdate: '5/5/1998',
          email:'random@gmail.com',
          User_Category : 'Consulting_Agent'
  }
  window.caid = user.data.data._id
expect(user.data.data.email).toMatch(expectation.email)
expect(user.data.data.FirstName).toMatch(expectation.FirstName)
expect(user.data.data.LastName).toMatch(expectation.LastName)
expect(user.data.data.password).toMatch(expectation.password)
expect(user.data.data.User_Category).toMatch(expectation.User_Category)
});
 //get
test(`consultancyAgenciess get`, async () => {
  const user =  await funcs.getconsultancyAgencies(caid);
  expect(user.data._id).toEqual(caid)
});
//update
//firstname
test(`first consultancyAgencies 's first name should be updated to Mahmoud`, async () => {
  expect.assertions(1)
    const user =await funcs.updateFNameconsultancyAgencies(caid);
  const expected = {
          FirstName: 'Mahmoud',
  }
  const x =  await funcs.getconsultancyAgencies(caid);
  expect(x.data.FirstName).toEqual(expected.FirstName)
});
module.exports = {
  setupTestFrameworkScriptFile: './jest.setup.js'
},

// jest.setup.js
jest.setTimeout(30000),
//lastname
test(` consultancyAgencies 's last name should be updated to Nabil  `, async () => {

  const user =  await funcs.updateLNameconsultancyAgencies(caid);
  const expected = {
    LastName:'Nabil'
  }
  const x =  await funcs.getconsultancyAgencies(caid);
  expect(x.data.LastName).toEqual(expected.LastName)
}),
// jest.setup.js
jest.setTimeout(30000),
// update birthdate
test(`first consultancyAgencies 's Birth date should be updated to 09/08/1997  `, async () => {
  const user =  await funcs.updateBirthdateconsultancyAgencies(caid);
  const expected = {
    Birthdate: '1997-09-08T00:00:00.000Z'
  }
  const x =  await funcs.getconsultancyAgencies(caid);
  expect(x.data.Birthdate).toEqual(expected.Birthdate)
})
//update password
test(`first consultancyAgencies 's password should be updated to '123456789'  `, async () => {
  const user =  await funcs.updatepasswordconsultancyAgencies(caid);
  const expected = {
    password: '123456789'
  }
  const x =  await funcs.getconsultancyAgencies(caid);
  expect(x.data.password).toEqual(expected.password)
})
//update email
test(`first consultancyAgencies 's email should be updated to 'mahmoud@gmail.com' `, async () => {
  const user =  await funcs.updateemailconsultancyAgencies(caid);
  const expected = {
    email: 'mahmoud@gmail'
  }
  const x =  await funcs.getconsultancyAgencies(caid);
  expect(x.data.email).toEqual(expected.email)

}),
// test BoardMembers
//post
test(`consultancyAgencies BoardMembers insert  `, async () => {
  const user =  await funcs.addconsultancyAgenciesBoardMember(caid);
  const expected={
    BoardMembers:["AAA"]
  }
  const x =  await funcs.getconsultancyAgencies(caid);
expect(x.data.BoardMembers).toEqual(expected.BoardMembers)
}),
//get
test(`get consultancyAgencies BoardMembers`, async () => {
  const user =  await funcs.getconsultancyAgenciesBoardMembers(caid);
  expect(user.data).toEqual({"data": [["AAA"]]})
}),
//update
test(` update consultancyAgencies BoardMembers`, async () => {
  const user =  await funcs.updateconsultancyAgenciesBoardMemberss(caid);
  const x =  await funcs.getconsultancyAgencies(caid);
  expect(x.data.BoardMembers).toEqual(["MMM"])
}),
//delete
test(`consultancyAgencies delete BoardMembers`, async () => {
  const user =  await funcs.deleteconsultancyAgenciesBoardMembers(caid);
  const x =  await funcs.getconsultancyAgencies(caid);
  expect(x.data.BoardMembers).toEqual([])
}),
//test Past_Events 
//post
test(`consultancyAgencies Past_Events insert  `, async () => {
const user =  await funcs.addconsultancyAgenciesPast_Events(caid);
  const expected={
  Past_Events:["AAA"]
  }
  const x =  await funcs.getconsultancyAgencies(caid);
expect(x.data.Past_Events).toEqual(expected.Past_Events)
}),
//get 
test(` get consultancyAgencies Past_Events`, async () => {
const user = await funcs.getconsultancyAgenciesPast_Events(caid);
expect(user.data).toEqual({"data": [["AAA"]]})
}),
//update
test(` update consultancyAgencies Past_Events`, async () => {
const user =  await funcs.updateconsultancyAgenciesPast_Events(caid);
const x =  await funcs.getconsultancyAgencies(caid);
expect(x.data.Past_Events).toEqual(["MMM"])
}),
//delete
test(`consultancyAgencies delete Past_Events`, async () => {
const user =  await funcs.deleteconsultancyAgenciesPast_Events(caid);
const x =  await funcs.getconsultancyAgencies(caid);
expect(x.data.Past_Events).toEqual([])
}),
//delete
test(`consultancyAgencies delete`, async () => {
const user =  await funcs.deleteconsultancyAgencies(caid);
expect(user.data).toEqual({msg:'consultancyAgency was deleted successfully'})
})*/
//Co_working_space tests
//post
test(`Co_working_space 's data  should match the one being inserted`, async () => {
  const user =  await funcs.addCo_working_space();
  const expectation = {
          Basic_Info: 'test',
          FirstName: 'test',
          LastName: 'test',
          password: 'test123',   
          Birthdate: '5/5/1998',
          email:'random@gmail.com',
          User_Category : 'Partner_CoWorkingSpace'
  }
  window.mid = user.data.data._id
expect(user.data.data.email).toMatch(expectation.email)
expect(user.data.data.FirstName).toMatch(expectation.FirstName)
expect(user.data.data.LastName).toMatch(expectation.LastName)
expect(user.data.data.password).toMatch(expectation.password)
expect(user.data.data.User_Category).toMatch(expectation.User_Category)
});
 //get
 
test(`Co_working_spaces get`, async () => {
  const user =  await funcs.getCo_working_spaces(mid);
  expect(user.data._id).toEqual(mid)
});
//update
//firstname
test(`first Co_working_space 's first name should be updated to Mohamed`, async () => {
  expect.assertions(1)
    const user =await funcs.updateFNameCo_working_space(mid);
  const expected = {
    FirstName:'Mohamad'
  }
  const x =  await funcs.getCo_working_spaces(mid);
  expect(x.data.FirstName).toEqual(expected.FirstName)
});
module.exports = {
  setupTestFrameworkScriptFile: './jest.setup.js'
},

// jest.setup.js
jest.setTimeout(30000),
//lastname
test(` Co_working_space 's last name should be updated to galal  `, async () => {
  const user =  await funcs.updateLNameCo_working_space(mid);
  const expected = {
    LastName:'galal'
  }
  const x =  await funcs.getCo_working_spaces(mid);
  expect(x.data.LastName).toEqual(expected.LastName)
}),
// update birthdate
test(`first Co_working_space 's Birth date should be updated to 09/08/1997  `, async () => {
  const user =  await funcs.updateBirthdateCo_working_space(mid);
  const expected = {
    Birthdate:'1997-09-08T00:00:00.000Z'
  }
  const x =  await funcs.getCo_working_spaces(mid);
  expect(x.data.Birthdate).toEqual(expected.Birthdate)
})
//update password
test(`first Co_working_space 's password should be updated to 'udntknwmypassword'  `, async () => {
  const user =  await funcs.updatepasswordCo_working_space(mid);
  const expected = {
    password: '12345'
  }
  const x =  await funcs.getCo_working_spaces(mid);
  expect(x.data.password).toEqual(expected.password)
})
//update email
test(`first Co_working_space 's email should be updated to 'random@gmail.com' `, async () => {
  const user =  await funcs.updateemailCo_working_space(mid);
  const expected = {
    email:'student@gmail'
  }
  const x =  await funcs.getCo_working_spaces(mid);
  expect(x.data.email).toEqual(expected.email)

})//,
// test Business_Plans_Offered
//post
test(`Co_working_space Business_Plans_Offered insert  `, async () => {
  const user =  await funcs.addCo_working_spaceBusiness_Plan_Offered(mid);
  const expected={
    Business_Plans_Offered:["AAA"]
  }
  const x =  await funcs.getCo_working_spaces(mid);
expect(x.data.Business_Plans_Offered).toEqual(expected.Business_Plans_Offered)
}),
//get
test(`get co_working_space Business_Plans_Offered`, async () => {
  const user =  await funcs.getCo_working_spaceBusiness_Plans_Offered(mid);
  expect(user.data).toEqual({"data": [["AAA"]]})
}),
//update
test(` update Co_working_space Business_Plans_Offered`, async () => {
  const user =  await funcs.updateCo_working_spaceBusiness_Plans_Offereds(mid);
  const x =  await funcs.getCo_working_spaces(mid);
  expect(x.data.Business_Plans_Offered).toEqual(["MMM"])
}),
//delete
test(`Co_working_space delete plans offered`, async () => {
  const user =  await funcs.deleteCo_working_spaceBusiness_Plans_Offered(mid);
  const x =  await funcs.getCo_working_spaces(mid);
  expect(x.data.Business_Plans_Offered).toEqual([])
}),
//test Facilites 
//post
test(`Co_working_space Facilites insert  `, async () => {
const user =  await funcs.addCo_working_spaceFacility(mid);
  const expected={
  Facilites:["AAA"]
  }
  const x =  await funcs.getCo_working_spaces(mid);
expect(x.data.Facilites).toEqual(expected.Facilites)
}),
//get 
test(` get Co_working_space Facilites`, async () => {
const user = await funcs.getCo_working_spaceFacility(mid);
expect(user.data).toEqual({"data": [["AAA"]]})
}),
//update
test(` update Co_working_space Facilites`, async () => {
const user =  await funcs.updateCo_working_spaceFacilites(mid);
const x =  await funcs.getCo_working_spaces(mid);
expect(x.data.Facilites).toEqual(["MMM"])
}),
//delete
test(`Co_working_space delete Facility`, async () => {
const user =  await funcs.deleteCo_working_spaceFacility(mid);
const x =  await funcs.getCo_working_spaces(mid);
expect(x.data.Facilites).toEqual([])
}),

//delete
test(`Co_working_space delete test`, async () => {
const user =  await funcs.deleteCo_working_space(mid);
expect(user.data).toEqual({msg:'Co_Working_space was deleted successfully'})
})
