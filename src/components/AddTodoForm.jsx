import { useState } from "react"

function AddTodoForm(props) {
    const activityArr = props.activityArr
    const setactivity = props.setactivity

    const [newactivity, setnewactivity] = useState("")
    function handleChange(evt) {
    setnewactivity(evt.target.value)
    }
    function addactvity(){
        setactivity([...activityArr,{id:activityArr.length+1,activity:newactivity}])
    }

    return (

        <div className="flex flex-col gap-3" >
            <h1 className="text-2xl font-medium">Manage Activity </h1>
            <div>
                <input value={newactivity} onChange={handleChange} type="text" className="border border-black bg-transparent p-1" placeholder="Next activity" />
                <button onClick={addactvity} className="bg-black text-white border border-black p-1">Add</button>
            </div>
        </div>
    )
}
export default AddTodoForm