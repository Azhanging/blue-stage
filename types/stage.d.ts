import { View } from "./view";
import type { PartialViewOptions } from "./types";
declare type StageOptions = PartialViewOptions & {
    el: string;
    root: Stage;
};
export declare class Stage extends View {
    canvasElm: HTMLCanvasElement;
    canvasCtx: CanvasRenderingContext2D;
    options: StageOptions;
    stage: Stage;
    constructor(options: StageOptions);
    append(children: View): void;
}
export {};
