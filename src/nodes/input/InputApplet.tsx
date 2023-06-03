import { ApplicationProps } from "@oloren/core";
import React from "react";
import { InputData } from "./InputBase";
import { Input } from "antd";

function InputUi({
  node,
  outputs,
  setOutputs,
  done,
}: ApplicationProps<InputData, [], [string]>) {
  return (
    <Input
      addonBefore={node.data.label}
      tw="w-full"
      value={outputs}
      placeholder={node.data.placeholder}
      onChange={(e) => {
        setOutputs([e.target.value]);
      }}
    />
  );
}

export default InputUi;
