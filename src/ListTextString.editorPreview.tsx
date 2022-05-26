import { ReactElement, createElement } from "react";
import { ListTextStringPreviewProps } from "../typings/ListTextStringProps";

export function preview(props: ListTextStringPreviewProps): ReactElement {
    return (
        <props.renderMode>
            {props.textTemplate + props.seperator + props.textTemplate + props.finalSeperator + props.textTemplate}
        </props.renderMode>
    );
}

export function getPreviewCss(): string {
    return require("./ui/ListTextString.css");
}
