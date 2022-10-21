const WalletSvg = () => {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="8" fill="#FF5C00" fillOpacity="0.1" />
      <g filter="url(#filter0_dii_214_88841)">
        <path
          d="M29.5 26C27.019 26 25 23.981 25 21.5C25 19.019 27.019 17 29.5 17H32V15.75C32 14.233 30.767 13 29.25 13H12.75C11.233 13 10 14.233 10 15.75V28.25C10 29.767 11.233 31 12.75 31H29.25C30.767 31 32 29.767 32 28.25V26H29.5Z"
          fill="#F17524"
        />
        <path
          d="M33.25 18.5H29.5C27.846 18.5 26.5 19.846 26.5 21.5C26.5 23.154 27.846 24.5 29.5 24.5H33.25C33.664 24.5 34 24.164 34 23.75V19.25C34 18.836 33.664 18.5 33.25 18.5ZM29.5 22.5C28.948 22.5 28.5 22.052 28.5 21.5C28.5 20.948 28.948 20.5 29.5 20.5C30.052 20.5 30.5 20.948 30.5 21.5C30.5 22.052 30.052 22.5 29.5 22.5Z"
          fill="#F17524"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_214_88841"
          x="5"
          y="9"
          width="36"
          height="30"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="2" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0666667 0 0 0 0 0.0862745 0 0 0 0 0.00784314 0 0 0 0.16 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_214_88841" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_214_88841"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.32 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_214_88841" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-1" dy="-1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_214_88841"
            result="effect3_innerShadow_214_88841"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default WalletSvg;
