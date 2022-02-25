import { JsonObject } from 'swagger-ui-express';

export const schemas: JsonObject = {
	LoginInformation: {
		type: 'object',
		properties: {
			email: {
				type: 'string',
				example: 'foo@gmail.com'
			},
			password: {
				type: 'string',
				example: '12345678'
			}
		}
	},
	LoginResponse: {
		type: 'object',
		properties: {
			user: {
				$ref: '#/User'
			},
			accessToken: {
				type: 'string',
				example: 'jhhdhdf.123sdsghddfjhdf.1343xcasbvaaweAED'
			},
			refreshToken: {
				type: 'string',
				example: 'AaTaS13AJKD85k4'
			}
		}
	},
	ForgotPasswordInformation: {
		type: 'object',
		properties: {
			email: {
				type: 'string',
				example: 'foo@gmail.com'
			}
		}
	},
	ForgotPasswordResponse: {
		type: 'object',
		properties: {
			message: {
				type: 'string',
				example: 'Email has been sent successfully'
			}
		}
	},
	ResetPasswordInformation: {
		type: 'object',
		properties: {
			password: {
				type: 'string',
				example: '12345678'
			},
			confirmPassword: {
				type: 'string',
				example: '12345678'
			}
		}
	},
	User: {
		type: 'object',
		properties: {
			id: {
				type: 'integer',
				example: 1
			},
			email: {
				type: 'string',
				example: 'foo@gmail.com'
			},
			name: {
				type: 'string',
				example: 'Foo Bar'
			},
			phone: {
				type: 'string',
				nullable: true,
				example: '84987654321'
			},
			avatar: {
				type: 'string',
				nullable: true,
				example: 'https://foo.com/bar.png'
			},
			provider: {
				enum: ['local', 'google', 'facebook'],
				example: 'local'
			},
			externalId: {
				type: 'string',
				nullable: true,
				example: '12345678aq12zas'
			},
			status: {
				enum: ['active', 'blocked'],
				example: 'active'
			},
			createdAt: {
				type: 'string',
				example: '2020-01-01T00:00:00.000Z'
			}
		}
	}
};
