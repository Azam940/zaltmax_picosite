import { categories } from "@/data/categories";
import { useSearch } from "@/context/SearchContext";

export const KatalogMap = () => {
  const { query } = useSearch();

  const filtered = categories.filter((cat) =>
    cat.title.toLowerCase().includes(query.toLowerCase()) ||
    cat.items.some((i) => i.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="grid grid-cols-3 gap-6 mt-10 container mx-auto mb-30">
      {filtered.map((cat) => (
        <div
          key={cat.id}
          className="bg-white rounded-[10px] shadow-md p-6 flex justify-between items-center hover:shadow-lg transition"
        >
          <div>
            <h3 className="text-[20px] font-semibold mb-3 mont">
              {cat.title}
            </h3>

            <ul className="space-y-2">
              {cat.items.map((item, i) => (
                <li key={i} className="flex mont items-center gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E1A22F]"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <img
            src={cat.image}
            alt={cat.title}
            className="w-[140px] object-contain"
          />
        </div>
      ))}
    </div>
  );
};
