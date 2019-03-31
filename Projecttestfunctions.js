const axios = require('axios');
const functions = {
    
    getProject: async () => {
    const Project = await axios.get('http://localhost:3000/api/projects/')
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
               name: 'jtest2',
               
           })
       },
    updatestatus:async()=>{
        return  await axios.put('http://localhost:3000/api/projects/status/5ca0305c5bb45716a83a51b5', {
               status: 'Allocation',
               
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
               exp_level: 'expert',
               
           })
       },

    updatecomitment_level:async()=>{
        return  await axios.put('http://localhost:3000/api/projects/comitment_level/5ca0305c5bb45716a83a51b5', {
            comitment_level: '5 days a week',
               
           })
       },
    updateprice:async()=>{
        return  await axios.put('http://localhost:3000/api/projects/price/5ca0305c5bb45716a83a51b5', {
            price: '500',
               
           })
       },  
    updatePaymentType:async()=>{
        return  await axios.put('http://localhost:3000/api/projects/PaymentType/5ca0305c5bb45716a83a51b5', {
            PaymentType: 'Other',
               
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
            MembersNeeded: '999',
               
           })
       },

    updatemain_skill:async()=>{
        return  await axios.put('http://localhost:3000/api/projects/main_skill/5ca0305c5bb45716a83a51b5', {
            main_skill: 'computer nerd',
               
           })
       },

    
};
module.exports = functions;