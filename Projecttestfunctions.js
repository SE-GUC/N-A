const axios = require('axios');
const functions = {
    
    getProject: async () => {
    const Project = await axios.get('http://localhost:3000/api/projects/')
    return Project
    },
    getProjectID: async (id) => {
        const Project = await axios.get('http://localhost:3000/api/projects/'+id)
        return Project
        },
    InsertProject:async()=>{
     return   axios.post('http://localhost:3000/api/projects/', {
            name: 'jtest1',
            descreption:'jtest1jtest1jtest1jtest1jtest1jtest1jtest1jtest1jtest1jtest1jtest1jtest1',
            Payment_Type:'Online',
            partner_id:'1',
            need_Consultancy:'false',
            main_skill:'tester'
        })
    },
    updateName:async()=>{
        return  await axios.put('http://localhost:3000/api/projects/name/5ca0305c5bb45716a83a51b5', {
           "name": 'jtestupname'
               
           })
       },
    updatestatus:async()=>{
        return  await axios.put('http://localhost:3000/api/projects/status/5ca0305c5bb45716a83a51b5', {
               status: 'Review',
               
           })
       },
    updateapproved:async()=>{
        return  await axios.put('http://localhost:3000/api/projects/approved/5ca0305c5bb45716a83a51b5', {
               approved: 'true',
               
           })
       },
    updateExpected_Duration:async()=>{
        return  await axios.put('http://localhost:3000/api/projects/Expected_Duration/5ca0305c5bb45716a83a51b5', {
            Expected_Duration: '24hours',
               
           })
       },
    updateexp_level:async()=>{
        return  await axios.put('http://localhost:3000/api/projects/exp_level/5ca0305c5bb45716a83a51b5', {
            least_exp_level_needed: 'expert',
               
           })
       },

    updatecomitment_level:async()=>{
        return  await axios.put('http://localhost:3000/api/projects/comitment_level/5ca0305c5bb45716a83a51b5', {
            comitment_level_needed: '5 days a week',
               
           })
       },
    updateprice:async()=>{
        return  await axios.put('http://localhost:3000/api/projects/price/5ca0305c5bb45716a83a51b5', {
            price: 500,
               
           })
       },  
    updatePaymentType:async()=>{
        return  await axios.put('http://localhost:3000/api/projects/PaymentType/5ca0305c5bb45716a83a51b5', {
            Payment_Type: 'Other',
               
           })
       },
    updateconsultancy_agency_id:async()=>{
        return  await axios.put('http://localhost:3000/api/projects/consultancy_agency_id/5ca0305c5bb45716a83a51b5', {
            consultancy_agency_id: '4',
               
           })
       },
    updateneed_Consultancy:async()=>{
        return  await axios.put('http://localhost:3000/api/projects/need_Consultancy/5ca0305c5bb45716a83a51b5', {
            need_Consultancy: 'true',
               
           })
       },        
    updateMembersNeeded:async()=>{
        return  await axios.put('http://localhost:3000/api/projects/MembersNeeded/5ca0305c5bb45716a83a51b5', {
            members_needed: 999,
               
           })
       },

    updatemain_skill:async()=>{
        return  await axios.put('http://localhost:3000/api/projects/main_skill/5ca0305c5bb45716a83a51b5', {
            main_skill: 'computer nerd',
               
           })
       },
    delete_project:async(idx)=>{
       
       
        return  await axios.delete('http://localhost:3000/api/projects/'+idx)  
        
    },
    Addskill:async()=>{
        return  await axios.put('http://localhost:3000/api/projects/addSkill/5ca0305c5bb45716a83a51b5', {
            Skill: 'jtestaddskill',
               
           })
       },
    Addattrib:async()=>{
        return  await axios.put('http://localhost:3000/api/projects/addattrib/5ca0305c5bb45716a83a51b5', {
            attribute: 'attributejtest',
               
           })
       },
    DELskill:async()=>{
        return  await axios.delete('http://localhost:3000/api/projects/delskill/5ca0305c5bb45716a83a51b5',{
        data:{
        Skill: 'jtestaddskill'
        }      
           })
       },
    DELattrib:async()=>{
        return  await axios.delete('http://localhost:3000/api/projects/delattrib/5ca0305c5bb45716a83a51b5', {
        data:{   
        attribute: 'attributejtest',
        }     
           })
       },
    notyet:async()=>{
        const Project = await axios.get('http://localhost:3000/api/projects/approved/notyet')
        return Project
    },
    Approved:async()=>{
        const Project = await axios.get('http://localhost:3000/api/projects/approved/Yes')
        return Project
    },
    DissApproves:async()=>{
        const Project = await axios.get('http://localhost:3000/api/projects/approved/No')
        return Project
    },
    Apply:async()=>{
        return await axios.put('http://localhost:3000/api/projects/apply/5ca0305c5bb45716a83a51b5',{
            
                memberid:"jtestmemberid"
         })
    },
    Assign:async()=>{
        return  await axios.put('http://localhost:3000/api/projects/assign/5ca0305c5bb45716a83a51b5',{
            
            memberid:"jtestmemberid"
         })
    },
    NeedCon:async()=>{
      return await axios.get('http://localhost:3000/api/projects/Consultancy/needed')
    },
    Pending:async()=>{
        return  await axios.get('http://localhost:3000/api/projects/Pending/member')
    },
    Avalible:async()=>{
        return  await axios.get('http://localhost:3000/api/projects/View/Avalible')
    },
    Certified:async()=>{
        return  await axios.post('http://localhost:3000/api/projects/certified/5c95271ff92aa8054c9a00dd',{
            
                id:"5c9fea1562abd31b80a766c7"
            
        })
    }
};
module.exports = functions;