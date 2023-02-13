import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { StoryFn } from '@storybook/react';
import { Spinner as SpinnerComponent } from '@/components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Spinner',
    component: SpinnerComponent,
    args: {
        color: 'primary'
    }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition
const Template: StoryFn<typeof SpinnerComponent> = ({ color }) => (
    <SpinnerComponent color={color} />
);

export const Spinner = Template.bind({});
