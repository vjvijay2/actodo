import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props) {
    const [eUsername, setUsername] = useState()
    const [ePassword, setPassword] = useState()
    const [rUser, setruser] = useState(true)
    const users = props.users
    const navigate=useNavigate()


    function Checkuser() {
        var userfound = false

        users.forEach(function (item) {
            if (item.username = eUsername && item.password === ePassword) {
                console.log("login succesfully")
                userfound = true
                navigate("/landing", {state:{user:eUsername}})

            }
            if(userfound===false){
                console.log("failed")
                setruser(false)
               }
        })

    }
    function handleUinput(evt) {
        setUsername(evt.target.value)

    }
    function handlePinput(evt) {

        setPassword(evt.target.value)

    }


    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 boreder rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {rUser ? <p>I help you manage your activity after you login :)</p> : <p>Please sign up to add activity</p>}
                <div className="flex flex-col my-2 gap-2 ">
                    <input type="text"
                        className="border-black border rounded-md bg-transparent w-52 p-1"
                        placeholder="Username" onChange={handleUinput} />

                    <input type="text"
                        className="border-black border rounded-md bg-transparent w-52 p-1"
                        placeholder="Password" onChange={handlePinput} />

                    <button className="bg-[#8274DA] w-24 p-1 rounded-md" onClick={Checkuser}>Login</button>
                    <p> I Don't have an Account? <Link to={"/signup"}>Signup</Link></p>

                </div>

            </div>
        </div>

    )



}
export default Login