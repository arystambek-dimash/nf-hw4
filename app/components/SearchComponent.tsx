import React from 'react';
import SearchIcon from "@/public/Icons/SearchIcon";
import '../styles/searchComponent.css';

const SearchComponent: React.FC = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="flex w-[70%] m-auto">
                <div className="relative w-full flex items-center">
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        className="w-full py-6 pl-12 pr-3 border-0 searchField"
                        placeholder="What are you searching for?"
                    />
                </div>
                <button
                    className="border-5 border-[#002F34] bg-[#002F34] text-white py-5 px-20 hover:bg-white hover:text-black font-bold flex items-center"
                    type="button"
                >
                    <SearchIcon className="mr-2"/>
                    Search
                </button>
            </div>
        </div>
    );
}

export default SearchComponent;
