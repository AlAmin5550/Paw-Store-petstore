import Homepage from "@/components/Homepage/Homepage";
import Navbar from "@/components/Shared/Navbar";


export default function Home() {
  return (
    <div >
      <main className="relative">
        <Navbar />
        <Homepage />
      </main>
    </div>
  );
}
