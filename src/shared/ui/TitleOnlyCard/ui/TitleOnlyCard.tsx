import { FC, ReactNode } from 'react';

interface TitleOnlyCardProps {
  data: { title: string };
  deleteButtonSlot?: ReactNode;
  updateButtonSlot?: ReactNode;
}

const TitleOnlyCard: FC<TitleOnlyCardProps> = ({
  data,
  deleteButtonSlot,
  updateButtonSlot,
}) => {
  return (
    <div className="bg-red-50 shadow-sm p-3 rounded-lg flex justify-between items-center">
      {data.title}
      <div className="flex items-center gap-2">
        {updateButtonSlot}
        {deleteButtonSlot}
      </div>
    </div>
  );
};

export default TitleOnlyCard;
