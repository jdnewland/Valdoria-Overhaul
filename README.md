# Valdoria — Monster Overhaul & Combat Encounters

A Foundry VTT v12 module for the Shadowdark system, built for Jason's Valdoria campaign.

## Contents

- **Monster Overhaul — Valdoria** (Actor pack): 25 monsters converted from *The Monster Overhaul*
  (LV = HD, HP as printed; AC: none 11 / leather 12 / chain 14 / plate 16, +1 shield;
  attack bonus LV+2 capped +8). Attacks are "NPC Attack" items, abilities "NPC Feature" items,
  descriptions in `system.notes`.
- **Valdoria Combat** (RollTable pack): one d6 combat table per hex (89), named
  `Combat — <code> <title>`. Rolls 1–4 are the hex's terrain family, 5–6 are signature encounters.
  † = Monster Overhaul monster. ⚠ = over-level threat (flee/negotiate).

## Art

Actor art resolves to `modules/valdoria-overhaul/art/<slug>.png`. Until the book art is
extracted from the PDF, actors fall back to built-in icons. See
`monster-overhaul-art-manifest.md` for each monster's slug, filename, and source book page.
The `art/` folder is deliberately separate so it can be excluded from a public release zip.

## Install

The repo `jdnewland/valdoria-overhaul` is **private** by default, and Foundry's
installer cannot pull from a private repo unauthenticated — so installation uses a
brief public window. The installable artifact is `module.zip` in the repo root
(it contains `module.json`, the compiled `packs/`, and the `art/` folder; the
LevelDB pack files are binary, so they live only inside the zip, while all text
sources — pack JSON in `pack-src/`, docs, macros — are browsable in the repo).

1. Make sure `module.zip` in the repo root is the current build (upload the
   latest build via the GitHub web UI if it changed).
2. Set the repo visibility to **public**.
3. In Foundry: **Add-on Modules → Install Module**, paste the manifest URL
   `https://raw.githubusercontent.com/jdnewland/valdoria-overhaul/main/module.json`
   and install. (The manifest's download field points at the `module.zip` in
   this repo.)
4. Enable the module in the world and confirm both packs appear:
   **Monster Overhaul — Valdoria** (Actors) and **Valdoria Combat** (RollTables).
5. Set the repo visibility back to **private**.

## Sources

JSON sources for both packs live in `pack-src/`; the compiled LevelDB packs in `packs/`
were built from them with the official `@foundryvtt/foundryvtt-cli`.
