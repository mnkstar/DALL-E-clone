const FormField = ({
  lableName,
  type,
  name,
  placeholder,
  value,
  handleChance,
  isSurpriseMe,
  handleSurprise,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-800"
        />
      </div>
    </div>
  );
};

export default FormField;
