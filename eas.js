import * as dotenv from "dotenv";

dotenv.config();

module.exports = {
  cli: {
    version: ">= 10.2.1",
  },
  build: {
    preview: {
      android: {
        distribution: "internal",
      },
      env: {
        EXPO_PUBLIC_WEATHER_APP_ID: process.env.EXPO_PUBLIC_WEATHER_APP_ID,
      },
    },
    production: {
      env: {
        EXPO_PUBLIC_WEATHER_APP_ID: process.env.EXPO_PUBLIC_WEATHER_APP_ID,
      },
    },
  },
};
