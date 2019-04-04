const funcs = require('./functions');
test(`first Candidate 's first name should be updated to Mahmoud  `, async () => {
    const user =await funcs.updateFNameadmin(zid);
  const expected = {
          FirstName: 'Mahmoud',
  }
  expect(user.data.data).toEqual(expected.FirstName)
});
test(`first Candidate 's last name should be updated to kholy  `, async () => {
  const user =  await funcs.updateLNameadmin(zid);
  const expected = {
    LastName:'seliem'
  }
  expect(user.data.data).toEqual(expected.LastName)
  });
test(`first Candidate 's Birth date should be updated to 09/08/1997  `, async () => {
  const user =  await funcs.updatebirthdateadmin(zid);
  const expected = {
    Birthdate: '1997-09-08'
  }
  expect(user.data.data).toEqual(expected.Birthdate)

});
test(`first Candidate 's password should be updated to 'udntknwmypassword'  `, async () => {
  const user =  await funcs.updatepaswordadmin(zid);
  const expected = {
    password:'123456789'
  }
  expect(user.data.data).toEqual(expected.password)
});
test(`first Candidate 's email should be updated to 'random@gmail.com' `, async () => {


  const user =  await funcs.updateemailadmin(zid);
  const expected = {
    email:'random@random.com'
  }
  expect(user.data.data).toEqual(expected.email)

});
//delete
test(`candidate delete`, async () => {
  const user =  await funcs.deleteadmin(zid);
  expect(user.data).toEqual({msg:'admin was deleted successfully'})
});
