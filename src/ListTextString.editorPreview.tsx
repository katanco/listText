import { ReactElement, createElement } from "react";
import { ListTextStringPreviewProps } from "../typings/ListTextStringProps";

export function preview(props: ListTextStringPreviewProps): ReactElement {
    return (
        <props.renderMode>
            {props.textTemplate + props.separator + props.textTemplate + props.finalSeparator + props.textTemplate}
        </props.renderMode>
    );
}
