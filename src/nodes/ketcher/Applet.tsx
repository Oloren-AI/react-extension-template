import React, { useEffect, useState } from "react";
import { StandaloneStructServiceProvider } from "ketcher-standalone";
import { Editor } from "ketcher-react";
import "ketcher-react/dist/index.css";
import type { Ketcher } from "ketcher-core";
import { ApplicationProps } from "@oloren/core";
import { Button } from "antd";
import { flushSync } from "react-dom";

let ketcher: Ketcher | null = null;
const structServiceProvider = new StandaloneStructServiceProvider();

export default function Applet({ done }: ApplicationProps<any, [], [string]>) {
  return (
    <div tw="w-full flex flex-col space-y-2">
      <Editor
        staticResourcesUrl=""
        structServiceProvider={structServiceProvider}
        errorHandler={(e) => console.log("Error: ", e)}
        onInit={(ketch) => {
          ketcher = ketch;
          ketch.setMolecule("C1CCCCC1"); // start it off with something
        }}
      />
      <Button
        type="primary"
        tw="w-full"
        onClick={() => {
          ketcher?.getSmiles().then((smiles) => {
            done([smiles]);
          });
        }}
      >
        Continue
      </Button>
    </div>
  );
}
