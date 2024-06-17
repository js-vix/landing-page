export interface LectureCardProps {
  title: string;
  lecturerNames: string | string[];
  twitterHandle?: string;
  lecturerPics?: string | string[];
}

export default function LectureCard(props: LectureCardProps) {
  const { title, lecturerNames, twitterHandle, lecturerPics } = props;

  return (
    <div className="p-4 flex flex-col gap-[142px] font-nb-architekt-regular bg-gray-100 rounded-md">
      <h3 className="font-nb-architekt-bold text-3xl max-w-[427px]">{title}</h3>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <LecturerNames name={lecturerNames} />
          <TwitterHandle twitterHandle={twitterHandle} />
        </div>
        <LecturerPics pics={lecturerPics} />
      </div>
    </div>
  );
}

function LecturerNames({ name }: { name: LectureCardProps["lecturerNames"] }) {
  const nameFormatted = Array.isArray(name) ? name.join(" / ") : name;

  return (
    <span className="font-nb-architekt-bold text-2xl">{nameFormatted}</span>
  );
}

function TwitterHandle({ twitterHandle }: { twitterHandle?: string }) {
  if (!twitterHandle) return null;
  return <span className="text-gray-light">{twitterHandle}</span>;
}

function LecturerPics({ pics }: { pics?: LectureCardProps["lecturerPics"] }) {
  if (!pics) return null;

  const avatarOverflowSize = 72 - 24;
  const containerWidth = (size: number): number =>
    72 + (size - 1) * avatarOverflowSize;
  const imgPosition = (i: number): number => i * avatarOverflowSize;

  if (Array.isArray(pics)) {
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

  return <img className="w-[72px] h-[72px]" src={pics} alt="Lecturer" />;
}
