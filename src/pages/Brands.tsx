import { BrandsList } from '@/widgets/BrandsList';
import { CreateBrand } from '@/features/brand/CreateBrand';

const Brands = () => {
  return (
    <>
      <h1 className="font-semibold mb-5">Бренды</h1>
      <div className="mb-5">
        <CreateBrand />
      </div>
      <BrandsList />
    </>
  );
};

export default Brands;
