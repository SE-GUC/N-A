import React, { Component } from 'react'

export class All_Searches extends Component {

    state={

        part:[]
,
        projects:[],
    
        workingspace: []
        ,
        consultancy:[],
        
        candidates:[],
        
    
    
      }
    componentDidMount() {


        axios.get(`https://lirtenhub-na.herokuapp.com/api/Partner`)
    
          .then(res => {
    
            const partner = res.data.data;
            this.setState({part:searchpartner(namekey,partner)})
           
    
          })  
          
        axios.get(`https://lirtenhub-na.herokuapp.com/api/candidates`)
    
        .then(res => {
  
          const candidate = res.data.data;
            this.setState({candidates:searchcandidate(namekey,candidate)})
          
  
        }) 
        axios.get(`https://lirtenhub-na.herokuapp.com/api/consultancyagencies`)
    
        .then(res => {
  
          const agency = res.data.data;
          this.setState({consultancy:searchconsultancy(namekey,agency)})
         
  
        })
        axios.get(`https://lirtenhub-na.herokuapp.com/api/co_working_spaces`)
    
        .then(res => {
  
          const workingspce = res.data.data;
          this.setState({workingspace:searchworkingsp(namekey,workingspce)})
  
  
        }) 
        axios.get(`https://lirtenhub-na.herokuapp.com/api/projects`)
    
        .then(res => {
  
          const project = res.data.data;
          this.setState({projects:searchproject(namekey,project)})
  
        })
        }

         searchpartner(nameKey, myArray){
             var result = []
            for (var i=0; i < myArray.length; i++) {
                if (myArray[i].FirstName === nameKey) {
                    result.push(myArray[i])
                }
                if (myArray[i].LastName === nameKey) {
                    result.push(myArray[i])
                }
                if (myArray[i].Basic_Info === nameKey) {
                    result.push(myArray[i])
                }
                if (myArray[i].email === nameKey) {
                    result.push(myArray[i])
                }
               
                else 
                return null
            }
            return result 
        }
        searchcandidate(nameKey, myArray){
            var result = []
            for (var i=0; i < myArray.length; i++) {
            if (myArray[i].FirstName === nameKey) {
                result.push(myArray[i])
            }
            if (myArray[i].LastName === nameKey) {
                result.push(myArray[i])
            }
            if (myArray[i].insterests === nameKey) {
                result.push(myArray[i])
            }
            if (myArray[i].email === nameKey) {
                result.push(myArray[i])
            }
           
            else 
            return null
        }
        return result
        }
        searchconsultancy(nameKey, myArray){
            for (var i=0; i < myArray.length; i++) {
                if (myArray[i].FirstName === nameKey) {
                    result.push(myArray[i])
                }
                if (myArray[i].LastName === nameKey) {
                    result.push(myArray[i])
                }
                if (myArray[i].Basic_Info === nameKey) {
                    result.push(myArray[i])
                }
                if (myArray[i].email === nameKey) {
                    result.push(myArray[i])
                }
                else
                return null 
            }
            return result
        }
        searchworkingsp(nameKey, myArray){
            for (var i=0; i < myArray.length; i++) {
                if (myArray[i].name === nameKey) {
                    return myArray[i];
                }
            }
        }
        searchproject(nameKey, myArray){
            for (var i=0; i < myArray.length; i++) {
                if (myArray[i].name === nameKey) {
                    return myArray[i];
                }
            }
        }
        
  render() {
    
    return(
     this.state.part.map((partner)=>(

        <Partner partner={partner}/>    
  
      )),
      this.state.Projects.map((P)=>(
        <Project P={P}/>    
      )),
      this.state.locations.map((L)=>(
        <Location L={L}/>    
      ))
      
     )
  }
}

export default All_Searches
