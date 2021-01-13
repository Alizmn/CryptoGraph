import SparkGraph from "../components/SparkGraph";

export default {
  title: "SparkGraph",
  component: SparkGraph
};

const Template = (args) => <SparkGraph {...args}/>;

export const Empty = Template.bind({});
Empty.args = {desc:"Ali", hello:"Asghar"}; 