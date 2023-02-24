export interface EmailNotifierContract {
    send(): Promise<void>
}