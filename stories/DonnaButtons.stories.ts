import {
  Story,
  Meta,
  moduleMetadata,
} from '@storybook/angular';
import { TheuyUiModule, TheuyUiComponent } from 'theuy-ui';

export default {
  title: 'Themes/Donna',
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

export const Buttons = Template.bind({});

Buttons.args = {} as Partial<TheuyUiComponent>;
Buttons.parameters = {
  layout: 'centered',
};
