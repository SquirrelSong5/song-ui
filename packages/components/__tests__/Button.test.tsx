import React from "react";
import { render } from "@testing-library/react"
import { Button } from '../src/Button/button';
import '@testing-library/jest-dom';

test("Button 渲染正常", () => {
    const { getByText } = render(<Button />)
    expect(getByText("Button")).toBeInTheDocument();
});