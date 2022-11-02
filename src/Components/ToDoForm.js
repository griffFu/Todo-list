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
         <form classname="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className='flex flex-wrap py-4'>
              <div className='w-full md:w-1/2'>
                <label className='block' For="degree">{props.header}</label>
                <input className='block bg-gray-200'
                    type="text" 
                    placeholder='Education' 
                    value={educationInfo.degree} 
                    name ="degree"
                    onChange={handleChange}     
                />
              </div>
              <div className='w-full md:w-1/2'>
                <label className='block' For="degree">Description</label>
                <input className='block bg-gray-200'
                    type="text" 
                    placeholder='Description' 
                    value={educationInfo.degreeDesc} 
                    name ="degreeDesc"
                    onChange={handleChange} 
                />
              </div>
            </div>
            <button className='bg-gray-500 p-2 rounded-md'>Add Education</button>
         </form>
     </div>
   )
}

export default ToDoForm