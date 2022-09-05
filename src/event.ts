import Base from "./base";

type EventName = string;
type EventHandler = Function;

export class CanvasEvent extends Base {
  events: {
    [k: string]: Function[];
  };
  constructor() {
    super();
    this.events = {};
  }
  //触发事件
  emit(eventName: EventName, _Event: Event) {
    const currentEvents = this._getEvents(eventName);
    if (currentEvents) {
      currentEvents.forEach((handler: EventHandler) => {
        handler.call(this, _Event);
      });
    }
  }
  //注册事件
  on(eventName: EventName, handler: EventHandler) {
    const currentEvents = this._getEvents(eventName);
    const { events } = this;
    if (!currentEvents) {
      events[eventName] = [];
    }
    events[eventName].push(handler.bind(this));
  }
  //注销事件
  off(eventName: EventName, handler: EventHandler) {
    const currentEvents = this._getEvents(eventName);
    if (!currentEvents) return;
    let index = 0;
    while (index < currentEvents.length) {
      const findIndex = currentEvents.indexOf(handler);
      if (findIndex !== -1) {
        currentEvents.splice(findIndex, 1);
      }
      ++index;
    }
  }
  _getEvents(eventName: EventName) {
    return this.events[eventName];
  }
}
