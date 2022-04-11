import { Fragment } from 'react';   

import styles from './Layout.module.scss';
import Header from './Header';

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main className={styles.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;