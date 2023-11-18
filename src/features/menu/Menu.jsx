import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MenuItem from "./MenuItem";
import Error from "../../ui/Error";
import { getErrorMenu, getIsloading, getMenu, updateMenu } from "./menuSlice";
import Loader from "../../ui/Loader";
import styles from "./Menu.module.scss";

function Menu() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsloading);

  useEffect(
    function () {
      // Использовал здесь "redux.thunk", потому-что в обязательных требованиях это было
      dispatch(updateMenu());
    },
    [dispatch]
  );

  const menu = useSelector(getMenu);
  const errorMenu = useSelector(getErrorMenu);

  if (isLoading) return <Loader />;
  if (errorMenu) return <Error error={errorMenu} />;

  return (
    <div>
      <ul className={styles.list}>
        {menu.map((item) => (
          <MenuItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
