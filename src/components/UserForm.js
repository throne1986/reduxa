import React from 'react'
import { useForm } from "react-hook-form";

function UserForm() {
    const { edit, handleSubmit} = useForm();
 
    return (
        <div>
            <form onSubmit={handleSubmit}>
                 <input name="name" defaultValue="test" ref={edit} />
                 <input type="submit" />
            </form>
        </div>
    )
}

export default UserForm
