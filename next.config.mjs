/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Ignoruj pliki HTML
    config.module.rules.push({
      test: /\.html$/,
      use: "ignore-loader",
    });
    // Ignoruj pliki C#
    config.module.rules.push({
      test: /\.cs$/,
      use: "ignore-loader", // Dodaje loader ignorujący pliki .cs
    });
    return config;
  },
};

export default nextConfig;
