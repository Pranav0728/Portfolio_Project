import Image from "next/image";
import Header from "../components/sidebar/sidebar";

export default  function loading(){
    return(
        <main className="abounew">
            <Header />
           <section className="h-screen aboutnew-content w-[120%] flex justify-center items-center">
            <div className="flex timelinenew justify-center items-center h-full">
            <div className="w-10 h-10 border-2 border-blue-600 rounded-full loader"></div>
            </div>
            </section>
        </main>
    );
}