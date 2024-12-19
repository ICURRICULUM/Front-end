import React from 'react';

interface TextInputProps {
  title: string;
  value?: string;
  setValue?: (value: string) => void;
  placeholderText: string;
  canEdit: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  title,
  value,
  setValue,
  placeholderText,
  canEdit,
}) => {
  return (
    <div className="space-y-1">
      <div className="text-sm font-semibold">{title}</div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue?.(e.target.value)}
        placeholder={placeholderText}
        disabled={!canEdit}
        className="w-full rounded-five border border-[#757575] px-4 py-[15px]"
      />
    </div>
  );
};

export default TextInput;
