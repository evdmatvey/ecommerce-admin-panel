const CategorySkeleton = () => {
  return (
    <div className="bg-gray-300 shadow-sm p-3 rounded-lg flex justify-between items-center animate-pulse">
      <div className="w-40 bg-gray-400 h-4 rounded-xl"></div>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-lg bg-gray-400"></div>
        <div className="w-6 h-6 rounded-lg bg-gray-400"></div>
      </div>
    </div>
  );
};

export default CategorySkeleton;
