import { Application } from "express";

export interface RouterContract {
    addRouterToServer(app: Application):void
}