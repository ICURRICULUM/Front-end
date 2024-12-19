import React from 'react';

interface SearchBoxProps {
  searchInput: string;
  setSearchInput: (searchInput: string) => void;
  search: (searchInput: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ searchInput, setSearchInput, search }) => {
  return (
    <div className="flex flex-row justify-center space-x-4">
      <label htmlFor="course-search" className="sr-only">
        과목 검색
      </label>
      <input
        id="course-search"
        className="w-80 rounded-five border border-black p-4 text-sm"
        type="text"
        placeholder="학수번호를 검색하세요. (ex. GEB2024-001)"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button
        onClick={() => search(searchInput)}
        type="submit"
        className="rounded-five bg-[#005BAC] px-6 py-4 text-white"
      >
        과목 검색
      </button>
    </div>
  );
};

export default SearchBox;
