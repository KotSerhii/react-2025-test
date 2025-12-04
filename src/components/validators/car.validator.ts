import Joi from "joi";


const CarValidator = Joi.object({
    brand: Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$')).required()
        .messages({'string.pattern.base':'Your name did not match the pattern!'}),
    price: Joi.number().min(0).max(1000000).required()
    .messages({'number.min':'min price is 1!',
        'number.max':'max price is 1 000 000!'}),
    year: Joi.number().min(1980).max(2025).required()
    .messages({'number.min':'min year is 1980',
        'number.max':'max year is 2025',})
})


export default CarValidator;