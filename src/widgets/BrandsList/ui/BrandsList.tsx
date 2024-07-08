import { useQuery } from '@tanstack/react-query';
import { DeleteBrand } from '@/features/brand/DeleteBrand';
import { UpdateBrand } from '@/features/brand/UpdateBrand';
import { brandService } from '@/entities/brand';
import {
  TitleOnlyCard,
  TitleOnlyCardSkeleton,
} from '@/shared/ui/TitleOnlyCard';

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
          <TitleOnlyCard
            data={brand}
            controlsSlot={
              <>
                <UpdateBrand brand={brand} />
                <DeleteBrand id={brand.id} />
              </>
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default BrandsList;
