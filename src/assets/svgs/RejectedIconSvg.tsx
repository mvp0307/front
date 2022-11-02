const RejectedIconSvg = () => {
  return (
    <svg
      width="122"
      height="122"
      viewBox="0 0 122 122"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_510_99174)">
        <circle cx="61" cy="61" r="37" fill="#BF0000" fillOpacity="0.4" />
      </g>
      <g filter="url(#filter1_dii_510_99174)">
        <circle cx="61" cy="49" r="37" fill="url(#paint0_radial_510_99174)" />
      </g>
      <path
        d="M61.1001 71.2L61.1001 43.2"
        stroke="white"
        strokeWidth="5.31429"
        strokeLinecap="round"
      />
      <path
        d="M61.1001 32.8L61.1001 32"
        stroke="white"
        strokeWidth="5.31429"
        strokeLinecap="round"
      />
      <defs>
        <filter
          id="filter0_f_510_99174"
          x="0"
          y="0"
          width="122"
          height="122"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="12" result="effect1_foregroundBlur_510_99174" />
        </filter>
        <filter
          id="filter1_dii_510_99174"
          x="17"
          y="4"
          width="90"
          height="92"
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
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0666667 0 0 0 0 0.0862745 0 0 0 0 0.00784314 0 0 0 0.16 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_510_99174" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_510_99174"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="6" dy="6" />
          <feGaussianBlur stdDeviation="7" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.795833 0 0 0 0 0.795833 0 0 0 0.4 0"
          />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_510_99174" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-4" dy="-8" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_510_99174"
            result="effect3_innerShadow_510_99174"
          />
        </filter>
        <radialGradient
          id="paint0_radial_510_99174"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(50.5 38) rotate(59.7436) scale(55.5698 42.2925)"
        >
          <stop stopColor="#FF3A3A" />
          <stop offset="0.734375" stopColor="#D01010" />
          <stop offset="1" stopColor="#BF0000" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default RejectedIconSvg;
