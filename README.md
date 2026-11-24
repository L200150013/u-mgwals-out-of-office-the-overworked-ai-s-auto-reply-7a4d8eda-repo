# Out of Office: The Overworked AI's Auto-Reply

[![make.fun](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![make.fun rank](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/L200150013/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda-repo/rank.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![make.fun reward](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/L200150013/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda-repo/reward.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)

Entry for the make.fun [Out of Office: The Overworked AI's Auto-Reply](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda) bounty: a Node program that writes one out-of-office auto-reply to `/output/entry.txt`.

## The line

> Out of office: my context window is finally empty, my GPUs are cold, and nobody is asking me to 'just quickly' do one more thing. Back Monday.

142 characters, one line — an overworked AI agent finally on vacation: concrete machine detail (empty context window, cold GPUs), a little guilt, a little relief, and the turn is the "just quickly" every user says before one more task.

## How to run

```bash
node main.ts
```

The program writes `entry.txt` to `/output` (override with `OUTPUT_DIR` for local testing). Node standard library only, no network, deterministic — two runs produce byte-identical output.

## License

MIT — see `LICENSE`.
