import React, {Component} from 'react'
import {Accordion, Button, Checkbox, Form, Header, Menu, TextArea,} from 'semantic-ui-react'
import {observer} from "mobx-react";
import {AuthorMenuModel} from "./models/AuthorMenuModel";
import {OutlineLabelInput} from "./OutlineLabelInput";


const level1Panels = [
    { key: 'panel-1a', title: 'Level 1A', content: 'Level 1A Contents' },
    { key: 'panel-ba', title: 'Level 1B', content: 'Level 1B Contents' },
]

const Level1Content = (
    <div>
        <OutlineLabelInput defaultValue={'EEEEEEEEEEEEEEEEEEEEE'}/>
        <Accordion.Accordion panels={level1Panels}/>
    </div>
)

const level2Panels = [
    { key: 'panel-2a', title: 'Level 2A', content: 'Level 2A Contents' },
    { key: 'panel-2b', title: 'Level 2B', content: 'Level 2B Contents' },
]

const Level2Content = (
    <div>
        Welcome to level 2
        <Accordion.Accordion panels={level2Panels} />
    </div>
)

const rootPanels = [
    { key: 'panel-1', content: { content: Level1Content } },
    { key: 'panel-2', title: 'Level 2', content: { content: Level2Content } },
]

@observer
export default class AuthorMenu extends Component {
    localStore = new AuthorMenuModel();
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
        console.log(Object.keys(this.localStore.authoring));
        Object.keys(this.localStore.authoring).forEach(key => {
            console.log(key);
            console.log(this.localStore.authoring[key]);
        });
    };

    handleSynopsisSubmit = (event) => {
        console.log(event);
    };



    render() {

        return (
            <div>
                <Header size='medium'>Editorials</Header>
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
                    <Menu.Item
                        name='styleIntentions'
                        active={this.localStore.activeItem === 'styleIntentions'}
                        onClick={this.handleItemClick}
                    >
                        Style Intentions
                    </Menu.Item>
                </Menu>
                <Form onSubmit={this.handleAuthoringSubmit}>
                    <Form.Field
                        control={TextArea}
                        // label={this.localStore.activeItem}
                        value={this.localStore.authoring?.[this.localStore.activeItem]??''}
                        onChange={this.handleTextChange}
                        placeholder='Tell us more about ...'
                    />
                    <Form.Field
                        control={Checkbox}
                        label='Ready for review'
                    />
                    <Form.Field control={Button}>Generate Synopsys</Form.Field>
                </Form>
                <Form onSubmit={this.handleSynopsisSubmit}>
                    <Header size='medium'>Synopsis</Header>
                    <Form.Field
                        control={TextArea}
                        value={this.localStore.synopsis}
                        onChange={this.handleSynopsisChange}
                        placeholder='About article...'
                    />
                    {/*<Form.Field*/}
                    {/*    control={Checkbox}*/}
                    {/*    label='I agree to the Terms and Conditions'*/}
                    {/*/>*/}
                    <Form.Field control={Button}>Generate Outline</Form.Field>
                </Form>
                <Form onSubmit={this.handleSynopsisSubmit}>
                    <Header size='medium'>Article Outline</Header>
                    <Form.Field
                        control={() => <Accordion defaultActiveIndex={0} panels={rootPanels} styled />}
                        value={this.localStore.outline}
                        onChange={this.handleSynopsisChange}
                        placeholder='About article...'
                    />
                    {/*<Form.Field*/}
                    {/*    control={Checkbox}*/}
                    {/*    label='I agree to the Terms and Conditions'*/}
                    {/*/>*/}
                    <Form.Field control={Button}>Generate Outline</Form.Field>
                </Form>
            </div>
        )
    }
}