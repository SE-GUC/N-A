const funcs = require('./functions');

  test(`consultancyAgencies's data  should match the one being inserted  `, async () => {

    
    const user =  await funcs.testaddconsultancyAgencies();
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
             Birthdate: '2001-3-3',
             email: 'yassin@gmail.com',
            User_Category : 'consultancyAgencies',
            
    }
  expect(user.data.data.email).toEqual(expectation.email)
  expect(user.data.data.FirstName).toEqual(expectation.FirstName)
  expect(user.data.data.LastName).toEqual(expectation.LastName)
  expect(user.data.data.password).toEqual(expectation.password)
  });
  test(`consultancyAgencies's data  should match the one being inserted  `, async () => {

    
    const user =  await funcs.testaddconsultancyAgencies();
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
             Birthdate: '2001-3-3',
             email: 'yassin@gmail.com',
            User_Category : 'Consulting_Agent',
            
    }
  expect(user.data.data.email).toEqual(expectation.email)
  expect(user.data.data.FirstName).toEqual(expectation.FirstName)
  expect(user.data.data.LastName).toEqual(expectation.LastName)
  expect(user.data.data.password).toEqual(expectation.password)
  });
  test(`consultancyAgencies's data  should match the one being inserted  `, async () => {

    
    const user =  await funcs.testaddconsultancyAgencies();
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
             Birthdate: '2001-3-3',
             email: 'yassin@gmail.com',
            User_Category : 'Consulting_Agent',
            
    }
  expect(user.data.data.email).toEqual(expectation.email)
  expect(user.data.data.FirstName).toEqual(expectation.FirstName)
  expect(user.data.data.LastName).toEqual(expectation.LastName)
  expect(user.data.data.password).toEqual(expectation.password)
  });
  
  test(`first consultancyAgencies's first name should be updated to seif  `, async () => {

    expect.assertions(1)
      const user =await funcs.testupdateFNameconsultancyAgency();
    const expected = {
      Certificates: [],
      _id: '5c9fcc71187a480348547d1a',
            FirstName: 'seifo',
            LastName: 'sharkawy',
            Basic_Info: 'media engineering and technology',
            password: '54321 ',
            Birthdate: '1997-09-08T00:00:00.000Z',
            email: 'random@gmail.com',
            User_Category: 'Consulting_Agent',
            
    }
    const x =  await funcs.getconsultancyAgenciess();

    expect(x.data.data[0].FirstName).toEqual(expected.FirstName)

  });
  module.exports = {
    setupTestFrameworkScriptFile: './jest.setup.js'
  }
  
  // jest.setup.js
  jest.setTimeout(30000)
  
  test(`first consultancyAgencies's last name should be updated to kholy  `, async () => {

    const user =  await funcs.testupdateLNameconsultancyAgency();
    const expected = {
      Certificates: [],
      _id: '5c9cc8b3b19333217411d273',
            FirstName: 'yassin',
            LastName: 'kholy',
            Basic_Info: 'web configuration and design',
            password: '12345',
            Birthdate: '2001-12-31T22:00:00.000Z',
            email: 'flinstone@gmail.com',
            User_Category: 'Consulting_Agent',
    }
    const x =  await funcs.getconsultancyAgenciess();
    expect(x.data.data[0].LastName).toEqual(expected.LastName)

  });

  

  test(`first consultancyAgencies's Birth date should be updated to 09/08/1997  `, async () => {

    
    const user =  await funcs.testupdateBirthdateconsultancyAgency();
    const expected = {
      Birthdate: '1997-09-08T00:00:00.000Z'
    }
    const x =  await funcs.getconsultancyAgenciess();
    expect(x.data.data[0].Birthdate).toEqual(expected.Birthdate)

  });
  
  test(`first consultancyAgencies's basic information should be updated to media engineering and technology  `, async () => {

    
    const user =  await funcs.testupdateBasic_InfoconsultancyAgency();
    const expected = {
      Basic_Info: 'media engineering and technology'
    }
    const x =  await funcs.getconsultancyAgenciess();
    expect(x.data.data[0].Basic_Info).toEqual(expected.Basic_Info)

  });
  test(`first consultancyAgencies's password should be updated to 'udntknwmypassword'  `, async () => {

    
    const user =  await funcs.testupdatepasswordconsultancyAgency();
    const expected = {
      password: 'udntknwmyp'
    }
    const x =  await funcs.getconsultancyAgenciess();
    expect(x.data.data[0].password).toEqual(expected.password)

  });
  test(`first consultancyAgencies's email should be updated to 'random@gmail.com' `, async () => {

    
    const user =  await funcs.testupdatemailconsultancyAgency();
    const expected = {
      email: 'random@gmail.com'
    }
    const x =  await funcs.getconsultancyAgenciess();
    expect(x.data.data[0].email).toEqual(expected.email)

  });
  
  //delete
  test('consultancyAgencies delete', async () => {
    const user =  await funcs.deleteconsultancyAgencies();
    expect(user.data).toEqual({msg:'consultancyAgency was deleted successfully'})
  }); 
  // test BoardMembers
  //post
  test('consultancyAgencies BoardMember insert', async () => {
    const user =  await funcs.addconsultancyAgenciesBoardMember();
  expect(user.data).toEqual({"msg":"A Board member was added"})
  }),
 //get
  test('get consultancyAgencies BoardMembers', async () => {
    const user =  await funcs.getconsultancyAgenciesBoardMembers();
    //expect(user.data).toEqual({"data": [["AAA"]]})
  });
  //update
  test('update consultancyAgencies BoardMember', async () => {
    const user =  await funcs.updateconsultancyAgenciesBoardMembers();
    expect(user.data).toEqual({"msg":"BoardMember Updated successfully"})
  })
  
  //delete
  test('consultancyAgencies delete BoardMember', async () => {
    const user =  await funcs.deleteconsultancyAgenciesBoardMember();
    expect(user.data).toEqual({"msg":"BoardMember Deleted successfully"})
  });

  
    //post
    test('consultancyAgencies Past_Events insert', async () => {
        const user =  await funcs.addconsultancyAgenciesPast_Events();
      expect(user.data).toEqual({"msg":"A Past Event was added"})
      }),
     //get
      test('get consultancyAgencies Past_Events', async () => {
        const user =  await funcs.getconsultancyAgenciesPast_Events();
        //expect(user.data).toEqual({"data": [["AAA"]]})
      });
      //update
      test('update consultancyAgencies Past_Events', async () => {
        const user =  await funcs.updateconsultancyAgenciesPast_Events();
        expect(user.data).toEqual({"msg":"Past_Event Updated successfully"})
      })
      
      //delete
      test('consultancyAgencies delete Past_Events', async () => {
        const user =  await funcs.deleteconsultancyAgenciesPast_Events();
        expect(user.data).toEqual({"msg":"Past_Event Deleted successfully"})
      });
  
 
