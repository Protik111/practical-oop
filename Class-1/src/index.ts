import { AppConfig } from "./Appconfig";

import dotenv from 'dotenv';

dotenv.config();

console.log('App', AppConfig.getInstance());