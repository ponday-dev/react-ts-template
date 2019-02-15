const dotenv = require('dotenv').config().parsed;

module.exports = () => {
    const raw = Object.assign(
        {
            NODE_ENV: process.env.NODE_ENV || 'development',
        },
        process.env,
        dotenv
    );
    return {
        'process.env': Object.keys(raw).reduce((env, key) => {
            env[key] = JSON.stringify(raw[key]);
            return env;
        }, {}),
    };
};
