export interface DatabaseContract {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
}