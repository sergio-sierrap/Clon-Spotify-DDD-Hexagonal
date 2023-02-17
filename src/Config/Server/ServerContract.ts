export interface ServerContract {
    listen(): Promise<void>;
    stop(): Promise<void>;
}