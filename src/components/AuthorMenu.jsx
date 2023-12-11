import React, {Component} from 'react'
import {
    Button,
    Checkbox, Container,
    Form, Header,
    Input, Menu,
    Radio,
    Select,
    TextArea,
} from 'semantic-ui-react'
import {observable, action, makeObservable} from 'mobx';
import {observer} from "mobx-react";

export class LocalStore {
    activeItem = undefined;
    authoring = {};
    synopsis = undefined;


    constructor() {
        makeObservable(this, {
            activeItem: observable,
            authoring: observable,
            synopsis: observable,
            setActiveItem: action,
            setAuthoring: action,
            setSynopsis: action,
        });
        this.setActiveItem('authorIntentions');
    }

    setActiveItem = (activeItem) => {
        this.activeItem = activeItem;
    };

    setAuthoring = (activeItem, authorDescription) => {
        this.authoring[activeItem] = authorDescription;
    };

    setSynopsis = (synopsis) => {
        this.synopsis = synopsis;
    };


}
@observer
export default class AuthorMenu extends Component {
    localStore = new LocalStore();
    handleItemClick = (e, {name}) => {
        console.log(e);
        console.log(name);

        this.localStore.setActiveItem(name);
    }

    handleTextChange = (event) => {
        console.log(event);
        this.localStore.setAuthoring(this.localStore.activeItem, event.target.value);
    };

    handleSynopsisChange = (event) => {
        console.log(event);
        this.localStore.setSynopsis(event.target.value);
    };

    handleAuthoringSubmit = (event) => {
        console.log(event);
        //print as array
        console.log(Object.keys(this.localStore.authoring));
        Object.keys(this.localStore.authoring).forEach(key => {
            console.log(key);
            console.log(this.localStore.authoring[key]);
        });

        // this.localStore.setSynopsis(event.target.value);
    };

    handleSynopsisSubmit = (event) => {
        console.log(event);
        // this.localStore.setSynopsis(event.target.value);
    };

    render() {

        return (
            <div>
                <Menu>
                    <Menu.Item
                        name='authorIntentions'
                        active={this.localStore.activeItem === 'authorIntentions'}
                        onClick={this.handleItemClick}
                    >
                        Author Intentions
                    </Menu.Item>

                    <Menu.Item
                        name='audienceDescription'
                        active={this.localStore.activeItem === 'audienceDescription'}
                        onClick={this.handleItemClick}
                    >
                        Audience Description
                    </Menu.Item>

                    <Menu.Item
                        name='editorIntentions'
                        active={this.localStore.activeItem === 'editorIntentions'}
                        onClick={this.handleItemClick}
                    >
                        Editor Intentions
                    </Menu.Item>
                </Menu>
                <Form onSubmit={this.handleAuthoringSubmit}>
                    <Form.Field
                        control={TextArea}
                        // label={this.localStore.activeItem}
                        value={this.localStore.authoring?.[this.localStore.activeItem]??''}
                        onChange={this.handleTextChange}
                        placeholder='Tell us more about you...'
                    />
                    {/*<Form.Field*/}
                    {/*    control={Checkbox}*/}
                    {/*    label='I agree to the Terms and Conditions'*/}
                    {/*/>*/}
                    <Form.Field control={Button}>Submit</Form.Field>
                </Form>
                <Form onSubmit={this.handleSynopsisSubmit}>
                    <Form.Field
                        control={TextArea}
                        label={'Synopsis'}
                        value={this.localStore.synopsis}
                        onChange={this.handleSynopsisChange}
                        placeholder='About article...'
                    />
                    {/*<Form.Field*/}
                    {/*    control={Checkbox}*/}
                    {/*    label='I agree to the Terms and Conditions'*/}
                    {/*/>*/}
                    <Form.Field control={Button}>Submit</Form.Field>
                </Form>
            </div>
        )
    }
}