import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { StoryFn } from '@storybook/react';
import DropdownComponent from '@/components/Dropdown';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Dropdown',
    component: DropdownComponent
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition
const Template: StoryFn<typeof DropdownComponent> = ({
    hasClear,
    isLoading,

    onIconClick
}) => (
    <DropdownComponent
        hasClear={hasClear}
        header="Dropdown header"
        isLoading={isLoading}
        onIconClick={onIconClick}
        searches={['Milk', 'Bread']}
    />
);

Template.args = {
    hasClear: false,
    isLoading: false,
    onIconClick(search) {
        alert('clicked ' + search);
    }
};

export const Dropdown = Template.bind({});
