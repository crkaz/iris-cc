export interface IDashTile {
    readonly colSpan: string;
    readonly backgroundColour: string;
    readonly header: string;
    readonly footer: string;
    readonly imgPath: string;
    readonly text: string;
    readonly onClick: Function;
}
