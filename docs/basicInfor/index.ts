import { JsonObject } from 'swagger-ui-express';

export const basicInfo: JsonObject = {
	swagger: '2.0',
	info: {
		version: '1.0.0',
		title: 'Virtual Working Space',
		description: 'Virtual Working Space API Documentation'
	},
	schemes: ['http', 'https'],
	host: 'virtualworkingspace.azure.com',
	basePath: '/api/v2'
};
