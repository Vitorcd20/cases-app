interface HandleComponentProps {
    style?: React.CSSProperties;
  }

const HandleComponent = ({style}: HandleComponentProps) => {
  return (
    <div className="w-5 h-5 rounded-full shadow border bg-white border-zinc-200 transition hover:bg-primary" style={style}></div>
  );
};

export default HandleComponent;
