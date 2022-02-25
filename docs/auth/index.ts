import { JsonObject } from 'swagger-ui-express';
import { basicInfo } from '../basicInfor';
import { apis } from './auth.api';
import { schemas } from './auth.schemas';

export const authDocs: JsonObject = {
	...{ schemes: ['http'] },
	...basicInfo,
	...schemas,
	...apis
};
