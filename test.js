 
/**enter* @jest-environment node */

const funcs = require('./functions');
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
    newpartid = user.data.data._id
    window.partid= newpartid;
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
  
  test(`first partner's first name should be updated to seifo  `, async () => {

    expect.assertions(1)
      const user =await funcs.testupdateFName(partid);
    const expected = {
      Certificates: [],
      
            FirstName: 'seifo',
            LastName: 'sharkawy',
            Basic_Info: 'media engineering and technology',
            password: '54321 ',
            Birthdate: '1997-09-08T00:00:00.000Z',
            email: 'random@gmail.com',
            User_Category: 'Partner',
            
    }
    const x =  await funcs.getpartner(partid);

    expect(x.data.FirstName).toEqual(expected.FirstName)

  });
  module.exports = {
    setupTestFrameworkScriptFile: './jest.setup.js'
  }
  
  // jest.setup.js
  jest.setTimeout(30000)
  
  test(`first partner's last name should be updated to kholy  `, async () => {

    const user =  await funcs.testupdateLName(partid);
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
    const x =  await funcs.getpartner(partid);
    expect(x.data.LastName).toEqual(expected.LastName)

  });

  

  test(`first partner's Birth date should be updated to 09/08/1997  `, async () => {

    
    const user =  await funcs.testupdateBirthdate(partid);
    const expected = {
      Birthdate: '1997-09-08T00:00:00.000Z'
    }
    const x =  await funcs.getpartner(partid);
    expect(x.data.Birthdate).toEqual(expected.Birthdate)

  });
  
  test(`first partner's basic information should be updated to media engineering and technology  `, async () => {

    
    const user =  await funcs.testupdateBasic_Info(partid);
    const expected = {
      Basic_Info: 'media engineering and technology'
    }
    const x =  await funcs.getpartner(partid);
    expect(x.data.Basic_Info).toEqual(expected.Basic_Info)

  });
  test(`first partner's password should be updated to 'udntknwmypassword'  `, async () => {

    
    const user =  await funcs.testupdatepassword(partid);
    const expected = {
      password: 'udntknwmyp'
    }
    const x =  await funcs.getpartner(partid);
    expect(x.data.password).toEqual(expected.password)

  });
  test(`first partner's email should be updated to 'random@gmail.com' `, async () => {

    
    const user =  await funcs.testupdatemail(partid);
    const expected = {
      email: 'random@gmail.com'
    }
    const x =  await funcs.getpartner(partid);
    expect(x.data.email).toEqual(expected.email)

  });
  test(`partner's board member was deleted ' `, async () => {

    
    const user =  await funcs.testdeletebmember(partid);
    const expected = {
      BoardMembers: []
    }
    const x =  await funcs.getpartner(partid);
    expect(x.data.BoardMembers).toEqual(expected.BoardMembers)

  });
  test(`partner's past project was deleted ' `, async () => {

    
    const user =  await funcs.testdeleteproject(partid);
    const expected = {
      Past_Projects: []
    }
    const x =  await funcs.getpartner(partid);
    expect(x.data.Past_Projects).toEqual(expected.Past_Projects)

  });
  test(`partner's project was added ' `, async () => {

    
    const user =  await funcs.testupdatepastproject(partid);
    const s = 'Hilton Hotel'
    const expected = {
      Past_Projects:['Hilton Hotel']
    }
    const x =  await funcs.getpartner(partid);
    expect(x.data.Past_Projects).toEqual(expected.Past_Projects)

  });
  test(`partner's board member was added ' `, async () => {

    
    const user =  await funcs.testupdateboardmember(partid);
    const expected = {
      BoardMembers: ['ahmed yassin']
    }
    const x =  await funcs.getpartner(partid);
    expect(x.data.BoardMembers).toEqual(expected.BoardMembers)

  });
  test(`partner was deleted ' `, async () => {

    
    const user =  await funcs.testdeletepartner(partid);
    const expected = {
      Past_Projects: []
    }
    const x =  await funcs.getpartner(partid);
    expect(x.data).toEqual("it is not here")

  });

 




 
