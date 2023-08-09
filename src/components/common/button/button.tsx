export interface IButtonProps {
  type?: "button" | "submit" | "reset",
  className: string,
  label: string,
  onClick?(arg: any): void,
  disabled?: boolean
}

const Button = ({ type="button", label, className, onClick, disabled=false }: IButtonProps) => {
  return (
    <button
      type={type}
      className={className}
      onClick={() => onClick && onClick(true)}
      disabled={disabled}
    >
      { label }
    </button>
  );
}

export { Button};