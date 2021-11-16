import {join} from "path";
import {loggerConfig} from "./logger";
import typeormConfig from "./typeorm";

import oidcConfig from "./oidc";
import {FileSyncAdapter} from "@tsed/adapters";

const {version} = require("../../package.json");
export const rootDir = join(__dirname, "..");

export const config: Partial<TsED.Configuration> = {
  version,
  rootDir,
  logger: loggerConfig,
  typeorm: typeormConfig,
  oidc: oidcConfig,
  adapters: [
    FileSyncAdapter
  ]
  // additional shared configuration
};
