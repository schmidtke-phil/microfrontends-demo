// This file is necessary to use Scale-Components with Typescript

declare namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: any;
    }
}