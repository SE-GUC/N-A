const funcs = require('./functions');
test('adds 1 + 2 to be 3', () => {

    expect(funcs.add(1, 2)).toBe(3);
  
  });  test(`first coworkingspace's id should be this certain encrypted id  `, async () => {

    
    const user =  await funcs.getcoworkingspaces();
  
    expect(user.data.data[0]._id).toEqual("5c9cc8b3b19333217411d273")

  });
  test(`coworkingspace's data  should match the one being inserted  `, async () => {

    
    const user =  await funcs.testaddcoworkingspace();
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
  test(`coworkingspace's data  should match the one being inserted  `, async () => {

    
    const user =  await funcs.testaddcoworkingspace();
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
  test(`coworkingspace's data  should match the one being inserted  `, async () => {

    
    const user =  await funcs.testaddcoworkingspace();
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
  
  test(`first coworkingspace's first name should be updated to seif  `, async () => {

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
    const x =  await funcs.getcoworkingspaces();

    expect(x.data.data[0].FirstName).toEqual(expected.FirstName)

  });
  module.exports = {
    setupTestFrameworkScriptFile: './jest.setup.js'
  }
  
  // jest.setup.js
  jest.setTimeout(30000)
  
  test(`first coworkingspace's last name should be updated to kholy  `, async () => {

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
    const x =  await funcs.getcoworkingspaces();
    expect(x.data.data[0].LastName).toEqual(expected.LastName)

  });

  

  test(`first coworkingspace's Birth date should be updated to 09/08/1997  `, async () => {

    
    const user =  await funcs.testupdateBirthdate();
    const expected = {
      Birthdate: '1997-09-08T00:00:00.000Z'
    }
    const x =  await funcs.getcoworkingspaces();
    expect(x.data.data[0].Birthdate).toEqual(expected.Birthdate)

  });
  
  test(`first coworkingspace's basic information should be updated to media engineering and technology  `, async () => {

    
    const user =  await funcs.testupdateBasic_Info();
    const expected = {
      Basic_Info: 'media engineering and technology'
    }
    const x =  await funcs.getcoworkingspaces();
    expect(x.data.data[0].Basic_Info).toEqual(expected.Basic_Info)

  });
  test(`first coworkingspace's password should be updated to 'udntknwmypassword'  `, async () => {

    
    const user =  await funcs.testupdatepassword();
    const expected = {
      password: 'udntknwmyp'
    }
    const x =  await funcs.getcoworkingspaces();
    expect(x.data.data[0].password).toEqual(expected.password)

  });
  test(`first coworkingspace's email should be updated to 'random@gmail.com' `, async () => {

    
    const user =  await funcs.testupdatemail();
    const expected = {
      email: 'random@gmail.com'
    }
    const x =  await funcs.getcoworkingspaces();
    expect(x.data.data[0].email).toEqual(expected.email)

  });

    
 
