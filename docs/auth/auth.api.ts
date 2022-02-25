import { JsonObject } from 'swagger-ui-express';
import { TAGS } from './auth.constant';

const localLogin = {
	post: {
		tags: [TAGS],
		description: 'Login with local strategy',
		consumes: ['application/json'],
		produces: ['application/json'],
		parameters: [
			{
				in: 'body',
				name: 'body',
				description: 'Login information',
				required: true,
				schema: {
					$ref: '#/LoginInformation'
				}
			}
		],
		responses: {
			'200': {
				description: 'Login successfully',
				schema: {
					$ref: '#/LoginResponse'
				}
			},
			'403': {
				description: 'Invalid email or password'
			},
			'500': {
				description: 'Internal server error'
			}
		}
	}
};

const externalLogin = {
	get: {
		tags: [TAGS],
		description: 'Login with external strategy',
		consumes: ['application/json'],
		produces: ['application/json'],
		responses: {
			'302': {
				description: 'Redirect to external login page'
			},
			'500': {
				description: 'Internal server error'
			}
		}
	}
};

const forgotPassword = {
	post: {
		tags: [TAGS],
		description: 'Forgot password',
		consumes: ['application/json'],
		produces: ['application/json'],
		parameters: [
			{
				in: 'body',
				name: 'body',
				required: true,
				schema: {
					$ref: '#/ForgotPasswordInformation'
				}
			}
		],
		responses: {
			'200': {
				schema: {
					$ref: '#/ForgotPasswordResponse'
				}
			},
			'404': {
				description: 'Email not found'
			},
			'500': {
				description: 'Internal server error'
			}
		}
	}
};

const resetToken = {
	get: {
		tags: [TAGS],
		description: 'Reset password',
		consumes: ['application/json'],
		produces: ['application/json'],
		parameters: [
			{
				in: 'query',
				name: 'token',
				required: true,
				type: 'string',
				example: 'AaTaS13AJKD85k4'
			},
			{
				in: 'body',
				name: 'body',
				required: true,
				schema: {
					$ref: '#/ResetPasswordInformation'
				}
			}
		],
		responses: {
			'200': {
				description: 'Reset password successfully'
			},
			'400': {
				description: 'Invalid token or password not match'
			},
			'404': {
				description: 'Token not found'
			},
			'500': {
				description: 'Internal server error'
			}
		}
	}
};

export const apis: JsonObject = {
	basePath: '134434',
	paths: {
		'/auth/login': {
			...localLogin
		},
		'/auth/google': {
			...externalLogin
		},
		'/auth/facebook': {
			...externalLogin
		},
		'/auth/forgot': {
			...forgotPassword
		},
		'/auth/reset?token={token}': {
			...resetToken
		}
	}
};
