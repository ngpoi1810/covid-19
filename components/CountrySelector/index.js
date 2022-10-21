import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  NativeSelect,
} from "@material-ui/core";

function CountrySelector({ value, handleOnChange, countries }) {
  return (
    <>
      <FormControl>
        <InputLabel htmlFor="country-selector" shrink>
          Quốc Gia
        </InputLabel>
        <NativeSelect
          value={value}
          onChange={handleOnChange}
          inputProps={{ name: "country", id: "country-selector" }}
        >
          {countries.map((country) => {
            return (
              <option value={country.ISO2.toLowerCase()}>
                {country.Country}
              </option>
            );
          })}
        </NativeSelect>
        <FormHelperText>Lựa chọn Quốc Gia</FormHelperText>
      </FormControl>
    </>
  );
}

export default CountrySelector;
