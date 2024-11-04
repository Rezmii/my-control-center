// next.config.js
import FilterWarningsPlugin from "webpack-filter-warnings-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Ignorowanie plików HTML i C#
    config.module.rules.push(
      {
        test: /\.html$/,
        use: "ignore-loader",
      },
      {
        test: /\.cs$/,
        use: "ignore-loader",
      }
    );

    // Dodanie pluginu do wyciszania ostrzeżeń
    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: [
          /mongodb/,
          /mssql/,
          /mysql/,
          /mysql2/,
          /oracledb/,
          /pg/,
          /pg-native/,
          /pg-query-stream/,
          /react-native-sqlite-storage/,
          /redis/,
          /sqlite3/,
          /sql.js/,
          /typeorm-aurora-data-api-driver/,
          /Critical dependency/, // Dodane wyrażenie regularne dla "Critical dependency"
        ],
      })
    );

    return config;
  },
};

export default nextConfig;
