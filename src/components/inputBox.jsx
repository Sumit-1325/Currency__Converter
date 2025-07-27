import React, { useId } from 'react';

// --- Reusable Input Box Component ---
// A component for amount input and currency selection.
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "inr",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  // Generate a unique ID for accessibility.
  const inputId = useId();

  return (
    // Added relative positioning and z-index to help with stacking issues.
    <div className={`bg-white p-3 rounded-lg text-sm flex relative z-10 ${className}`}>
      <div className="w-1/2">
        <label htmlFor={inputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={inputId}
          className="outline-none w-full bg-transparent py-1.5 text-black"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          // Notify parent component of amount changes.
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          // Changed background for better contrast and added text color.
          className="rounded-lg px-1 py-1 bg-gray-200 text-black cursor-pointer outline-none"
          value={selectedCurrency}
          disabled={currencyDisabled}
          // Notify parent component of currency changes.
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {/* Map over currency options to create dropdown items. */}
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
