interface FilterTagsProps {
  filters: string[];
  clearFilters: VoidFunction;
  removeFilterTag: Function;
}
export default function FilterTags({
  filters,
  clearFilters,
  removeFilterTag,
}: FilterTagsProps) {
  return (
    <div className="rounded bg-white flex items-center justify-between -mt-9 mb-8 p-5 md:px-10 md:mb-10">
      <div className="flex items-center flex-wrap gap-4 ">
        {filters.map((tag) => (
          <div
            key={tag}
            className="rounded overflow-hidden text-desaturatedDarkCyan flex item-center"
          >
            <div className="px-2 py-1 bg-lightGrayishCyanTabs">{tag}</div>
            <button
              className="bg-desaturatedDarkCyan w-8 grid place-content-center"
              aria-label="remove button"
              onClick={() => removeFilterTag(tag)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/icon-remove.svg" alt="remove icon" />
            </button>
          </div>
        ))}
      </div>
      <button className="font-bold text-darkGrayishCyan" onClick={clearFilters}>
        Clear
      </button>
    </div>
  );
}
