import { Request, Response } from "express";

// Your controller logic goes here.
export const helloWorld = (req: Request, res: Response): void => {
  res.send(
    "Hello from NodeApp created using CNA a command line tool for building NodeJs app"
  );
};
