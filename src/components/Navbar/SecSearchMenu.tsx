const SearchMenu = () => {
  const handleClick = () => {
    const secSearchMenu = document.querySelector(
      ".navbar__secondary-search-menu"
    ) as HTMLDivElement;

    secSearchMenu.classList.remove("navbar__secondary-menu--active");
  };
  return (
    <div className="navbar__secondary-search-menu block tablet:hidden bg-black-100">
      <button
        onClick={handleClick}
        className="hamburger tablet:hidden hamburger--active absolute top-5 right-[30px] aspect-square"
      >
        <div></div>
        <div></div>
      </button>

      <div className="mt-20 w-full px-12 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15px"
          height="44px"
          viewBox="0 0 15 44"
          className="fill-white scale-[1.5]"
        >
          <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="px-6 py-4 bg-inherit text-2xl border-none outline-none text-white-100"
        />
      </div>
    </div>
  );
};

export default SearchMenu;
