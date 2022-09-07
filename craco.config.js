const CracoSwc = require('craco-swc');
const Swc = require('@swc/core')

/** @type {Swc.Config} */
const swcOptions = {
    jsc: {
        target: 'es2020',
        keepClassNames: true,
        preserveAllComments: true,
        minify: process.env.NODE_ENV === 'production',
        parser: {
            syntax: 'ecmascript',
            jsx: true,
            decorators: true,
            decoratorsBeforeExport: true,
            functionBind: true,
        },
        transform: {
            decoratorMetadata: true,
            treatConstEnumAsEnum: true,
            react: {
                development: process.env.NODE_ENV !== 'production',
                throwIfNamespace: true
            }
        }
    }
}

module.exports = {
    plugins: [{
        plugin: CracoSwc,
        options: swcOptions
    }]
}