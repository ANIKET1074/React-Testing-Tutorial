type Props = {
  name?: string;
};

const Greet = (props: Props) => {
  return <div>Hello {props.name}</div>;
};

export default Greet;
