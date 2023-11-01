import Joi from "joi";

const signupValidation = Joi.object({
    username: Joi.string().required().min(5).max(30),
    email: Joi.string().email().required(),
    role: Joi.string(),
    password: Joi.string().required().min(6),
    confirmPassword: Joi.string().required().valid(Joi.ref('password')).messages({
        'string.empty': 'Confirm password không được bỏ trống',
        'string.base': 'Confirm password là chuỗi kí tự',
        'any.required': 'Confirm password là bắt buộc',
        'any.only': 'Confirm password không khớp với password',
    }),
});

const signinValidation = Joi.object({

})

export { signinValidation, signupValidation }