import Hero from "@/components/hero";
import performanceImg from "public/performance.jpg";

export default function PerformancePage() {
  return (
    <div>
      Performance Page
      <Hero imgData={performanceImg} imgAlt="Welding" title="We serve high performance applications" />
    </div>
  );
}
