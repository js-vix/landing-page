import Editions from "../../components/editions";
import EventInfo from "../../components/event-info";
import Hero from "../../components/hero";
import Lectures from "../../components/lectures";
import Sponsors from "../../components/sponsors";

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
