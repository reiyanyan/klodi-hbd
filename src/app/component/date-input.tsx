import "./styles/date.css";

import { FormEventHandler, useEffect, useState } from "react";

import Calendar from "./icon/calendar";
import Input from "./input";
import moment from "moment";

type InputDateProps = React.HTMLAttributes<HTMLInputElement> & {
  onDateChange?: (val: string) => void;
};

const FORMAT_DATE = "YYYY-MM-DD";

export default function DateInput({ onDateChange, ...rest }: InputDateProps) {
  const [value, setValue] = useState(moment().format(FORMAT_DATE));

  function handleChange(e: string) {
    const userInput = moment(String(e));

    // const isBetween = userInput.isBetween(
    //   moment().subtract(1, "day").endOf("day"),
    //   moment().add(30, "day").endOf("day")
    // );

    // if (isBetween) setValue(userInput.format(FORMAT_DATE));
    // else setValue(moment().format(FORMAT_DATE));
    setValue(userInput.format(FORMAT_DATE));
  }

  useEffect(() => {
    onDateChange && onDateChange(String(moment().diff(value, "years")));
  }, [value]);

  return (
    <div className="relative">
      <Input
        {...rest}
        type="date"
        value={value}
        onChange={(val) => handleChange(String(val))}
      />
      <Calendar className="absolute text-base right-0 top-1/2 -translate-y-1/2 -translate-x-1/2"></Calendar>
    </div>
  );
}
