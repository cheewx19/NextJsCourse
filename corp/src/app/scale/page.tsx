import Hero from "@/components/hero";
import scaleImg from "public/scale.jpg";

export default function ScalePage() {
  return (
    <div>
      Scale Page
      <Hero imgData={scaleImg} imgAlt="steel factory" title="Scale your app to infinity" />
    </div>
  );
}
