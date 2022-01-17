import winston from "winston";
import config from "../config/config.js";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: `${config.logDir}/error.log`,
      level: "error",
    }),
    new winston.transports.File({
      filename: `${config.logDir}/combined.log`,
    }),
  ],
});

if (config.env !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

logger.stream = {
  write: (message) => {
    logger.info(message.trim());
  },
};

export default logger;
