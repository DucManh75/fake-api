import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <nav className="wrapper gradient-custom-3">
          <ul className="menu">
            <li className="item">
              <a href="/" className="home">
                Home
              </a>
            </li>

            <li className="item">
              <a href="/" className="product">
                Product
              </a>
            </li>
          </ul>
          <div className="search">
            <form className="max-w-md mx-auto">
              <div className="input">
                <input
                  type="search"
                  id="default-search"
                  className="input w-full p-6 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
                <button
                  type="submit"
                  className="text-white end-2.5 bottom-2.5 bg-emerald-400 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-emerald-400 dark:hover:bg-emerald-500 dark:focus:bg-emerald-600"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <ul className="menu">
            <li className="item">
              <a href="/login" className="login">
                Login
              </a>
            </li>

            <li className="item">
              <a href="/register" className="register">
                Register
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
