import Image from "next/image";
import Header from "../components/sidebar/sidebar";

export default  function loading(){
    return(
        <div>
            <Header />
           <div className="h-screen w-full flex justify-center items-center">
            <div className="flex justify-center items-center h-full">
            <div className="w-10 h-10 border-2 border-blue-600 rounded-full loader"></div>
            </div>
            </div>
        </div>
    );
}