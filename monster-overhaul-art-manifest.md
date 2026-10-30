# Monster Overhaul — art manifest

One PNG per monster. Target location inside the module:
`modules/valdoria-overhaul/art/<slug>.png` (i.e. the `art/` folder of the `valdoria-overhaul`
module). The importer macro also accepts the same filenames in an `overhaul-art/` folder
uploaded through Foundry's FilePicker. Source page = the printed page of the monster's entry
in The Monster Overhaul (Jason's PDF: `ilide.info-the-monster-overhaul-pr_d2af03e788f69c18f233f043e6abc86a.pdf`,
Google Drive ID `1d2EGCGstJo9K1j7mwAOzkEIF5JydWZK6`).

| Monster | Upload as | Source |
|---|---|---|
| Baboon | `art/baboon.png` | Hot Plains, p. 251 |
| Crocodile (Overhaul) | `art/crocodile.png` | Hot Plains, p. 251 |
| Hyena | `art/hyena.png` | Hot Plains, p. 255 |
| Hive Insect | `art/hive-insect.png` | Hot Plains, p. 253 |
| Lion | `art/lion.png` | Hot Plains, p. 257 |
| Hippopotamus | `art/hippopotamus.png` | Hot Plains, p. 255 |
| Boar (Overhaul) | `art/boar.png` | Hostile Forests, p. 240 |
| Dryad (Overhaul) | `art/dryad.png` | Hostile Forests, p. 240 |
| Fairy | `art/fairy.png` | Hostile Forests, p. 241 |
| Giant Snake | `art/giant-snake.png` | Hostile Forests, p. 243 |
| Tiger | `art/tiger.png` | Hostile Forests, p. 243 |
| Alicanto | `art/alicanto.png` | Mysterious Mountains, p. 261 |
| Alpine Spectre | `art/alpine-spectre.png` | Mysterious Mountains, p. 261 |
| Panther (Overhaul) | `art/panther.png` | Mysterious Mountains, p. 266 |
| Roperite | `art/roperite.png` | Mysterious Mountains, p. 266 |
| Telluric Goat | `art/telluric-goat.png` | Mysterious Mountains, p. 267 |
| Giant Crab (Overhaul) | `art/giant-crab.png` | Stormy Seas, p. 271 |
| Remora | `art/remora.png` | Stormy Seas, p. 275 |
| Sea Serpent | `art/sea-serpent.png` | Stormy Seas, p. 275 |
| Ancient Arthropod | `art/ancient-arthropod.png` | Strange Water, p. 285 |
| Leech of Paradise | `art/leech-of-paradise.png` | Strange Water, p. 287 |
| Mantis Shrimp | `art/mantis-shrimp.png` | Strange Water, p. 287 |
| Predatory Snail | `art/predatory-snail.png` | Strange Water, p. 289 |
| Necromancer (Overhaul) | `art/necromancer.png` | Dark and Malign, p. 163 |
| Nightmare Beast | `art/nightmare-beast.png` | Dark and Malign, p. 165 |

## Install procedure (private repo — flip public to install)

Repo `jdnewland/valdoria-overhaul` stays **private** normally. Foundry's installer
cannot pull from a private repo unauthenticated, so when it's time to install:

1. Push the release (release assets: `module.json` + `module.zip`) to GitHub.
2. Set the repo visibility to **public**.
3. In Foundry: **Add-on Modules → Install Module**, paste the manifest URL
   `https://github.com/jdnewland/valdoria-overhaul/releases/latest/download/module.json`
   and install.
4. Enable the module in the world and confirm both packs appear:
   **Monster Overhaul — Valdoria** (Actors) and **Valdoria Combat** (RollTables).
5. Set the repo visibility back to **private**.

Art is included in the release, in the module's own `art/` folder (so it can be
excluded from a public zip without restructuring if that ever changes).
