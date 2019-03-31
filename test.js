const funcs = require('./Projecttestfunctions');

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

