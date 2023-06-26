"use strict";

const logLevels = {'debug': 0, 'info': 1, 'warning': 2, 'error': 3};

class CSPLogger {
    constructor (applicationName) {
        this.applicationName = applicationName
    }

    createDebugItem (message, file, line) {
        let body = {
            applicationName: this.applicationName,
            datetime: new Date().toISOString(),
            logLevel: logLevels.debug,
            message
        }

        if (file) {
            body.file = file;
        }

        if (line) {
            body.line = line;
        }

        return this.jsonConvert(body);
    }

    createInfoItem (message, file, line) {
        let body = {
            payload: 'showing app info',
            applicationName: this.applicationName,
            datetime: new Date().toISOString(),
            logLevel: logLevels.info,
            message
        }

        if (file) {
            body.file = file;
        }

        if (line) {
            body.line = line;
        }

        return this.jsonConvert(body);
    }

    createWarningItem (message, file, line) {
        let body = {
            applicationName: this.applicationName,
            datetime: new Date().toISOString(),
            logLevel: logLevels.warning,
            message
        }

        if (file) {
            body.file = file;
        }

        if (line) {
            body.line = line;
        }

        return this.jsonConvert(body);
    }

    createErrorItem (message, file, line) {
        const body = {
            applicationName: this.applicationName,
            datetime: new Date().toISOString(),
            logLevel: logLevels.error,
            message
        }

        if (file) {
            body.file = file;
        }

        if (line) {
            body.line = line;
        }

        return this.jsonConvert(body);
    }

    jsonConvert (obj) {
        return '\n' + JSON.stringify(obj, null, 2).replace(/\n/g, "");
    }
}



module.exports = CSPLogger;