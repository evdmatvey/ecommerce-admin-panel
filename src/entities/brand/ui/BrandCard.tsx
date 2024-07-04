import { FC, ReactNode } from 'react';
import { TitleOnlyCard } from '@/shared/ui/TitleOnlyCard';
import { Brand } from '../model/types';

interface BrandCardProps {
  brand: Brand;
  deleteButtonSlot?: ReactNode;
  updateButtonSlot?: ReactNode;
}

const BrandCard: FC<BrandCardProps> = ({
  brand,
  deleteButtonSlot,
  updateButtonSlot,
}) => {
  return (
    <TitleOnlyCard
      data={brand}
      deleteButtonSlot={deleteButtonSlot}
      updateButtonSlot={updateButtonSlot}
    />
  );
};

export default BrandCard;
