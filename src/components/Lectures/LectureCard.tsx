interface Lecturer {
  name: string;
  pic?: string;
  linkedin?: string;
}

export interface LectureCardProps {
  title: string;
  lecturers: Lecturer | Lecturer[];
}

export default function LectureCard(props: LectureCardProps) {
  const { title, lecturers } = props;

  return (
    <div className="h-[438px] p-4 flex flex-col justify-between font-nb-architekt-regular bg-gray-100 rounded-md relative">
      <h3 className="font-nb-architekt-bold text-3xl max-w-[427px]">{title}</h3>
      <Lecturers lecturers={lecturers} />
      <img
        src="JS.svg"
        className="absolute bottom-0 right-0 w-[380px] h-[266px] opacity-25 p-3"
      />
    </div>
  );
}

function Lecturers({
  lecturers,
}: {
  lecturers: LectureCardProps["lecturers"];
}) {
  return (
    <div className="flex items-center justify-between gap-2 z-[1]">
      <LecturerNames lecturers={lecturers} />
      <LecturerPics lecturers={lecturers} />
    </div>
  );
}

function LecturerNames({ lecturers }: { lecturers: Lecturer | Lecturer[] }) {
  if (Array.isArray(lecturers)) {
    return (
      <div className="flex flex-col md:flex-row">
        {lecturers.map((lecturer, i) => (
          <div key={i} className="flex items-center gap-2">
            <LecturerName name={lecturer.name} linkedin={lecturer.linkedin} />
            {i !== lecturers.length - 1 ? (
              <span className="text-lg md:pr-2">/</span>
            ) : null}
          </div>
        ))}
      </div>
    );
  }

  return <LecturerName {...lecturers} />;
}

function LecturerName({ name, linkedin }: Lecturer) {
  return (
    <div className="flex gap-2">
      <p className="font-nb-architekt-bold text-2xl">{name}</p>
      {linkedin ? (
        <a href={linkedin} target="_blank">
          <img src="/icons/linkedin.svg" alt="Linkedin" />
        </a>
      ) : null}
    </div>
  );
}

function LecturerPics({ lecturers }: { lecturers: Lecturer | Lecturer[] }) {
  if (Array.isArray(lecturers)) {
    const pics = [];
    for (const l of lecturers) {
      if (l.pic) pics.push(l.pic);
    }

    const avatarOverflowSize = 72 - 24;
    const containerWidth = (size: number): number =>
      72 + (size - 1) * avatarOverflowSize;
    const imgPosition = (i: number): number => i * avatarOverflowSize;

    return (
      <div
        className="relative h-[72px]"
        style={{
          width: `${containerWidth(pics.length)}px`,
        }}
      >
        {pics.map((pic, i) => (
          <img
            key={i}
            className="w-[72px] h-[72px] absolute top-0"
            style={{
              zIndex: i,
              left: `${imgPosition(i)}px`,
            }}
            src={pic}
            alt="Lecturer picture"
          />
        ))}
      </div>
    );
  }

  return lecturers.pic ? (
    <img className="w-[72px] h-[72px]" src={lecturers.pic} alt="Lecturer" />
  ) : null;
}
