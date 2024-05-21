function TodoItem(props) {
    const activityArr = props.activityArr
    const setactivity = props.setactivity
    function handlleDelete(deleteid) {
        var temparr = activityArr.filter(function (item) {
            if (item.id === deleteid) {
                return false
            } else {
                return true
            }

        })
        setactivity(temparr)

    }


    return (
        <div className="flex justify-between">
            <p>{props.index + 1}.{props.activity}</p>
            <button className="text-red-600" onClick={() => { handlleDelete(props.id) }} >Delete</button>
        </div>
    )
}
export default TodoItem