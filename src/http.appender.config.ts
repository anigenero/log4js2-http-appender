export interface IHttpAppenderConfiguration {

    batch?: boolean;
    batchThreshold?: number;

    pushRaw?: boolean;

    url: string;

}
