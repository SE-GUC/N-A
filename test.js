
 const funcs = require('./functions');

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
      expect(P.data.data[0].consultancy_agency_id).toEqual(undefined)
      expect(P.data.data[0].need_Consultancy).toEqual(true)
      
      
     });
     test('member id should be included in project',async()=>{
      const M=await funcs.Pending()
      expect(M.data.data.length).toBe(0)
      
     })
     test('Projects that have been posted to the site and need members',async()=>{
      const M=await funcs.Avalible()
      expect(M.data.data.length).toBe(0)
      
     })
     test('Is this member certified for this project',async()=>{
        const P=await funcs.Certified()
        expect(P.data.data).toEqual(true)
     })

 
/**enter* @jest-environment node */


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
    
 