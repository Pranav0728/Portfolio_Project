import Image from "next/image";
import Header from "../components/sidebar/sidebar";

export default function Loading() {
  return (
    <main className="aboutnew">
      <Header />
      <section className="h-[120vh] mt-[-5rem] aboutnew-content w-[90%] flex justify-center items-center">
        <div className="flex timelinenew justify-center items-center h-full">
          <div className="loader"></div>
        </div>
      </section>
    </main>
  );
}
