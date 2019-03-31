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