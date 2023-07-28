interface IButton {
  text: string;
  onClick: () => void;
  className: string;
}

export const CustomButton = (props: IButton) => {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.text}
    </button>
  );
};
