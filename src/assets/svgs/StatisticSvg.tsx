const StatisticSvg = () => {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="8" fill="#DFECFD" />
      <g filter="url(#filter0_dii_214_88862)">
        <path
          d="M32.3427 17.1663H28.4303C28.0682 17.1663 27.7729 17.4832 27.7729 17.8719V33.2943C27.7729 33.683 28.0682 34 28.4303 34H32.3427C32.7048 34 33.0001 33.683 33.0001 33.2943V17.8719C33.0001 17.4832 32.7048 17.1663 32.3427 17.1663Z"
          fill="#1B7EFF"
        />
        <path
          d="M18.0763 25.9588H14.1639C13.8018 25.9588 13.5065 26.2758 13.5065 26.6645V33.2943C13.5065 33.6829 13.8018 33.9999 14.1639 33.9999H18.0763C18.4384 33.9999 18.7337 33.6829 18.7337 33.2943V26.6645C18.7337 26.2758 18.4384 25.9588 18.0763 25.9588Z"
          fill="#1B7EFF"
        />
        <path
          d="M21.297 21.5626H25.2095C25.5716 21.5626 25.8669 21.8795 25.8669 22.2682V33.2943C25.8669 33.683 25.5716 34 25.2095 34H21.297C20.935 34 20.6397 33.683 20.6397 33.2943V22.2682C20.6397 21.8795 20.935 21.5626 21.297 21.5626Z"
          fill="#1B7EFF"
        />
        <path
          d="M32.029 10H28.3718C28.0024 10 27.6677 10.244 27.5269 10.617C27.3852 10.991 27.4638 11.421 27.7253 11.707L28.9076 13L25.1716 17.086L22.1608 13.793C21.8618 13.464 21.3918 13.407 21.0334 13.65L11.4331 22.8167C11.0033 23.1077 10.8717 23.7237 11.1368 24.1927C11.3096 24.4987 11.6086 24.6667 11.9149 24.6667C12.0795 24.6667 12.245 24.6187 12.3949 24.5167L21.379 15.767L24.5243 19.207C24.8818 19.598 25.4596 19.598 25.8171 19.207L30.2004 14.414L31.3826 15.707C31.5573 15.898 31.7913 16 32.029 16C32.147 16 32.2659 15.975 32.3792 15.924C32.7212 15.769 32.9434 15.404 32.9434 15V11C32.9434 10.448 32.5347 10 32.029 10Z"
          fill="#1B7EFF"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_214_88862"
          x="6"
          y="6"
          width="34.0001"
          height="36"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_214_88862" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_214_88862"
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
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_214_88862" />
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
            in2="effect2_innerShadow_214_88862"
            result="effect3_innerShadow_214_88862"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default StatisticSvg;
