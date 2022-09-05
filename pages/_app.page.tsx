/**
 * Copyright © INOVUA TRADING.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import '../../community-edition/style/base.scss';
import '../../community-edition/style/theme/default-light/index.scss';
import '../../community-edition/style/theme/default-dark/index.scss';

import '../../community-edition/style/theme/amber-light/index.scss';
import '../../community-edition/style/theme/amber-dark/index.scss';

import '../../community-edition/style/theme/blue-light/index.scss';
import '../../community-edition/style/theme/blue-dark/index.scss';

import '../../community-edition/style/theme/green-light/index.scss';
import '../../community-edition/style/theme/green-dark/index.scss';

import '../../community-edition/style/theme/pink-light/index.scss';
import '../../community-edition/style/theme/pink-dark/index.scss';

import '../pages/prop-checkboxColumn/prop-checkboxColumns.scss';

import './index.scss';
// import './demo/components/avatar/index.scss';
// import './demo/components/avatarLetters/index.scss';
// import './demo/components/combo/index.scss';
// import './demo/components/label/index.scss';
// import './demo/components/numberInput/index.scss';
// import './demo/components/promiseImg/index.scss';
// import './demo/components/radio/index.scss';
// import './demo/components/section/index.scss';
// import './demo/components/separator/index.scss';
// import './demo/components/switch/index.scss';

import ReactDataGridEnterprise from '../../enterprise-edition';
import ReactDataGridCommunity from '../../community-edition';
import CheckBox from '../../community-edition/packages/CheckBox';
import Button from '../../community-edition/packages/Button';
import ComboBox from '../../community-edition/packages/ComboBox';
import Menu from '../../community-edition/packages/Menu';

ReactDataGridEnterprise.defaultProps.theme = 'default-dark';
(ReactDataGridEnterprise.defaultProps as any).licenseKey =
  process.env.NEXT_PUBLIC_LICENSE_KEY;
ReactDataGridCommunity.defaultProps.theme = 'default-dark';
CheckBox.defaultProps.theme = 'default-dark';
Button.defaultProps.theme = 'default-dark';
ComboBox.defaultProps.theme = 'default-dark';
Menu.defaultProps.theme = 'default-dark';

function MyApp({ Component, pageProps }) {
  if (!(process as any).browser) {
    return null;
  }

  return (
    <>
      <React.StrictMode>
        <Component {...pageProps} />
      </React.StrictMode>

      <style global jsx>
        {`
          body {
            background: #2e3439;
            color: #fafafa;
            margin: 20px;
            height: calc(100% - 40px);
            width: calc(100% - 40px);
          }

          #__next {
            height: 100%;
          }
          html {
            height: 100vh;
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
