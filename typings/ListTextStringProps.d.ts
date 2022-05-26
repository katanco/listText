/**
 * This file was generated from ListTextString.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { DynamicValue, ListValue, ListExpressionValue } from "mendix";

export type RenderModeEnum = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface ListTextStringContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    dataSource: ListValue;
    textTemplate: ListExpressionValue<string>;
    renderMode: RenderModeEnum;
    seperator: DynamicValue<string>;
    distinctFinalSeperator: boolean;
    finalSeperator: DynamicValue<string>;
    replaceSeperator: boolean;
    Prefix?: DynamicValue<string>;
    Suffix?: DynamicValue<string>;
}

export interface ListTextStringPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    dataSource: {} | { type: string } | null;
    textTemplate: string;
    renderMode: RenderModeEnum;
    seperator: string;
    distinctFinalSeperator: boolean;
    finalSeperator: string;
    replaceSeperator: boolean;
    Prefix: string;
    Suffix: string;
}
