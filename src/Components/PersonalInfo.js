import React, {useState} from 'react'

function PersonalInfo() {

    const [firstName, setFirstName] = useState("First Name")
    const [isEditable,setIsEditable] = useState(false);

    const edit = () => {
        if (firstName === ""){
            setFirstName("First Name")
        }
        setIsEditable(!isEditable);
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setFirstName(value)
    }


    
    return isEditable ? (
        <div className='flex'>
            <form className='content-center' onSubmit={edit}>
                <input 
                type="text" 
                value={firstName}
                autoFocus
                onFocus = {e => e.currentTarget.select()}
                onChange={handleChange}
                />

            </form>

        </div>
        )
        :
        (
        <div onClick={edit}>
            <p>{firstName}</p>
        </div>
        )
    
}

export default PersonalInfo