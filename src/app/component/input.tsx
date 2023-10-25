type InputProps = JSX.IntrinsicElements["input"] & {
  value?: string;
  onChange?: (value: string) => void;
};

export default function Input({ value, onChange, ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className={
        "placeholder-gray-500 px-6 py-4 w-full text-white text-lg font-medium bg-gray-800 rounded-lg outline-none"
      }
      value={value}
      onChange={(e) => (onChange ? onChange(e.target.value) : {})}
    />
  );
}
