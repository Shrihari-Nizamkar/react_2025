import { useState } from "react";
import styles from "./ToggleButton.module.scss";

const ToggleButton = () => {
  const [active, setActive] = useState(false);

  const btnClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <div>
      <button
        className={active ? styles.activeBtn : styles.inactiveBtn}
        onClick={btnClick}
      >
        {active ? "Active" : "Inactive"}
      </button>
    </div>
  );
};

export default ToggleButton;
