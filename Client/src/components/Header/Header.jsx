// import { useEffect, useState, useContext } from "react";
// // import { useNavigate } from "react-router-dom";
// import { TbSearch } from "react-icons/tb";
// import { CgShoppingCart } from "react-icons/cg";
// import { AiOutlineHeart } from "react-icons/ai";
// import "./Header.scss";
// import Search from "./Search/Search";
// import { Context } from "../../utils/context";
// import Cart from "../Cart/Cart";
// // import Cart from "../Cart/Cart";

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [showCart, setShowCart] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);

//   const handleScroll = () => {
//     const offset = window.scrollY;
//     if (offset > 200) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//     console.log(offset);
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <>
//       <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
//         <div className="header-content">
//           <ul className="left">
//             <li>Home</li>
//             <li>About</li>
//             <li>Categories</li>
//           </ul>
//           <div className="center">AUTOSTART</div>
//           <div className="right">
//             <TbSearch onClick={() => setShowSearch(true)} />
//             <AiOutlineHeart />
//             <span className="cart-icon" onClick={() => setShowCart(true)}>
//               <CgShoppingCart />
//             </span>
//           </div>
//         </div>
//       </header>
//       {showCart && <Cart setShowCart={setShowCart} />}
//       {showSearch && <Search setShowSearch={setShowSearch} />}
//     </>
//   );
// };

// export default Header;



import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const navigate = useNavigate();
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const { cartCount, showCart, setShowCart } = useContext(Context);

    return (
        <>
            <header
                className={`main-header ${scrolled ? "sticky-header" : ""}`}
            >
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/about")}>About</li>
                        <li>Categories</li>
                    </ul>
                    <div className="center" onClick={() => navigate("/")}>
                      AUTOSTART
                    </div>
                    <div className="right">
                        <TbSearch onClick={() => setSearchModal(true)} />
                        <AiOutlineHeart />
                        <span
                            className="cart-icon"
                            onClick={() => setShowCart(true)}
                        >
                            <CgShoppingCart />
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                    </div>
                </div>
            </header>
            {searchModal && <Search setSearchModal={setSearchModal} />}
            {showCart && <Cart />}
        </>
    );
};

export default Header;