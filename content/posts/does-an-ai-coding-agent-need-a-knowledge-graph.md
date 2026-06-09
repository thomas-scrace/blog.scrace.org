---
title: "Does an AI coding agent need a knowledge graph?"
date: 2026-06-09
description: "Graphify promises coding agents lower token use, faster navigation, and better results. I measured all three, with a plain search index as the control."
kicker: "Essay"
tags: ["technology", "ai"]
draft: false
dropcap: true
---

There is now a small industry of tools that promise to make AI coding agents better at their jobs. Graphify is one of the better known. It builds a persistent knowledge graph of a repository: nodes for files, functions, and docs; edges where they reference one another. The agent then queries the graph instead of grepping. Behind the headline claim of “10x developer productivity”, the pitch comes down to three things you can measure: agents should use fewer tokens, reach the right files faster, and produce better results because they understand the architecture.

I spent some time measuring those three claims on a codebase I work on.

## The question

The interesting question is not quite “does Graphify help?” Graphify is really two things: a pre-built index of the codebase, and a graph of relationships laid over it. Any decent index might help an agent: querying it is cheaper than searching the repository cold. The question is whether the graph, the part Graphify is named for, adds anything beyond that.

To answer it you need a control: something that gives the agent the same kind of head start, just without the graph. For that I wrote RepoDoc, a small tool built for this test rather than as a product. It is a plain full-text index over the same repository: query it and you get a ranked list of files and symbols with snippets. It has no graph, no traversal, and no notion of structure. That keeps the comparison honest: if Graphify wins, the graph is doing the work; if RepoDoc keeps up, a flat index is enough.

## The test

One agent (OpenAI’s Codex), one large production codebase, and three set-ups: the agent on its own; the agent with Graphify; the agent with RepoDoc. Each set-up got the same three tasks, the kind I actually use agents for day to day:

1. **Explain.** Describe how one subsystem works, in enough detail that an engineer could debug it next week.
2. **Build.** Add a small new screen to the product, matching the patterns the project already uses.
3. **Fix.** Repair a real bug from the project’s error tracker, and add a regression test.

That makes nine runs, each in a fresh worktree at the same commit. A separate model judged all nine results, scoring the final answer and the diff without knowing which set-up had produced them. Alongside the scores I recorded wall time and token use.

## Results

The first table covers the three tasks together: quality is the average judge score, and wall time and tokens are totals. For the two aided set-ups each cell also shows the value as a percentage of the agent alone, so figures under 100% mean less and figures over 100% mean more. Graphify’s 129% wall time, for example, means its runs took 29% longer in total than the unaided agent’s. The best figure in each column is bold.

| Set-up        | Quality (of 10) | Wall time | Tokens |
| :------------ | --------------: | --------: | -----: |
| Agent alone   |            9.30 | ~14.5 min | ~10.16M |
| With Graphify | 9.25 (99%) | ~18.7 min (129%) | **~7.71M (76%)** |
| With RepoDoc  | **9.35 (101%)** | **~14.3 min (98%)** | ~9.18M (90%) |

Here is how each claim fared.

**On quality, neither aid made a difference.** The judge’s averages sit within a tenth of a point of one another. The graph produced no deeper fixes and no more accurate explanations.

**On tokens, the claim held for the explain task only.** There Graphify used about 45% fewer tokens than the bare agent, and RepoDoc about 55% fewer while also finishing fastest. A head start pays when the job is to go and understand something broad. On the build task the savings were under 10%, and on the fix the claim reversed: both aids used more tokens than the bare agent, RepoDoc more than twice as many. The summary row therefore flatters both aids. Excluding the explain task, Graphify’s token total was level with the bare agent’s, and RepoDoc’s was about 44% higher.

**On speed, Graphify was slower overall.** It was quicker than the bare agent on the explain task and slower on the other two. On the bug fix the bare agent finished in under four minutes; Graphify took more than eight, the slowest run of the test. More than half of that went on rebuilding its graph after the fix was already written, a step its own integration instructions require. And since the stack trace already named the missing method, finding it was never the hard part.

The most thorough fix came from the RepoDoc run: the agent treated the bug as an inconsistency between two code paths and unified them, rather than patching the missing method. That came from reading the code, not from any index, and it was not free: the extra reading is why that run used the most tokens of the three attempts at the bug.

Here are the same measures for each task.

### Explain

| Set-up        | Quality (of 10) | Wall time | Tokens |
| :------------ | --------------: | --------: | -----: |
| Agent alone   | 9.57 | 5.4 min | 5.48M |
| With Graphify | 9.57 | 4.5 min (84%) | 3.03M (55%) |
| With RepoDoc  | 9.57 | 3.3 min (61%) | 2.45M (45%) |

### Build

| Set-up        | Quality (of 10) | Wall time | Tokens |
| :------------ | --------------: | --------: | -----: |
| Agent alone   | 8.97 | 5.3 min | 2.89M |
| With Graphify | 8.90 | 5.8 min (109%) | 2.62M (91%) |
| With RepoDoc  | 8.98 | 4.3 min (81%) | 2.72M (94%) |

### Fix

| Set-up        | Quality (of 10) | Wall time | Tokens |
| :------------ | --------------: | --------: | -----: |
| Agent alone   | 9.35 | 3.7 min | 1.79M |
| With Graphify | 9.28 | 8.3 min (223%) | 2.06M (115%) |
| With RepoDoc  | 9.50 | 6.7 min (178%) | 4.01M (224%) |

## Why the graph didn’t help more

I can see three reasons.

**It over-informs.** Asked to build the new screen, Graphify returned everything structurally related to the area, including a layout component that the equivalent screens elsewhere in the project don’t use. Given more options, the agent took the unconventional one, and the judge marked it down for not matching the codebase. The flat index, returning less, led to the conventional choice.

**Upkeep costs time.** Graphify’s integration asks for a graph rebuild after each change. On the bug fix that step took about four and a half minutes, after the work was done. An index that goes slightly stale is cheap to live with; a graph that must always be current is not.

**Navigation is rarely the bottleneck.** When the error names the failing symbol, a plain grep finds it in seconds. What separates a good fix from an adequate one after that is judgement about the code, and no index supplies that.

## What this doesn’t show

This was one agent, one codebase, and three tasks. Graphify may do better in situations this test did not cover: an unfamiliar repository with poor documentation; a cross-cutting refactor, where seeing the blast radius of a change matters; questions too vague to give a search index a useful keyword. I also followed its integration instructions exactly, including the costly rebuilds; used more loosely, it might come out ahead.

## What I take from it

The lesson is not that Graphify is bad. It is that most of the measured benefit came from having an index at all, not from the graph. The plain ranked search, much smaller and quicker to build, matched or beat Graphify on quality and speed on every task. On the explain task, the only one where the token savings were substantial, it saved more than Graphify too. And nothing in these runs looked like the tenfold improvement the marketing describes. Before adopting a clever tool, it is worth checking how much of the benefit a plain one gives you.

{{< divider >}}

I tested only one agent. If you would like to see the same runs repeated with Claude or Grok, [write to me](mailto:tom@scrace.org).
