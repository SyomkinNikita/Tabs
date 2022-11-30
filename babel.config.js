module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  const presets = [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ];

  const plugins = [
    process.env.NODE_ENV === "development" && "react-refresh/babel",
    [
      "babel-plugin-styled-components",
      {
        ssr: false,
      },
    ],
  ].filter(Boolean);

  return {
    presets,
    plugins,
  };
};