import { ILogEvent, LogLevel } from '@log4js2/core';

export interface IHttpLogEvent {

    message: string;
    level: LogLevel;
    raw?: ILogEvent;

}
