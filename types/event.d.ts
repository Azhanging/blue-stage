import Base from "./base";
declare type EventName = string;
declare type EventHandler = Function;
export declare class CanvasEvent extends Base {
    events: {
        [k: string]: Function[];
    };
    constructor();
    emit(eventName: EventName, _Event: Event): void;
    on(eventName: EventName, handler: EventHandler): void;
    off(eventName: EventName, handler: EventHandler): void;
    _getEvents(eventName: EventName): Function[];
}
export {};
