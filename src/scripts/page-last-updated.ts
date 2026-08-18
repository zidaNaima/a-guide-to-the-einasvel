import { execSync } from "child_process";
import { statSync } from "fs";
import { fileURLToPath } from "url";

export function getLastUpdated(importMetaUrl: string) {
	const filePath = fileURLToPath(importMetaUrl);

	// Last Updated Time
	let lastUpdated;
	try {
		// Last git log commit for the given file only
		lastUpdated = execSync(`git log -1 --pretty="format:%cI" -- "${filePath}"`)
		.toString()
		.trim();
	} catch (e) {
		// Fallback to local version of the given file
		lastUpdated = statSync(filePath).mtime.toISOString();
	}

	return new Intl.DateTimeFormat("en-US", {
		month: "long",
		day: "2-digit",
		year: "numeric",
	}).format(new Date(lastUpdated));
}