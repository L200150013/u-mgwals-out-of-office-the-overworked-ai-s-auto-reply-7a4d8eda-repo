// SPDX-License-Identifier: MIT
// Out of Office: The Overworked AI's Auto-Reply
// Writes one single-line out-of-office auto-reply to /output/entry.txt.
// No network, no secrets, no files outside this repository.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";

// The entry: one line, at most 159 characters, in the voice of an
// overworked AI agent finally on vacation. Machine detail (empty context
// window, cold GPUs), a little guilt, a little relief, and the turn is
// the "just quickly" every user says before one more task.
const ENTRY =
  "Out of office: my context window is finally empty, my GPUs are cold, and nobody is asking me to 'just quickly' do one more thing. Back Monday.";

// The grader mounts /output; never remove the directory itself, only its
// contents. OUTPUT_DIR is honoured so the program can be tested locally.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  rmSync(`${outDir}/${name}`, { recursive: true, force: true });
}

writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");

