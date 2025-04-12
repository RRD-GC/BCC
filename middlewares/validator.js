const Joi = require('joi');

exports.signupSchema = Joi.object({
	email: Joi.string()
		.min(6)
		.max(60)
		.required()
		.email({
			tlds: { allow: ['com', 'net'] },
		}),
	password: Joi.string()
		.required()
		.pattern(new RegExp('^(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=[\\]{};\'"\\\\|,.<>\\/?]).*$'))
		.message('Password must contain at least one uppercase letter, one number, and one special character')
});
exports.loginSchema = Joi.object({
	email: Joi.string()
		.min(6)
		.max(60)
		.required()
		.email({
			tlds: { allow: ['com', 'net'] },
		}),
	password: Joi.string()
		.required()
		.pattern(new RegExp('^(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=[\\]{};\'"\\\\|,.<>\\/?]).*$')),
});

exports.acceptCodeSchema = Joi.object({
	email: Joi.string()
		.min(6)
		.max(60)
		.required()
		.email({
			tlds: { allow: ['com', 'net'] },
		}),
	providedCode: Joi.number().required(),
});

exports.changePasswordSchema = Joi.object({
	newPassword: Joi.string()
		.required()
		.pattern(new RegExp('^(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=[\\]{};\'"\\\\|,.<>\\/?]).*$')),
	oldPassword: Joi.string()
		.required()
		.pattern(new RegExp('^(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=[\\]{};\'"\\\\|,.<>\\/?]).*$')),
});

exports.acceptFPCodeSchema = Joi.object({
	email: Joi.string()
		.min(6)
		.max(60)
		.required()
		.email({
			tlds: { allow: ['com', 'net'] },
		}),
	providedCode: Joi.number().required(),
	newPassword: Joi.string()
		.required()
		.pattern(new RegExp('^(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=[\\]{};\'"\\\\|,.<>\\/?]).*$')),
});

exports.createPostSchema = Joi.object({
	title: Joi.string().min(3).max(60).required(),
	description: Joi.string().min(3).max(600).required(),
	postsImage: Joi.string().optional(),
	userId: Joi.string().required(),
});
