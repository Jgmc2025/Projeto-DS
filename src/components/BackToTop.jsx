import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../css/BackToTop.css";

function BackToTop() {
  // define o status base
  const [showBtn, setShowBtn] = useState(false);

  // se o y for maior que 300, seta o estado para true
  const checarScroll = () => {
    if (window.scrollY > 300) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  // effect listener do scroll
  useEffect(() => {
    window.addEventListener("scroll", checarScroll);

    return () => {
      window.removeEventListener("scroll", checarScroll);
    };
  }, []);

  const subirParaTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="back-to-top-wrapper">
      {showBtn && (
        <button className="btn-voltar-topo" onClick={subirParaTopo}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default BackToTop;
