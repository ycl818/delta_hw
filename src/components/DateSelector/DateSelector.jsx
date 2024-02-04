import { DatePicker, InputGroup } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./DateSelector.scss";

const DateSelector = () => {
  return (
    <InputGroup className="dateSelector__wrapper">
      <DatePicker
        format="MMMM dd, yyyy"
        block
        appearance="subtle"
        style={{ width: 230 }}
      />
      <InputGroup.Addon>to</InputGroup.Addon>
      <DatePicker
        format="MMMM dd, yyyy"
        block
        appearance="subtle"
        style={{ width: 230 }}
      />
    </InputGroup>
  );
};

export default DateSelector;
