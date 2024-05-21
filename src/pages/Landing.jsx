import { useLocation } from "react-router-dom"
import Header from "../components/Header";
import Card from "../components/Card";
import Todoform from "../components/Todoform";
function Landing() {
    const data=useLocation()
    return (
        <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded-md">
                <Header username={data.state.user}/>

                <div className="flex justify-between gap-7 my-5 flex-wrap">
                    <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
                    <Card bgcolor={"#FD6663"} title={"December"} subtitle={"14.2"} />
                    <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />

                </div>
                <div>
                    <Todoform />
                </div>
            </div>
        </div>
    );

}
export default Landing