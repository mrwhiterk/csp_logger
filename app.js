"use strict";

class CSPLogger {
    constructor (applicationName) {
        this.applicationName = applicationName
    }

    log (datetime, category, message, file, line) {


        const body = {
            applicationName: this.applicationName,
            datetime,
            category,
            message
        }

        if (file) {
            body.file = file;
        }

        if (line) {
            body.line = line;
        }

        return body;
    }

    debug (category, message) {
        //show details for debugging
        return {
            payload: 'debugging app',
            applicationName: this.applicationName,
            category,
            message
        }
    }

    info (category, message) {
        //show styled info
        return {
            payload: 'showing app info',
            applicationName: this.applicationName,
            category,
            message
        }
    }

    warning (category, message) {
        //show styled info
        return {
            payload: 'show app warning',
            applicationName: this.applicationName,
            category,
            message
        }
    }


}



module.exports = CSPLogger;





