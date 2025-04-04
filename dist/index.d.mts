import * as react_jsx_runtime from 'react/jsx-runtime';
import React$1 from 'react';

declare const HelloWorld: () => react_jsx_runtime.JSX.Element;

interface GreetingProps {
    name: string;
}
declare const Greeting: React$1.FC<GreetingProps>;

interface IntroProps {
    data?: {
        content?: React.ReactNode;
        link?: string;
        logo?: {
            url: string;
        };
    };
    customClass?: string;
}
declare const Intro: React.FC<IntroProps>;

export { Greeting, HelloWorld, Intro };
