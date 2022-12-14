/**
 * Copyright © INOVUA TRADING.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ReactElement } from 'react';

export type FlagsType = {
  ca: ReactElement;
  uk: ReactElement;
  usa: ReactElement;
};

const flags: FlagsType = {
  ca: (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <svg viewBox="0 0 48 48" width="32px" height="32px">
        <path fill="#ECEFF1" d="M2 9H46V39H2z" />
        <path fill="#FF3D00" d="M36 9H46V39H36zM2 9H12V39H2zM23 30H25V33H23z" />
        <path
          fill="#FF3D00"
          d="M33,27l-2-1l2-3h-3l-0.041-1.986l-2.311,1.159L28,17l-2,1l-1.993-3L22,18l-2-1l0.352,5.144l-2.312-1.128c0,0-0.045,1.974-0.04,1.984h-3l2,3l-2,1l4,2v2c0,0,4.722-0.259,5-0.259S29,31,29,31v-2L33,27z"
        />
      </svg>
    </div>
  ),
  uk: (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <svg viewBox="0 0 48 48" width="32px" height="32px">
        <path fill="#3F51B5" d="M2 10H46V38H2z" />
        <path
          fill="#FFF"
          d="M2 14.216L22.81 26.935 25.939 21.815 6.608 10 2 10z"
        />
        <path
          fill="#FFF"
          d="M46 10L42.391 10 23.061 21.814 26.189 26.935 46 14.826z"
        />
        <path
          fill="#FFF"
          d="M26.189 20.271L23.061 25.391 43.691 38 46 38 46 32.379z"
        />
        <path
          fill="#FFF"
          d="M2 32.991L2 38 5.31 38 25.939 25.392 22.811 20.271z"
        />
        <path fill="#FFF" d="M2 20H46V28H2z" />
        <path fill="#FFF" d="M20 10H28V38H20z" />
        <g>
          <path
            fill="#E53935"
            d="M17.218 20L2 10.699 2 13.043 13.382 20zM44.309 10L27.947 20 31.782 20 46 11.311 46 10zM33.082 28L46 35.895 46 33.551 36.917 28zM15.918 28L2 36.506 2 38 3.392 38 19.753 28zM2 22H46V26H2z"
          />
          <path fill="#E53935" d="M22 10H26V38H22z" />
        </g>
      </svg>
    </div>
  ),
  usa: (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <svg viewBox="0 0 48 48" width="32px" height="32px">
        <path fill="#ECEFF1" d="M1.998 10H45.998V37H1.998z" />
        <path
          fill="#F44336"
          d="M2 10H46V13H2zM2 16H46V19H2zM2 22H46V25H2zM2 28H46V31H2zM2 34H46V37H2z"
        />
        <path fill="#3F51B5" d="M2 10H23V25H2z" />
        <g>
          <path
            fill="#FFF"
            d="M4.25 12L4.713 12.988 5.75 13.146 5 13.916 5.178 15 4.25 14.488 3.322 15 3.5 13.916 2.75 13.146 3.787 12.988zM8.25 12L8.713 12.988 9.75 13.146 9 13.916 9.178 15 8.25 14.488 7.322 15 7.5 13.916 6.75 13.146 7.787 12.988zM12.25 12L12.713 12.988 13.75 13.146 13 13.916 13.178 15 12.25 14.488 11.322 15 11.5 13.916 10.75 13.146 11.787 12.988zM16.25 12L16.713 12.988 17.75 13.146 17 13.916 17.178 15 16.25 14.488 15.322 15 15.5 13.916 14.75 13.146 15.787 12.988zM20 12L20.463 12.988 21.5 13.146 20.75 13.916 20.928 15 20 14.488 19.072 15 19.25 13.916 18.5 13.146 19.537 12.988zM4.25 20L4.713 20.988 5.75 21.146 5 21.916 5.178 23 4.25 22.488 3.322 23 3.5 21.916 2.75 21.146 3.787 20.988zM8.25 20L8.713 20.988 9.75 21.146 9 21.916 9.178 23 8.25 22.488 7.322 23 7.5 21.916 6.75 21.146 7.787 20.988zM12.25 20L12.713 20.988 13.75 21.146 13 21.916 13.178 23 12.25 22.488 11.322 23 11.5 21.916 10.75 21.146 11.787 20.988zM16.25 20L16.713 20.988 17.75 21.146 17 21.916 17.178 23 16.25 22.488 15.322 23 15.5 21.916 14.75 21.146 15.787 20.988zM20 20L20.463 20.988 21.5 21.146 20.75 21.916 20.928 23 20 22.488 19.072 23 19.25 21.916 18.5 21.146 19.537 20.988zM5.25 16L5.713 16.988 6.75 17.146 6 17.916 6.178 19 5.25 18.488 4.322 19 4.5 17.916 3.75 17.146 4.787 16.988zM9.25 16L9.713 16.988 10.75 17.146 10 17.916 10.178 19 9.25 18.488 8.322 19 8.5 17.916 7.75 17.146 8.787 16.988zM13.25 16L13.713 16.988 14.75 17.146 14 17.916 14.178 19 13.25 18.488 12.322 19 12.5 17.916 11.75 17.146 12.787 16.988zM17.25 16L17.713 16.988 18.75 17.146 18 17.916 18.178 19 17.25 18.488 16.322 19 16.5 17.916 15.75 17.146 16.787 16.988zM21 16L21.463 16.988 22.5 17.146 21.75 17.916 21.928 19 21 18.488 20.072 19 20.25 17.916 19.5 17.146 20.537 16.988z"
          />
        </g>
      </svg>
    </div>
  ),
};

export default flags;
