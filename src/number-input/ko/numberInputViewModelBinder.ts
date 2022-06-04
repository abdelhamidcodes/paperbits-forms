import { NumberInput } from "./numberInput";
import { ViewModelBinder } from "@paperbits/common/widgets";
import { NumberInputModel } from "../numberInputModel";
import { EventManager, Events } from "@paperbits/common/events";
import { StyleCompiler } from "@paperbits/common/styles";
import { Bag } from "@paperbits/common";
import { ComponentFlow, IWidgetBinding } from "@paperbits/common/editing";


export class NumberInputViewModelBinder implements ViewModelBinder<NumberInputModel, NumberInput>  {
    constructor(
        private readonly eventManager: EventManager,
        private readonly styleCompiler: StyleCompiler
    ) { }

    public async modelToViewModel(model: NumberInputModel, viewModel?: NumberInput, bindingContext?: Bag<any>): Promise<NumberInput> {
        if (!viewModel) {
            viewModel = new NumberInput();
        }

        viewModel.label(model.label);
        viewModel.name(model.name);
        viewModel.value(model.value);
        viewModel.readonly(model.readonly);
        viewModel.required(model.required);
        viewModel.min(model.min);
        viewModel.max(model.max);
        viewModel.placeholder(model.placeholder);

        if (model.styles) {
            viewModel.styles(await this.styleCompiler.getStyleModelAsync(model.styles, bindingContext?.styleManager));
        }

        const binding: IWidgetBinding<NumberInputModel, NumberInputModel> = {
            displayName: "Number input",
            layer: bindingContext?.layer,
            model: model,
            draggable: true,
            flow: ComponentFlow.Block,
            editor: "number-input-editor",
            applyChanges: async () => {
                await this.modelToViewModel(model, viewModel, bindingContext);
                this.eventManager.dispatchEvent(Events.ContentUpdate);
            }
        };

        viewModel["widgetBinding"] = binding;        

        return viewModel;
    }

    public canHandleModel(model: NumberInputModel): boolean {
        return model instanceof NumberInputModel;
    }
}