const funcs = require('./functions');
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
//testrating/*
/*//post
test(`Candidate rating insert  `, async () => {
  const user =  await funcs.addCandidaterating(cid);
  const expected={
    Ratings:[1,"5ca0dc9c47286e02c049f6cdcdcfa","5ca0dc9c47286e02c049f6fa","5ca0dc9c47286eefrfrfre2"]
  }
  const x =  await funcs.getCandidates(cid);
expect(x.data.Ratings).toEqual(expected.Ratings)
}),
//get
test(` get candidate rating`, async () => {
  const user =  await funcs.getCandidaterating(id);
  expect(user.data.data).toEqual([[1, "5ca0dc9c47286e02c049f6cdcdcfa", "5ca0dc9c47286e02c049f6fa", "5ca0dc9c47286eefrfrfre2"]])
}),
//update
test(` update candidate rating`, async () => {
  jest.setTimeout(30000)
  const user =  await funcs.updatecandidaterating(cid);
  const x =  await funcs.getCandidates(cid);
  expect(user.data).toEqual()
}),
//testavgrating
//avg_rating
test(` get candidate avgrating`, async () => {
  jest.setTimeout(30000)
  const user =  await funcs.getCandidateavgrating(cid);
  expect(user).toEqual(2);
}),
//delete
test(`candidate delete rating`, async () => {
  const user =  await funcs.deletecandidateskills(cid);
  const x =  await funcs.getCandidates(cid);
  expect(x.data.Ratings).toEqual([])
})*///,*/
//delete
test(`candidate delete`, async () => {
  const user =  await funcs.deletecandidate(cid);
  expect(user.data).toEqual({data: "Candidate was deleted successfully"})
})
