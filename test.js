const funcs = require('./functions');
test(`first Candidate 's id should be this certain encrypted id  `, async () => {
    const user =  await funcs.getCandidates();
    expect(user.data.data[0]._id).toEqual("5ca12dc90906934584e82afa")
  });
 test(`Candidate 's data  should match the one being inserted  `, async () => {
    const user =  await funcs.addCandidate();
    const expectation = {
            FirstName: 'ahmed',
            LastName: 'yassin',
            password: 'rana23',   
            Birthdate: '1/1/2001',
            email:'yassin@gmail.com',
            User_Category : 'Member'
    }
  expect(user.data.data.email).toMatch(expectation.email)
  expect(user.data.data.FirstName).toMatch(expectation.FirstName)
  expect(user.data.data.LastName).toMatch(expectation.LastName)
  expect(user.data.data.password).toMatch(expectation.password)
  }),
 test(`first Candidate 's first name should be updated to seif  `, async () => {
    expect.assertions(1)
      const user =await funcs.updateFName();
    const expected = {
      Certificates: [],
      _id: '5c9fc5b379d49213e88a8bd9',
            FirstName: 'seifo',
            LastName: 'sharkawy',
            password: '54321 ',
            Birthdate: '1997-09-08T00:00:00.000Z',
            email: 'random@gmail.com',
            User_Category: 'Candidate ',

    }
    const x =  await funcs.getCandidates();
    expect(x.data.data[0].FirstName).toEqual(expected.FirstName)
  });
  module.exports = {
    setupTestFrameworkScriptFile: './jest.setup.js'
  }

  // jest.setup.js
  jest.setTimeout(30000)

  test(`first Candidate 's last name should be updated to kholy  `, async () => {

    const user =  await funcs.updateLName();
    const expected = {
      Certificates: [],
      _id: '5c9fc5b379d49213e88a8bd9',
            FirstName: 'yassin',
            LastName: 'kholy',
            Basic_Info: 'web configuration and design',
            password: '12345',
            Birthdate: '2001-12-31T22:00:00.000Z',
            email: 'flinstone@gmail.com',
            User_Category: 'Candidate ',
    }
    const x =  await funcs.getCandidates();
    expect(x.data.data[0].LastName).toEqual(expected.LastName)

  });
  test(`first Candidate 's Birth date should be updated to 09/08/1997  `, async () => {


    const user =  await funcs.updateBirthdate();
    const expected = {
      Birthdate: '1997-09-08T00:00:00.000Z'
    }
    const x =  await funcs.getCandidates();
    expect(x.data.data[0].Birthdate).toEqual(expected.Birthdate)

  });
  test(`first Candidate 's password should be updated to 'udntknwmypassword'  `, async () => {
    const user =  await funcs.updatepassword();
    const expected = {
      password: 'udntknwmyp'
    }
    const x =  await funcs.getCandidates();
    expect(x.data.data[0].password).toEqual(expected.password)
  });
  test(`first Candidate 's email should be updated to 'random@gmail.com' `, async () => {


    const user =  await funcs.updatemail();
    const expected = {
      email: 'random@gmail.com'
    }
    const x =  await funcs.getCandidates();
    expect(x.data.data[0].email).toEqual(expected.email)

  });
  //delete
  test(`candidate delete`, async () => {
    const user =  await funcs.deletebmember();
    expect(user.data).toEqual({msg:'Candidate was deleted successfully'})
  });
  // test interests
  //post
  test(`Candidate interests insert  `, async () => {
    const user =  await funcs.addCandidateinterest();
  expect(user.data).toEqual({"msg":"done"})
  }),
  //get
  test(` get candidate interests`, async () => {
    const user =  await funcs.getCandidateinterests();
    expect(user.data).toEqual({"data": [["AAA"]]})
  });
  //update
  test(` update candidate interests`, async () => {
    const user =  await funcs.updatecandidateinterestss();
    expect(user.data).toEqual({"msg":"Attribute Updated successfully"})
  })
  //delete
  test(`candidate delete intereset`, async () => {
    const user =  await funcs.deletecandidateinterests();
    expect(user.data).toEqual({msg: 'Attribute Deleted successfully'})
  });
//test projects 
//post
test(`Candidate projects insert  `, async () => {
  const user =  await funcs.addCandidateproject();
expect(user.data).toEqual({"msg":"done"})
}),
//get 
 test(` get candidate projects`, async () => {
    const user =  await funcs.getCandidateproject();
    expect(user.data).toEqual({"data": [["AAA"]]})
  });
//update
test(` update candidate projects`, async () => {
  const user =  await funcs.updatecandidateprojects();
  expect(user.data).toEqual({"msg":"Attribute Updated successfully"})
});
//delete
test(`candidate delete project`, async () => {
  const user =  await funcs.deletecandidateproject();
  expect(user.data).toEqual({msg: 'Attribute Deleted successfully'})
});
  //test certificate
//post 
test(`Candidate certificates insert  `, async () => {
  const user =  await funcs.addCandidatecertificate();
expect(user.data).toEqual({"msg":"done"})
}),
//get
 test(` get candidate certificate`, async () => {
    const user =  await funcs.getCandidatecertificates();
    expect(user.data).toEqual({"data": [["AAA"]]})
  });
//update
test(` update candidate certificates`, async () => {
  const user =  await funcs.updatecandidatecertificates();
  expect(user.data).toEqual({"msg":"Attribute Updated successfully"})
});
//delete
test(`candidate delete certificate`, async () => {
  const user =  await funcs.deletecandidatecertificate();
  expect(user.data).toEqual({msg: 'Attribute Deleted successfully'})
});
//test skills
//post
test(`Candidate skills insert  `, async () => {
  const user =  await funcs.addCandidateskills();
  const candidate=await funcs.getCandidates()
expect(user.data).toEqual({"msg":"done"})
})
//get
 test(` get candidate skills`, async () => {
    const user =  await funcs.getCandidateskills();
    expect(user.data).toEqual({"data": [["AAA"]]})
  });
//update
test(` update candidate skills`, async () => {
  const user =  await funcs.updatecandidateskills();
  expect(user.data).toEqual({"msg":"Attribute Updated successfully"})
});
//delete
test(`candidate delete skills`, async () => {
  const user =  await funcs.deletecandidateskills();
  expect(user.data).toEqual({msg: 'Attribute Deleted successfully'})
});
//testavgrating
//get
//testrating
//get
test(` get candidate rating`, async () => {
  const user =  await funcs.getCandidaterating();
  expect(user.data).toEqual({"data": [[{}]]})
});
//post
test(`Candidate rating insert  `, async () => {
  const user =  await funcs.addCandidaterating();
  const candidate=await funcs.getCandidates()
expect(user.data).toEqual({"msg":"done"})
})
//update
test(` update candidate skills`, async () => {
  const user =  await funcs.updatecandidaterating();
  expect(user.data).toEqual({"msg":"Attribute Updated successfully"})
});
//delete
test(`candidate delete skills`, async () => {
  const user =  await funcs.deletecandidaterating();
  expect(user.data).toEqual({msg: 'Attribute Deleted successfully'})
});
//avg_rating
test(` get candidate avgrating`, async () => {
  const user =  await funcs.getCandidaterating();
  expect(user.data).toBe(1);
});