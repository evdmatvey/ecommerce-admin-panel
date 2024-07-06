import { useQuery } from '@tanstack/react-query';
import { DeleteBrand } from '@/features/brand/DeleteBrand';
import { UpdateBrand } from '@/features/brand/UpdateBrand';
import { BrandCard, brandService } from '@/entities/brand';
import { TitleOnlyCardSkeleton } from '@/shared/ui/TitleOnlyCard';

const BrandsList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['brands'],
    queryFn: () => brandService.getAll(),
  });

  const skeletons = new Array(18).fill(<TitleOnlyCardSkeleton />);

  if (isLoading)
    return (
      <ul className="grid grid-cols-3 gap-5">
        {skeletons?.map((skeleton, index) => <li key={index}>{skeleton}</li>)}
      </ul>
    );

  return (
    <ul className="grid grid-cols-3 gap-5">
      {data?.map((brand) => (
        <li key={brand.id}>
          <BrandCard
            brand={brand}
            updateButtonSlot={<UpdateBrand brand={brand} />}
            deleteButtonSlot={<DeleteBrand id={brand.id} />}
          />
        </li>
      ))}
    </ul>
  );
};

export default BrandsList;
