import Footer from './Footer';

export default {
  title: 'navigation/Footer',
  component: Footer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} 

const Template= (args) => <Footer {...args} />;

export const Base = Template.bind({});
Base.args = {} ;
