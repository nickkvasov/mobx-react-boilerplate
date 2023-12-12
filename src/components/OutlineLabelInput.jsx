import React, { Component } from "react";
import { Icon, Input, Label } from "semantic-ui-react";

export class OutlineLabelInput extends Component {
    render() {
        const { defaultValue, placeholder, onChange, onLabelClick } = this.props;

        return (
            <Input
                defaultValue={defaultValue}
                focus
                placeholder={placeholder?? ""}
                onChange={onChange}
                label={
                    <Label as="a" corner="right" onClick={onLabelClick}>
                        <Icon name="delete" />
                    </Label>
                }
            />
        );
    }
}
