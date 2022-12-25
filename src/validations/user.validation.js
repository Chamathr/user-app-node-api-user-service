const { Joi, Segments } = require('celebrate');

const userValidation = {
    
    signupUser: {
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            age: Joi.number().integer().required(),
        })
    },

    deleteProfile: {
        [Segments.PARAMS]: {
            email: Joi.string().email().required()
        }
    },

    updateProfile: {
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required(),
        }).unknown(),
        [Segments.PARAMS]: {
            email: Joi.string().email().required()
        },
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string(),
            age: Joi.number().integer(),
            password: Joi.string().required()
        })
    },

    signinUser: {
        [Segments.BODY]: Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        })
    },
}

module.exports = { userValidation }