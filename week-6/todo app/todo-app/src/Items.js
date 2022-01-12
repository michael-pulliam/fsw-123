
import { useState } from "react"
import ItemFormHandler from "./ItemFormHandler"

export default function Items({ deleteData, btnText, editData, title, _id}) {
    const [editToggle, setEditToggle] = useState(false)
    
    return (
        <div id="items">
            { !editToggle ?
            <>
            <h1>{title}</h1>
            <button onClick={() => deleteData(_id)} className="delete-btn" >Delete</button>
            <button onClick={() => setEditToggle(prevToggle => !prevToggle)} className="edit-btn">Edit</button>
            </>
            :
            <ItemFormHandler
            title={title}
            _id={_id}
            btnText='Update'
            submit={editData}
            />
            }
        </div>
    )
}
