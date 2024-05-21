import TodoItem from "./TodoItem"
function TodoList(props) {
    const activityArr = props.activityArr
    const setactivity = props.setactivity

    return (
        <div className="bg-purple-200 p-2 border rounded-md flex-grow">
            <h1 className="text-2xl font-medium">Today Activity</h1>

            {activityArr.length === 0 ? <p>you have no schedule</p> : ""}
            {
                activityArr.map(function (item, index) {
                    return <TodoItem id={item.id} activity={item.activity} index={index} activityArr={activityArr} setactivity={setactivity} />
                })
            }
        </div>
    )
}
export default TodoList