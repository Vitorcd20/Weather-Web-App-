import { Header } from "@/components/header";
import { MainContent } from "@/components/main-content";

export default function Home() {
  return (
    <>
      <div className="flex justify-center mt-[40px]">
        <Header />
      </div>
      <div className="flex justify-center mt-[40px]">
        <h1 className="w-[731px] h-[62px] text-white text-center text-5xl font-semibold">
          How's the sky looking today?
        </h1>
      </div>
      <div className="flex justify-center mt-4">
        <div className="rounded-lg">
          <MainContent />
        </div>       
      </div>
    </>
  );
}
