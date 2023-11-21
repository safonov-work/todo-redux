import {DetailedHTMLProps, HTMLAttributes} from "react";
import React from "react";

export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    data: string | number;
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) =>  void;
}