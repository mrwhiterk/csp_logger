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

        return this.convert(body);
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

        return this.convert(body);
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

        return this.convert(body);
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

        return this.convert(body);
    }

    jsonConvert (obj) {
        return '\n' + JSON.stringify(obj, null, 2).replace(/\n/g, "");
    }

    convert (obj) {
        let result = '';

        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                result += obj[key] + '|';
            } else {
                result += '|';
            }
        }

        result = result.slice(0, -1);

        return result;
    }
}

var test = new CSPLogger("test logger")
var result = test.createDebugItem("some message", 1, 2)



module.exports = CSPLogger;