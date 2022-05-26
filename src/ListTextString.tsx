import { ReactElement, createElement } from "react";

import { ListTextStringContainerProps } from "../typings/ListTextStringProps";
import classNames from "classnames";

import "./ui/ListTextString.css";

export function ListTextString(props: ListTextStringContainerProps): ReactElement {
    return (
        <props.renderMode className={classNames("mx-text", props.class)} style={props.style}>
            {props.Prefix?.value +
                concatenateList(
                    props.dataSource.items?.map(object => props.textTemplate.get(object).value || "") || [],
                    props.seperator.value || "",
                    props.finalSeperator.value || "",
                    props.distinctFinalSeperator,
                    props.replaceSeperator
                ) +
                props.Suffix?.value}
        </props.renderMode>
    );
}

function concatenateList(
    stringList: string[],
    seperator: string,
    finalSeperator: string,
    useFinalSeperator: boolean,
    replaceSeperator: boolean
): string {
    if (stringList.length > 1) {
        if (!useFinalSeperator) {
            return stringList.join(seperator);
        } else {
            const lastString = stringList.pop();
            return stringList.join(seperator) + (replaceSeperator ? "" : seperator) + finalSeperator + lastString;
        }
    } else {
        return stringList[0] || "";
    }
}
