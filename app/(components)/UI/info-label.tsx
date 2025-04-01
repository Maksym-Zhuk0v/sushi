interface IInfoLabel {
  title: string;
  body: string;
}

export const InfoLabel = ({ title, body }: IInfoLabel) => {
  return (
    <div className="grow w-1 border-dflt rounded-2xl h-full flex flex-col items-center justify-center gap-1">
      <div className="flex gap-1">
        <div className="starIcon" />
        <div className="starIcon" />
        <div className="starIcon" />
        <div className="starIcon" />
        <div className="starIcon" />
      </div>
      <p className="text-xs sm:text-sm md:text-2xl lg:text-base xl:text-2xl">
        {title}
      </p>
      <p className="text-xs tracking-wider">{body}</p>
    </div>
  );
};
