import { execSync } from "child_process";
import { statSync } from "fs";

// Last Updated Time
let lastUpdated;
try {
	// Git logs
	lastUpdated = execSync(`git log -1 --pretty="format:%cI"`)
		.toString()
		.trim();
} catch (e) {
	// Fallback to local file
	lastUpdated = statSync("../index.astro").mtime.toISOString();
}
const siteLastUpdated = new Intl.DateTimeFormat("en-US", {
	month: "long",
	day: "2-digit",
	year: "numeric",
}).format(new Date(lastUpdated));

export default siteLastUpdated;