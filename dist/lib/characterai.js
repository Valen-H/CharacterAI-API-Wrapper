#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.send = exports.start = exports.sleep = void 0;
const tslib_1 = require("tslib");
const puppeteer_extra_1 = tslib_1.__importDefault(require("puppeteer-extra"));
const puppeteer_extra_plugin_stealth_1 = tslib_1.__importDefault(require("puppeteer-extra-plugin-stealth"));
async function sleep(time, ...data) {
    return new Promise((res, rej) => setTimeout(res, time, ...data));
} //sleep
exports.sleep = sleep;
async function start(char, cb) {
    puppeteer_extra_1.default.use((0, puppeteer_extra_plugin_stealth_1.default)());
    const browser = await puppeteer_extra_1.default.launch({ headless: "new" }), page = await browser.newPage();
    await page.goto(`https://beta.character.ai/chat?char=${char}`, {
        waitUntil: "load",
    });
    try {
        await page.waitForSelector(".modal-header svg", {
            timeout: 5000,
        });
        await page.click(".modal-header svg");
    }
    catch (ign) { }
    await sleep(2000);
    try {
        await page.waitForSelector("#\\#AcceptButton", {
            timeout: 5000,
        });
        await page.click("#\\#AcceptButton");
    }
    catch (ign) { }
    return page;
} //start
exports.start = start;
async function send(page, msg) {
    await page.waitForSelector("#user-input");
    await page.type("#user-input", msg);
    await sleep(1000);
    await page.waitForSelector("button[title='Submit Message']");
    await page.click("button[title='Submit Message']");
    const resp = await page.waitForResponse("https://beta.character.ai/chat/streaming/");
    return resp;
} //send
exports.send = send;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVyYWkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvY2hhcmFjdGVyYWkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVksQ0FBQzs7OztBQUdiLDhFQUF3QztBQUN4Qyw0R0FBcUQ7QUFFOUMsS0FBSyxVQUFVLEtBQUssQ0FBQyxJQUFZLEVBQUUsR0FBRyxJQUFXO0lBQ3ZELE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDbEUsQ0FBQyxDQUFDLE9BQU87QUFGVCxzQkFFQztBQUVNLEtBQUssVUFBVSxLQUFLLENBQUMsSUFBWSxFQUFFLEVBQVk7SUFDckQseUJBQVMsQ0FBQyxHQUFHLENBQUMsSUFBQSx3Q0FBTyxHQUFFLENBQUMsQ0FBQztJQUV6QixNQUFNLE9BQU8sR0FBRyxNQUFNLHlCQUFTLENBQUMsTUFBTSxDQUFDLEVBQUMsUUFBUSxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQ3ZELElBQUksR0FBRyxNQUFNLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUVqQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsdUNBQXVDLElBQUksRUFBRSxFQUFFO1FBQzlELFNBQVMsRUFBRSxNQUFNO0tBQ2pCLENBQUMsQ0FBQztJQUVILElBQUk7UUFDSCxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLEVBQUU7WUFDL0MsT0FBTyxFQUFFLElBQUk7U0FDYixDQUFDLENBQUM7UUFDSCxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztLQUN0QztJQUFDLE9BQU0sR0FBRyxFQUFFLEdBQUU7SUFDZixNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixJQUFJO1FBQ0gsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixFQUFFO1lBQzlDLE9BQU8sRUFBRSxJQUFJO1NBQ2IsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7S0FDckM7SUFBQyxPQUFNLEdBQUcsRUFBRSxHQUFFO0lBRWYsT0FBTyxJQUFJLENBQUM7QUFDYixDQUFDLENBQUMsT0FBTztBQXpCVCxzQkF5QkM7QUFFTSxLQUFLLFVBQVUsSUFBSSxDQUFDLElBQVUsRUFBRSxHQUFXO0lBQ2pELE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQzdELE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBRW5ELE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0lBRXJGLE9BQU8sSUFBSSxDQUFDO0FBQ2IsQ0FBQyxDQUFDLE1BQU07QUFWUixvQkFVQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInB1cHBldGVlclwiO1xuaW1wb3J0IHB1cHBldGVlciBmcm9tIFwicHVwcGV0ZWVyLWV4dHJhXCI7XG5pbXBvcnQgc3RlYWx0aCBmcm9tIFwicHVwcGV0ZWVyLWV4dHJhLXBsdWdpbi1zdGVhbHRoXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzbGVlcCh0aW1lOiBudW1iZXIsIC4uLmRhdGE6IGFueVtdKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHNldFRpbWVvdXQocmVzLCB0aW1lLCAuLi5kYXRhKSk7XG59IC8vc2xlZXBcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0KGNoYXI6IHN0cmluZywgY2I6IEZ1bmN0aW9uKSB7XG5cdHB1cHBldGVlci51c2Uoc3RlYWx0aCgpKTtcblx0XG5cdGNvbnN0XHRicm93c2VyXHQ9IGF3YWl0IHB1cHBldGVlci5sYXVuY2goe2hlYWRsZXNzOiBcIm5ld1wifSksXG5cdFx0XHRwYWdlXHQ9IGF3YWl0IGJyb3dzZXIubmV3UGFnZSgpO1xuXHRcblx0YXdhaXQgcGFnZS5nb3RvKGBodHRwczovL2JldGEuY2hhcmFjdGVyLmFpL2NoYXQ/Y2hhcj0ke2NoYXJ9YCwge1xuXHRcdHdhaXRVbnRpbDpcdFwibG9hZFwiLFxuXHR9KTtcblx0XG5cdHRyeSB7XG5cdFx0YXdhaXQgcGFnZS53YWl0Rm9yU2VsZWN0b3IoXCIubW9kYWwtaGVhZGVyIHN2Z1wiLCB7XG5cdFx0XHR0aW1lb3V0Olx0NTAwMCxcblx0XHR9KTtcblx0XHRhd2FpdCBwYWdlLmNsaWNrKFwiLm1vZGFsLWhlYWRlciBzdmdcIik7XG5cdH0gY2F0Y2goaWduKSB7fVxuXHRhd2FpdCBzbGVlcCgyMDAwKTtcblx0dHJ5IHtcblx0XHRhd2FpdCBwYWdlLndhaXRGb3JTZWxlY3RvcihcIiNcXFxcI0FjY2VwdEJ1dHRvblwiLCB7XG5cdFx0XHR0aW1lb3V0Olx0NTAwMCxcblx0XHR9KTtcblx0XHRhd2FpdCBwYWdlLmNsaWNrKFwiI1xcXFwjQWNjZXB0QnV0dG9uXCIpO1xuXHR9IGNhdGNoKGlnbikge31cblx0XG5cdHJldHVybiBwYWdlO1xufSAvL3N0YXJ0XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kKHBhZ2U6IFBhZ2UsIG1zZzogc3RyaW5nKSB7XG5cdGF3YWl0IHBhZ2Uud2FpdEZvclNlbGVjdG9yKFwiI3VzZXItaW5wdXRcIik7XG5cdGF3YWl0IHBhZ2UudHlwZShcIiN1c2VyLWlucHV0XCIsIG1zZyk7XG5cdGF3YWl0IHNsZWVwKDEwMDApO1xuXHRhd2FpdCBwYWdlLndhaXRGb3JTZWxlY3RvcihcImJ1dHRvblt0aXRsZT0nU3VibWl0IE1lc3NhZ2UnXVwiKTtcblx0YXdhaXQgcGFnZS5jbGljayhcImJ1dHRvblt0aXRsZT0nU3VibWl0IE1lc3NhZ2UnXVwiKTtcblx0XG5cdGNvbnN0XHRyZXNwXHQ9IGF3YWl0IHBhZ2Uud2FpdEZvclJlc3BvbnNlKFwiaHR0cHM6Ly9iZXRhLmNoYXJhY3Rlci5haS9jaGF0L3N0cmVhbWluZy9cIik7XG5cdFxuXHRyZXR1cm4gcmVzcDtcbn0gLy9zZW5kXG4iXX0=