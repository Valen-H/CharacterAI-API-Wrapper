"use strict";

import * as path from "path";

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports	= {
	cacheDirectory: path.join(__dirname, ".cache", "puppeteer"),
};
