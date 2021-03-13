import React from 'react';
import { Link } from 'gatsby';
import { ReactSVG } from 'react-svg';

import * as styles from './logo.style';

const Logo = ({
  linksTo = undefined,
  mobile = { height: 'auto', width: 'auto' },
  standard = { height: 'auto', width: 'auto' },
}) =>
  linksTo ? (
    <Link css={[styles.shared(mobile, standard), styles.linkOnly]} to={linksTo}>
      <ReactSVG src="/brancatisano.svg" />
    </Link>
  ) : (
    <div css={styles.shared(mobile, standard)}>
      <ReactSVG src="/brancatisano.svg" />
    </div>
  );

export default Logo;
