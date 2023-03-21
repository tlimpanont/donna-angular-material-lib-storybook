import {
  Story,
  Meta,
  moduleMetadata,
  componentWrapperDecorator,
} from '@storybook/angular';
import { TheuyUiModule, TheuyUiComponent } from 'theuy-ui';

export default {
  title: 'Example/MyLib',
  component: TheuyUiComponent,
  decorators: [
    moduleMetadata({
      imports: [TheuyUiModule],
    }),
  ],
} as Meta;

const Template: Story<TheuyUiComponent> = (args: TheuyUiComponent) => ({
  props: args,
});

export const DonnaTheme = Template.bind({});

DonnaTheme.args = {} as Partial<TheuyUiComponent>;
DonnaTheme.parameters = {
  layout: 'fullscreen',
};
DonnaTheme.decorators = [
  componentWrapperDecorator(
    (story) => `<div class="donna-theme">${story}</div>`
  ),
];

export const NSTheme = Template.bind({});

NSTheme.args = {} as Partial<TheuyUiComponent>;
NSTheme.decorators = [
  componentWrapperDecorator((story) => `<div class="ns-theme">${story}</div>`),
];
