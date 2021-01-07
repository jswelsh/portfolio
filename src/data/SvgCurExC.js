function SvgCurExC({darkState}) {
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
      viewBox="0 55 264.58 160"
    >
      <path
        style={{
          fontVariationSettings: "normal",
        }}
        fill={backGround}
        fillRule="evenodd"
        paintOrder="stroke markers fill"
        d="M264.583 0v264.583H0V0z"
      />
      <rect
        style={{
          fontVariationSettings: "normal",
        }}
        width={39.688}
        height={264.583}
        ry={0}
        fill={primary.dark}
        fillRule="evenodd"
        paintOrder="stroke markers fill"
      />
      <text
        style={{
          lineHeight: 1.25,
          InkscapeFontSpecification: "'Roboto Heavy'",
        }}
        x={55.721}
        y={129.078}
        fontWeight={900}
        fontSize={82.045}
        fontFamily="Roboto"
        letterSpacing={3.988}
        fill={primary.dark}
        strokeWidth={0.456}
      >
        <tspan x={55.721} y={129.078}>
          {"Cur"}
        </tspan>
      </text>
      <path
        d="M139.128 133.685l25.275 38.598h14.022l-25.275-38.598z"
        fill={secondary.light}
      />
      <g
        aria-label="ExC"
        style={{
          lineHeight: 1.25,
          InkscapeFontSpecification: "'Roboto Heavy'",
        }}
        fontWeight={900}
        fontSize={47.625}
        fontFamily="Roboto"
        letterSpacing={0}
        strokeWidth={0.265}
      >
        <path
          d="M94.66 173.425H72.548v13.901h26.12v10.817H58.486v-58.329h40.26v10.857h-26.2v12.298h22.115z"
          fill={secondary.light}
        />
        <path
          d="M193.972 178.393q-.28 6.089-3.285 10.776-3.005 4.647-8.453 7.211-5.408 2.564-12.379 2.564-11.498 0-18.108-7.491-6.61-7.492-6.61-21.153v-2.884q0-8.573 2.965-14.983 3.004-6.45 8.613-9.935 5.608-3.525 12.98-3.525 10.616 0 17.066 5.608 6.45 5.569 7.33 15.384h-14.02q-.16-5.328-2.685-7.652-2.523-2.324-7.691-2.324-5.248 0-7.692 3.926t-2.564 12.54v4.126q0 9.334 2.324 13.34 2.363 4.006 8.092 4.006 4.847 0 7.411-2.283 2.564-2.284 2.724-7.251z"
          fill={primary.dark}
        />
      </g>
      <path
        d="M121.421 166.735c14.022-19.766 21.984-15.031 8.894 9.174l11.978 22.234h-14.101l-6.81-12.82-6.691 12.82h-14.182l12.019-22.234-11.378-21.112h14.182z"
        style={{
          lineHeight: 1.25,
          InkscapeFontSpecification: "'Roboto Heavy'",
        }}
        fontWeight={900}
        fontSize={47.625}
        fontFamily="Roboto"
        letterSpacing={0}
        fill={secondary.light}
      />
      <path
        d="M139.128 133.685l-17.707 33.05 8.894 9.174 22.835-42.224zM164.403 172.283l27.815-48.175 5.563-9.635 5.562-9.635 5.563-9.635 5.563-9.635 5.563-9.635 5.562-9.635h14.022l-5.563 9.635-5.563 9.635-5.563 9.635-5.562 9.635-5.563 9.635-5.563 9.635-27.814 48.175z"
        fill={secondary.light}
      />
      <rect
        style={{
          fontVariationSettings: "normal",
        }}
        width={39.688}
        height={264.583}
        x={224.896}
        ry={0}
        fill={primary.dark}
        fillRule="evenodd"
        paintOrder="stroke markers fill"
      />
    </svg>
  );
}

export default SvgCurExC
