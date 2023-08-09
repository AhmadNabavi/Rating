import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import RatingComponent from "./Rating"

export class Rating implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private theComponent: ComponentFramework.ReactControl<IInputs, IOutputs>;
    private notifyOutputChanged: () => void;

    private props = {
        rate: 0,
        inputParameterChanged: true,
        sendToOuput: this.callOutputs.bind(this)
    }

    private _rate: number = 0;

    constructor() { }

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;
    }

    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {

        this.props.rate = context.parameters.rate.raw || 0;
        this.props.inputParameterChanged = true;
        return React.createElement(RatingComponent, this.props);
    }

    public callOutputs(val_rate: number) {

        this._rate = val_rate;
        this.props.inputParameterChanged = true;
        this.notifyOutputChanged();
    }

    public getOutputs(): IOutputs {

        return {
            rate: this._rate
        };
    }

    public destroy(): void {
    }
}