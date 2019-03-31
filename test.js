const funcs = require('./Projecttestfunctions');

// test('Project amount increases by 1',async()=>{
// // expect.assertions(1)
//  const project=await funcs.getProject()

//  // console.log(project.data.data.length)
//    const z=await funcs.InsertProject();
//  //  console.log(z.data.msg)
//   const project2=await funcs.getProject()
// //console.log(project2.)
//   expect(project.data.data.length).toBe(project2.data.data.length-1)
// });

test('update name',async()=>{
     //expect.assertions(1)
     const project=await funcs.updateName()
     //console.log(project.data.msg)

      expect(project.data.msg).toEqual('Project Updated Succsefully')
    });