import { Suspense } from "react";
import { Outlet, useNavigation } from "react-router-dom";

import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
import styles from "./AppLayout.module.scss";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className={styles.layout}>
      <Header />

      <div className={styles.wrapper}>
        <main>
          {isLoading ? (
            <Loader />
          ) : (
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          )}
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
