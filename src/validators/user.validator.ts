import Joi from "joi";

const userValidators = Joi.object({
    username: Joi.string().pattern(/^\w{4,}$/).required()
        .messages({'string.pattern.base' : 'only chars allowed & more then 4 chars'}),
    password: Joi.string().min(3).max(6).required()
        .messages({"string.min":"password must be at least 3 characters",
            'string.max': 'password must less 6 characters'}),
    age: Joi.number().min(1).max(117).required()
        .messages({"number.min":"min age is 1",
            'number.max': 'max age is 117'}),
})
export default userValidators;