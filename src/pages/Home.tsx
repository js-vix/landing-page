import Editions from "../components/Editions";
import EventInfo from "../components/EventInfo";
import Hero from "../components/Hero";
import Lectures from "../components/Lectures";
import Sponsors from "../components/Sponsors";

export default function Home() {
  return (
    <>
      <Hero />
      <Sponsors />
      <Lectures />
      <EventInfo />
      <Editions />
    </>
  );
}
