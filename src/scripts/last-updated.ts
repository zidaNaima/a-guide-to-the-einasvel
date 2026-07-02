import { execSync } from "child_process";
import { statSync } from "fs";

// Last Updated Time
let lastModified;
try {
	// Git logs
	lastModified = execSync(`git log -1 --pretty="format:%cI"`)
		.toString()
		.trim();
} catch (e) {
	// Fallback to local file
	lastModified = statSync("../society.astro").mtime.toISOString();
}
const formattedDate = new Intl.DateTimeFormat("en-US", {
	month: "long",
	day: "2-digit",
	year: "numeric",
}).format(new Date(lastModified));

export default formattedDate;