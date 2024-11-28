interface IInput {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onEnter?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export default IInput