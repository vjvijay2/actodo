import { useState } from "react"
import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
function Todoform() {
    const [activityArr, setactivity] = useState([
        {
            id: 1,
            activity: "go for walk"
        },
        {
            id: 2,
            activity: "go for walk"
        },
    ])
    return (
        <div>
            <div className="flex gap-5 flex-wrap ">
                <AddTodoForm activityArr={activityArr} setactivity={setactivity} />
                <TodoList activityArr={activityArr} setactivity={setactivity} />
            </div>
        </div>
    )
}
export default Todoform