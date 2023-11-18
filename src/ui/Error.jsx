import { useNavigate, useRouteError } from "react-router-dom";

import styles from "./Error.module.scss";

function Error({ error }) {
  const navigate = useNavigate();
  const errorRoute = useRouteError();

  if (error) {
    return (
      <div className={styles.container}>
        <h1>{error.message}</h1>
        <a onClick={() => navigate(-1)}>&larr; Go back</a>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>{errorRoute.error?.message || errorRoute.message}</h1>
      <a onClick={() => navigate(-1)}>&larr; Go back</a>
    </div>
  );
}

export default Error;
