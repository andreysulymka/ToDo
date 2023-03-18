import React from "react";
import { Label, SearchInput } from "./Filter.styled";

const Filter = ({ value, onChange }) => (
    <Label>Пошук<SearchInput type="text" value={value} onChange={onChange}/></Label>
);

export default Filter;