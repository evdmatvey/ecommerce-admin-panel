import { FC, ReactNode } from 'react';

interface TitleOnlyCardProps {
  data: { title: string };
  controlsSlot?: ReactNode;
}

const TitleOnlyCard: FC<TitleOnlyCardProps> = ({ data, controlsSlot }) => {
  return (
    <div className="bg-red-50 shadow-sm p-3 rounded-lg flex justify-between items-center">
      {data.title}
      <div className="flex items-center gap-2"> {controlsSlot}</div>
    </div>
  );
};

export default TitleOnlyCard;
