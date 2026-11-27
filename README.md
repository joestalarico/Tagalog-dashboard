# Salita — Tagalog Dashboard

Website: https://joestalarico.github.io/Tagalog-dashboard/

A read-only mirror of the [Google Living Tracker](https://docs.google.com/document/d/1RnLLGNy0IkP1udkCTiyYwQSprwTPfui4K0eIxFzD63g/edit). It is not an independent teaching authority or an automatic sync.

## Structure (November 26, 2026 consolidation)

- `progress.json`: single current snapshot, active vocabulary, grammar, CI state and recent records.
- `history.json`: older dashboard history, preserved without deleting prior entries.
- `app.js`: display logic only. No lesson-specific overrides.
- `index.html`: layout and styling.

The authoritative complete historical record is privately archived in Google Drive, linked from the Living Tracker. Dashboard entries are selected summaries, not new mastery evidence.

## Lesson closeout

1. Write actual observed evidence to the Living Tracker; distinguish independent versus supported work and verified effective timing. Update current state in place. Preserve historic exposure positions, and keep CI separate.
2. Reread and verify the Tracker.
3. Update `progress.json` only for the current snapshot and new dated history entry. Keep approximately 8 recent records; when moving an older record to `history.json`, preserve its full text and verify combined history. Do not append JavaScript or duplicate state assignments. Update renderer/layout only when needed; data requests bypass browser cache.
4. Verify JSON, expected current fields, preserved history and changed files; commit. Check exact commit's Pages build and deploy success and public display if possible; report anything unverified.
5. No completion credit or advancement without verified evidence. No automatic background sync claims.

Current method: vocabulary consolidation pause (zero new items, frozen counters) until learner explicitly requests resumption. Then introduce one productive focus family at a time, with three verified completed-lesson exposures and delayed alternate-family introduction; use verb/pronoun chunks and spaced retrieval. Historical root-level counts remain intact.

Canonical live documents:
- [Master Reference v3.7](https://docs.google.com/document/d/1MOyRVMFn72GXBAuu1O3LfTILDmimF82Uk784x8j-etE/edit) — teaching method.
- [Curriculum v3.2](https://docs.google.com/document/d/1k0o_Lp2paVL9NcIcC1HdOA5KCWb5WRkbl54yqpbmNEg/edit) — long-term goals.
- [Living Tracker](https://docs.google.com/document/d/1RnLLGNy0IkP1udkCTiyYwQSprwTPfui4K0eIxFzD63g/edit) — current progress and historical archive link.
