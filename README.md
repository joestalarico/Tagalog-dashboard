# Salita — Tagalog Dashboard

Mobile-friendly Phase 2 Tagalog progress dashboard.

Website: https://joestalarico.github.io/Tagalog-dashboard/

The Google Living Tracker remains the source of truth. The dashboard displays selected progress summaries, not detailed lesson histories.


## Required lesson closeout and publication verification (October 30, 2026)

**Authoritative record:** [Google Living Tracker](https://docs.google.com/document/d/1RnLLGNy0IkP1udkCTiyYwQSprwTPfui4K0eIxFzD63g/edit). GitHub is a read-only dashboard mirror; it does not automatically sync from Google Docs.

After every production or CI tutoring session, without waiting for a reminder:

1. Write observed lesson evidence to the Living Tracker, distinguishing first-pass comprehension, support, processing ease, vocabulary encounters, and actual verified timing from inference or unknowns. Keep production and CI rotation independent.
2. Reread the Tracker to verify the new entry.
3. Update `app.js` history, listening/grammar summaries as relevant, the top-level `data.date`, **and the later `data.date = ...` override**. That later assignment previously caused a stale date despite new source data. Do not advance paused production counters during CI.
4. Update `index.html` script URL query parameter (`app.js?v=...`) when `app.js` changes so browsers request the new script.
5. Read back both GitHub files and confirm the current date, evidence, and script version.
6. Check the GitHub Pages Actions run for the exact commit. Require **build success and deploy success** before reporting publication. A successful commit alone is insufficient. If possible verify the public page itself; otherwise explicitly report deployment success without claiming visual verification.
7. Tell the learner succinctly what was verified and any pending/failed step. Never claim automatic background synchronization or fabricated completion.

This checklist is an instruction for the tutor during future lessons, **not** an automated scheduled sync or an automatic deployment monitor. If connector access is unavailable, the tutor must disclose that and not claim a successful sync.
