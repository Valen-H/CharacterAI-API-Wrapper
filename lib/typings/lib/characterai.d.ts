#!/usr/bin/env node
import { Page } from "puppeteer";
export declare function sleep(time: number, ...data: any[]): Promise<unknown>;
export declare function start(char: string, cb: Function): Promise<Page>;
export declare function send(page: Page, msg: string): Promise<import("puppeteer").HTTPResponse>;
//# sourceMappingURL=characterai.d.ts.map