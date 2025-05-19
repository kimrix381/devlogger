const Filter = ({ filterTitle, setFilterTitle, filterRate, setFilterRate }) => {
  return (
    <div className="flex gap-4 mb-6 justify-center">
      <input
        type="text"
        placeholder="Search by title"
        value={filterTitle}
        onChange={(e) => setFilterTitle(e.target.value)}
        className="px-4 py-2 rounded border shadow"
      />
      <input
        type="number"
        min="0"
        max="10"
        placeholder="Min rating"
        value={filterRate}
        onChange={(e) => setFilterRate(Number(e.target.value))}
        className="px-4 py-2 rounded border shadow w-36"
      />
    </div>
  );
};
export default Filter;
