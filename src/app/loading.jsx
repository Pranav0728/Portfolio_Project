import Image from "next/image";
import Header from "../components/sidebar/sidebar";

export default  function loading(){
    return(
        <div>
            <Header />
           <div className="h-screen w-full bg-white">
            <div className="flex justify-center items-center h-full">
            <div className="w-15 h-15 border-2 border-blue-600 rounded-full loader"></div>
            </div>
            </div>
        </div>
    );
}