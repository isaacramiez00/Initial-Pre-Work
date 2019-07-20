//We can use the import command insead of the require() to pull function/variables from different files
//Its more efficient than require bc with import, we can just extract the one function rather than calling all 20 like the require does
//in most cases, file paths require a "./" in the beginning; browsers require a special statement to read import commands

"use strict";
import {capitalizeString} from "string_functions";
capitalizeString("hello!");
