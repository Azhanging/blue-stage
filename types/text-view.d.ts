import { View } from "./view";
import type { PartialViewOptions } from "./types";
declare type TextViewOptions = PartialViewOptions & {
    content: string;
};
export declare class TextView extends View {
    content: string;
    constructor(options: TextViewOptions);
    render(): void;
}
export {};
