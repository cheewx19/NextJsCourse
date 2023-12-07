import Hero from "@/components/hero";
import reliabilityImg from "public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <div>
      Reliabiltiy Page
      <Hero imgData={reliabilityImg} imgAlt="Welding" title="Super high reliability hosting" />
    </div>
  );
}
