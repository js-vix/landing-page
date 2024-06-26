import Button from "@/components/button";
import LectureCard, {
  type LectureCardProps,
} from "@/components/lectures/LectureCard";

export default function Lectures() {
  return (
    <section className="flex flex-col gap-8 px-4 lg:px-[217px]">
      <div className="flex flex-col gap-6">
        <h2 className="text-5xl font-nb-architekt-bold">Palestras_</h2>
        <p className="text-gray-light font-geist-mono-bold text-lg">
          Descubra quais são os temas, e quem irá apresentar as palestras nessa
          nova edição da JS-VIX.
        </p>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row lg:grid lg:grid-cols-2">
        {LECTURES.map((lecture, i) => (
          <LectureCard
            key={i}
            title={lecture.title}
            lecturers={lecture.lecturers}
          />
        ))}
      </div>
      <div className="flex flex-col gap-[200px]">
        <h3 className="font-nb-architekt-bold text-3xl max-w-[427px]">
          Quer ser um palestrante?
        </h3>
        <Button className="w-fit gap-6 pr-1 h-fit py-1">
          Entre em contato
          <div className="p-2 bg-white rounded-full">
            <img src="/icons/arrow-right.svg" className="w-8" />
          </div>
        </Button>
      </div>
    </section>
  );
}

const LECTURES: LectureCardProps[] = [
  {
    title: "WTF JS",
    lecturers: [
      {
        name: "Mikael",
        linkedin: "https://www.linkedin.com/in/mikaelhadler",
        pic: "/contribuidores/mikael.png",
      },
      {
        name: "Erasmo",
        linkedin: "https://www.linkedin.com/in/erasmo-dev",
        pic: "/contribuidores/erasmo.png",
      },
    ],
  },
  {
    title: "Criando aplicações com Firebase e Javascript",
    lecturers: {
      name: "Caio Fuzatto",
      linkedin: "https://www.linkedin.com/in/itsmicaio",
      pic: "/contribuidores/caio-fuzatto.png",
    },
  },
  {
    title: "Aonde o JS pode te levar",
    lecturers: {
      name: "Bernardo S",
      linkedin: "https://www.linkedin.com/in/bernardosm",
      pic: "/contribuidores/bernardo-s.png",
    },
  },
];
