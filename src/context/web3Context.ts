import { createContext } from 'react';

interface Web3ContextInterface {
  name: string;
  author: string;
  url: string;
}

const Web3Context = createContext<Web3ContextInterface | null>(null);
const initalWeb3ContextValues: Web3ContextInterface = {
  name: 'Using React Context in a Typescript App',
  author: 'thehappybug',
  url: 'http://www.example.com',
};
