import { JSDOM } from "jsdom";
import "@testing-library/jest-dom";

const dom = new JSDOM("<!doctype html><html><body></body></html>");

(globalThis as any).window = dom.window;
(globalThis as any).document = dom.window.document;
(globalThis as any).navigator = dom.window.navigator;

