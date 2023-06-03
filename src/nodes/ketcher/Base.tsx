import { NodeProps } from "@oloren/core";
import React, { useEffect } from "react";
import { Typography } from "antd";

function Base({ node, setNode }: NodeProps<string>) {
  return (
    <div>
      <Typography.Text>Draw Molecule</Typography.Text>
    </div>
  );
}

export default Base;
