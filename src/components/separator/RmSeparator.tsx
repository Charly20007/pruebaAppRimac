const RmSeparator = ({ ...props }: { height?: number; bgColor?: string }) => {
  const styles = (): any => {
    const sty: { [key in string]: string } = {
      height: "10px",
    };

    if (props?.bgColor) {
      sty["backgroundColor"] = props.bgColor;
    }

    if (props?.height) {
      sty["height"] = props.height + "px";
    }
    return sty;
  };

  return (
    <div
      style={{
        width: "100%",
        ...styles(),
      }}
    ></div>
  );
};

export default RmSeparator;
