import { Exm } from '@execution-machine/sdk';
import * as dotenv from 'dotenv'
dotenv.config()
const API_KEY = process.env.EXM_API_KEY;

export const exmInstance = new Exm({ token: API_KEY });