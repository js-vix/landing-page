import Editions from "../components/Editions";
import EventInfo from "../components/EventInfo";
import Hero from "../components/Hero";
import Sponsors from "../components/Sponsors";

export default function Home() {
  return (
    <>
      <Hero />
      <Sponsors />
      <EventInfo />
      <Editions />
    </>
  );
}
