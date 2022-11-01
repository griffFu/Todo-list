import React, {useState, useRef, useEffect} from 'react'
//props.edit ? degree: props.edit.value ''
//need to figure out how to get the object upsted based on the edit condition
function ToDoForm(props) {
   const[educationInfo, setEducationInfo] = useState(
     props.edit ? {degree: props.edit.degree,
                  degreeDesc: props.edit.degreeDesc}

   :
      {degree:"",
      degreeDesc:""})

   
  

   const handleChange = (e) => {
     const value = e.target.value;
     setEducationInfo({
       ...educationInfo,
       [e.target.name]: value
     })
   }

   const handleSubmit = (e) => {
     e.preventDefault();

     props.onSubmit({
       id: Math.floor(Math.random() * 1000),
       degree: educationInfo.degree,
       degreeDesc: educationInfo.degreeDesc,
     });

     setEducationInfo('');
   };


   return (
     <div>
         <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='Add a todo' 
                value={educationInfo.degree} 
                name ="degree"
                onChange={handleChange}
                
            />
            <input 
                type="text" 
                placeholder='Add a todo' 
                value={educationInfo.degreeDesc} 
                name ="degreeDesc"
                onChange={handleChange}
       
                
            />
            <button>Add todo</button>
         </form>
     </div>
   )
}

export default ToDoForm