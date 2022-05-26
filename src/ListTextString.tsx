import { ReactElement, createElement } from "react";

import { ListTextStringContainerProps } from "../typings/ListTextStringProps";
import classNames from "classnames";

export function ListTextString(props: ListTextStringContainerProps): ReactElement {
    return (
        <props.renderMode className={classNames("mx-text", props.class)} style={props.style}>
            {props.Prefix?.value +
                concatenateList(
                    props.dataSource.items?.map(object => props.textTemplate.get(object).value || "") || [],
                    props.separator.value || "",
                    props.finalSeparator.value || "",
                    props.distinctFinalSeparator,
                    props.replaceSeparator
                ) +
                props.Suffix?.value}
        </props.renderMode>
    );
}

function concatenateList(
    stringList: string[],
    separator: string,
    finalSeparator: string,
    useFinalSeparator: boolean,
    replaceSeparator: boolean
): string {
    if (stringList.length > 1) {
        if (!useFinalSeparator) {
            return stringList.join(separator);
        } else {
            const lastString = stringList.pop();
            return stringList.join(separator) + (replaceSeparator ? "" : separator) + finalSeparator + lastString;
        }
    } else {
        return stringList[0] || "";
    }
}
