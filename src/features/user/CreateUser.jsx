import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HandWaving } from "@phosphor-icons/react";

import { updateName } from "./userSlice";
import styles from "./CreateUser.module.scss";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p>{<HandWaving color="#44403c" />} Hello! What&apos;s your name?</p>

      <input
        type="text"
        placeholder="Your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <button className={styles.button}>Start ordering</button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
