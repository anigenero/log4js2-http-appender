import { Appender, ILogEvent, LogAppender } from '@log4js2/core';
import { IHttpAppenderConfiguration } from './http.appender.config';
import { IHttpLogEvent } from './http.log.event';

@Appender('HttpAppender')
export class HttpAppender extends LogAppender<IHttpAppenderConfiguration> {

    constructor(private readonly _config: IHttpAppenderConfiguration) {

        super(_config);

        if (!_config || !_config.url) {
            throw new Error('HttpAppender requires valid url argument');
        }

    }

    /**
     * Appends the log even
     *
     * @param {ILogEvent} logEvent
     */
    public append(logEvent: ILogEvent) {
        if (logEvent.level <= this.getLogLevel()) {
            this._appendHttpLogEvent(logEvent);
        }
    }

    /**
     *
     * @param {ILogEvent} event
     * @private
     */
    private _appendHttpLogEvent(event: ILogEvent) {

        const httpEvent: IHttpLogEvent = {
            message: this.format(event),
            level: event.level
        };

        if (this._config.pushRaw) {
            httpEvent.raw = event;
        }

        // TODO: publish event

    }

}
