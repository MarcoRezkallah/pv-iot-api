import { Controller } from './../types';

export const testConnectivity: Controller = (req, res) => {
  res.send('Successfully Connected');
};

export const testAuthenticity: Controller = (req, res) => {
  res.send('Successfully Authenticated');
};
