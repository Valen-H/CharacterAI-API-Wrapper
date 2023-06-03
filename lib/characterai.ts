#!/usr/bin/env node
"use strict";

import { Page } from "puppeteer";
import puppeteer from "puppeteer-extra";
import stealth from "puppeteer-extra-plugin-stealth";

export async function sleep(time: number, ...data: any[]) {
	return new Promise((res, rej) => setTimeout(res, time, ...data));
} //sleep

export async function start(char: string, cb: Function) {
	puppeteer.use(stealth());
	
	const	browser	= await puppeteer.launch({headless: "new"}),
			page	= await browser.newPage();
	
	await page.goto(`https://beta.character.ai/chat?char=${char}`, {
		waitUntil:	"load",
	});
	
	try {
		await page.waitForSelector(".modal-header svg", {
			timeout:	5000,
		});
		await page.click(".modal-header svg");
	} catch(ign) {}
	await sleep(2000);
	try {
		await page.waitForSelector("#\\#AcceptButton", {
			timeout:	5000,
		});
		await page.click("#\\#AcceptButton");
	} catch(ign) {}
	
	return page;
} //start

export async function send(page: Page, msg: string) {
	await page.waitForSelector("#user-input");
	await page.type("#user-input", msg);
	await sleep(1000);
	await page.waitForSelector("button[title='Submit Message']");
	await page.click("button[title='Submit Message']");
	
	const	resp	= await page.waitForResponse("https://beta.character.ai/chat/streaming/");
	
	return resp;
} //send
