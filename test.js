 
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

 

const funcs = require('./functions');

test('adding 1 + 1 the result should be 2',()=>{
    expect(funcs.add(1,1)).toBe(2);

    module.exports = {
        setupTestFrameworkScriptFile: './jest.setup.js'
      }
      
      // jest.setup.js
      jest.setTimeout(30000)
});
test('Testing Get method ',async()=>{
    expect.assertions(3);//Verifies that a certain number of assertions is called. Leaving it out will lead to succeeding the test even if name doesnt match
    const test = await funcs.getLocationsid()
            expect(test).toBeDefined()
            expect(test.data._id).toEqual('5ca0c551baddba46db7b4006')
            expect(test.data.name).toEqual("zebra")

});

  test('Testing Post Method',async()=>{
      expect.assertions(5)
      const test = await funcs.postLocations()
      const location = {
        name: 'opera',
        country: 'egypt',
        city:'cairo',
         street: 'mohamedali',  
         capacity: 12,
      }
      expect(test.data.data.name).toEqual(location.name)
      expect(test.data.data.country).toEqual(location.country)
      expect(test.data.data.city).toEqual(location.city)
      expect(test.data.data.street).toEqual(location.street)
      expect(test.data.data.capacity).toEqual(location.capacity)

  });
  test('Testing Put Method for both name and capacity',async()=>{
    const test = await funcs.putLocations1()
    const location = {
        _id:'5ca0cd7ebaddba46db7b400c',
        name: 'redbull', 
        capacity: 2
    }
    const arr = await funcs.getLocationsid2(location._id)
    expect(arr.data.name).toEqual(location.name)
    //expect(arr.data.country).toEqual(location.country)
   // expect(arr.data.city).toEqual(location.city)
   // expect(arr.data.street).toEqual(location.street)
    expect(arr.data.capacity).toEqual(location.capacity)

});
test('Testing Delete Method', async () => {

    
    const location =  await funcs.deleteLocation();
    const expected = {
        _id:'5ca0f715baddba46db7b401a',
        name: null,
         capacity: null
        }
    const x =  await funcs.getLocationsid2('5ca0f715baddba46db7b401a');
    expect(expected.name).toBeNull();
    expect(expected.capacity).toBeNull();



  });
    
 
test('Testing Post Method for Reservation',async()=>{
          const pid = '5ca0c551baddba46db7b4006'
          const test = await funcs.postReservation(pid)
          const Reservation = {
            to: "10 am",
                from: "9 am",
                day: "Monday",
                ownerID: "mado"
          }
           const x =  await funcs.getLocationsid2('5ca0c551baddba46db7b4006');
          expect(x.reservations).toEqual(test.reservations)
          
    
      });
      test('Testing Put Method for review and reservation',async()=>{
        const pid = '5ca0c551baddba46db7b4006'
        const test = await funcs.putReview(pid)
        const Reservation = {
          to: "10 am",
              from: "9 am",
              day: "Monday",
              status: 1,
              ownerID: "mado"
        }
         const x =  await funcs.getLocationsid2('5ca0c551baddba46db7b4006');
        expect(x.reservations).toEqual(test.reservations)
        
  
    });
 
