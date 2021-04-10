﻿import { IWidgetOrder, IWidgetHandler } from "@paperbits/common/editing";
import { NumberInputModel } from "./numberInputModel";


export class NumberInputHandlers implements IWidgetHandler {
    public async getWidgetOrder(): Promise<IWidgetOrder> {
        const widgetOrder: IWidgetOrder = {
            name: "input:number",
            category: "Forms",
            displayName: "Number input",
            iconClass: "widget-icon widget-icon-number-input",
            requires: ["form", "html", "js"],
            createModel: async () => {
                return new NumberInputModel();
            }
        };

        return widgetOrder;
    }
}