import { register } from '@aurelia/plugin-svg';
import { withActions } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { StoryFn } from '@storybook/addons';
import { addContainer, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { JitHtmlBrowserConfiguration } from 'aurelia';
import { ContentLoader } from './../src/content-loader/content-loader';

type StoryType = StoryFn<Partial<StoryFnAureliaReturnType>> & {
    story: { name: string };
};


const container = JitHtmlBrowserConfiguration.createContainer();
register(container);
container.register(ContentLoader);


export default {
    title: 'Buttons|Buttons',
    decorators: [withKnobs, withActions, addContainer(container)],
};

export const SimpleCoolButtonStory: StoryType = () => ({
    customElement: ContentLoader
});

SimpleCoolButtonStory.story = {
    name: 'Material Button',
};