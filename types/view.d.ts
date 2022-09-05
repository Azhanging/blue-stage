import { CanvasEvent } from "./event";
import type { Stage } from "./stage";
import type { PartialViewOptions } from "./types";
export declare class View extends CanvasEvent {
    options: PartialViewOptions;
    children: View[];
    parent: View | null;
    type: string;
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(_options: PartialViewOptions);
    stage: Stage | null;
    append(children: View): void;
    setStage(): void;
    render(handler?: Function): void;
    renderChildren(): void;
    path(handler: Function): void;
    getCanvasContext(): CanvasRenderingContext2D;
}
