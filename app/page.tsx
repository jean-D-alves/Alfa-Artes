import Contato from "@/src/components/Contato";
import Main from "@/src/components/Main";
import MapView from "@/src/components/MapView";
import Navbar from "@/src/components/Navbar";
import Portfólio from "@/src/components/Portfolio";
import Services from "@/src/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col bg-background">
      <Navbar />
      <Main />
      <Services />
      <Portfólio />
      <MapView />
      <Contato />
    </div>
  );
}
