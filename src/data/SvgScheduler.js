function SvgScheduler({darkState}) {
  const backGround = darkState ? "#303030" : "#ffffff"
  const primary = {
    light: darkState ? '#ce93d8' : '#03a9f4ff',
    dark: darkState ? '#8e24aa': '#2962ffff'
  }
  const secondary = {
    light: darkState ? '#03a9f4ff' : '#ce93d8',
    dark: darkState ? '#2962ffff' : '#8e24aa'
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 45 264.58 160"
    >
      <g paintOrder="stroke markers fill">
        <rect
          width={264.58}
          height={264.58}
          ry={0}
          fill={backGround}
          fillRule="evenodd"
          style={{
            fontVariationSettings: "normal",
          }}
        />
        <path
          fill={backGround}
          fillRule="evenodd"
          stroke={primary.light}
          strokeLinecap="round"
          strokeWidth={5.06}
          style={{
            fontVariationSettings: "normal",
          }}
          d="M77.325 85.917h110.13v84.74H77.325z"
        />
        <path
          fill="none"
          stroke={primary.light}
          strokeLinecap="round"
          strokeWidth={5.812}
          style={{
            fontVariationSettings: "normal",
          }}
          d="M77.701 68.702h109.38v16.83H77.701z"
        />
      </g>
      <g fill={primary.light} fillRule="evenodd" paintOrder="stroke markers fill">
        <path
          style={{
            fontVariationSettings: "normal",
          }}
          d="M94.043 74.352h5.43v5.532h-5.43zM163.91 74.352h5.43v5.532h-5.43zM150.4 74.352h5.43v5.532h-5.43zM107.55 74.352h5.43v5.532h-5.43z"
        />
      </g>
      <path
        fill={backGround}
        fillRule="evenodd"
        style={{
          fontVariationSettings: "normal",
        }}
        paintOrder="stroke markers fill"
        d="M146.51 129.72h69.616v69.616H146.51z"
      />
      <circle
        cx={172.31}
        cy={156.33}
        r={23.601}
        stroke={primary.light}
        fill={backGround}

        strokeLinecap="round"
        strokeWidth={2.196}
        paintOrder="stroke markers fill"
      />
      <circle
        cx={172.31}
        cy={156.33}
        r={22.07}
        fill={secondary.light}
        paintOrder="stroke markers fill"
      />
      <text
        x={152.121}
        y={179.327}
        fill={primary.dark}
        fontFamily="OpenSymbol"
        fontSize={81.463}
        letterSpacing={0}
        strokeWidth={1.527}
        wordSpacing={0}
        style={{
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal",
          lineHeight: 1.25,
        }}
      >
        <tspan
          x={152.121}
          y={179.327}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
          }}
        >
          {"\u2713"}
        </tspan>
      </text>
      <path d="M146.42 133.48h-5.269v-10.538h10.538v10.538z" fill={primary.dark} />
      <g>
        <g fillRule="evenodd" fill={primary.dark} paintOrder="stroke markers fill">
          <rect
            width={39.688}
            height={264.58}
            ry={0}
            style={{
              fontVariationSettings: "normal",
            }}
          />
          <rect
            x={224.9}
            width={39.688}
            height={264.58}
            ry={0}
            style={{
              fontVariationSettings: "normal",
            }}
          />
        </g>
        <g strokeWidth={0.688}>
          <path
            d="M90.214 161.628h-5.27V151.09h10.539v10.538zm14.05 0h-5.269V151.09h10.538v10.538zm14.05 0h-5.268V151.09h10.538v10.538zm0-14.05h-5.268V137.04h10.538v10.538zm14.051 0h-5.269V137.04h10.538v10.538z"
            fill={secondary.light}
          />
          <path
            d="M90.214 147.563h-5.27v-10.538h10.539v10.538zm14.05 0h-5.269v-10.538h10.538v10.538zm28.101-14.051h-5.269v-10.538h10.538v10.538zm-14.05-14.05h-5.27v-10.539h10.539v10.538zm14.05 0h-5.269v-10.539h10.538v10.538zm14.051 0h-5.269v-10.539h10.538v10.538zm14.05 0h-5.268v-10.539h10.538v10.538zm14.051 0h-5.269v-10.539h10.538v10.538zm-42.152-14.051h-5.269V94.873h10.538v10.538zm14.051 0h-5.269V94.873h10.538v10.538zm14.05 0h-5.268V94.873h10.538v10.538zm14.051 0h-5.269V94.873h10.538v10.538z"
            fill={primary.dark}
          />
          <path
            d="M90.214 133.522h-5.27v-10.538h10.539v10.538zm14.05 0h-5.269v-10.538h10.538v10.538zm14.05 0h-5.268v-10.538h10.538v10.538zm-28.1-14.05h-5.27v-10.538h10.539v10.537zm14.05 0h-5.269v-10.538h10.538v10.537z"
            fill={secondary.dark}
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgScheduler;