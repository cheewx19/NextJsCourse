import Hero from "@/components/hero";
import homeImg from "public/home.jpg";

export default function Home() {
  return (
    <div>
      Home Page
      <Hero imgData={homeImg} imgAlt="Car Factory" title="Professional Cloud Hosting" />
    </div>
  );
}
