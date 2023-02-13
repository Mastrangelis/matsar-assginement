import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { StoryFn } from '@storybook/react';
import SearchComponent from '@/components/Navbar/Search';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Search',
    component: SearchComponent
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition
const Template: StoryFn<typeof SearchComponent> = ({ isMenuIcon }) => (
    <SearchComponent isMenuIcon={isMenuIcon} />
);

Template.args = {
    isMenuIcon: false
};

export const Search = Template.bind({});
