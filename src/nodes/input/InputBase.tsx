import { NodeProps } from "@oloren/core";
import React from "react";
import { Input } from "antd";

export type InputData = {
  label?: string;
  placeholder?: string;
};

function InputBase({ node, setNode }: NodeProps<InputData>) {
  const data = node.data as InputData;
  return (
    <div tw="flex flex-col space-y-2 w-[500px]">
      <Input
        value={data?.label}
        tw="w-full"
        addonBefore={"Label"}
        onChange={(e) => {
          setNode((node) => ({
            ...node,
            data: {
              ...node.data,
              label: e.target.value,
            },
          }));
        }}
      />
      <Input
        value={data?.placeholder}
        addonBefore={"Placeholder"}
        onChange={(e) => {
          setNode((node) => ({
            ...node,
            data: {
              ...node.data,
              placeholder: e.target.value,
            },
          }));
        }}
      />
    </div>
  );
}

export default InputBase;
