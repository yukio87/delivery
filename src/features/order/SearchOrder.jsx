import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./SearchOrder.module.scss";

function SearchOrder() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue) return;
    navigate(`/order/${inputValue}`);
    setInputValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.input}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search order by number"
      />
    </form>
  );
}

export default SearchOrder;
