# Valdoria — Combat Encounters (d6 per hex)

Companion to the Valdoria hex journals. Each hex has a **d6 combat table**: rolls 1–4 come from
the hex's terrain family (rotated so neighbouring hexes differ), rolls 5–6 are signature
encounters written for that hex from its own notes.

- Monsters are from the **Shadowdark core book** (name + level verified against the book's stat
  lines) unless marked **†** — those are from **The Monster Overhaul**, converted and imported
  by `foundry-monster-overhaul-import-macro.js` (or the `valdoria-overhaul` module's
  "Monster Overhaul — Valdoria" pack). Where a name exists in both books, the Foundry actor is
  suffixed, e.g. "Boar (Overhaul)".
- **⚠** marks an over-level threat for a low-level party: flee, negotiate, or outsmart it.
- These tables also live in Foundry two ways: the v5 macro adds a "Combat Encounters (d6)" page
  to every hex journal, and there is one RollTable per hex (`Combat — <code> <title>`).

## Terrain family pools (rolls 1–4)

**Desert / Cinder Wastes**
1. 2d6 Scorpion (LV 0) — under rocks and cactus roots
2. 1d6 Vulture (LV 1) — circling something dead; bold if the party is bleeding
3. 1 Ankheg (LV 3) — bursting from the ash drift
4. 2d4 Baboon† (LV 1) — a raiding troop; grabs loose gear and runs

**Meadow / Grassland**
1. 2d4 Wolf (LV 2) — testing the party for weakness
2. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
3. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
4. 1 Smilodon (LV 3) — an ambush out of the grass

**Woodland**
1. 2d4 Wolf (LV 2) — shadowing the trail
2. 1 Spider, Giant (LV 3) — webs across the path
3. 2d6 Boar (Overhaul)† (LV 3) — a sounder defending its piglets
4. 1 Ettercap (LV 3) — herding its spiders

**Hills / Mountains**
1. 2d4 Goblin (LV 1) — Greyspine raiders on the high paths
2. 1 Harpy (LV 3) — singing from the crags
3. 1 Wyvern (LV 3) — nesting on the ledges
4. 2d6 Ape (LV 2) — a troop defending the high pass

**Mire / Marsh / Bog**
1. 2d4 Lizardfolk (LV 2) — a hunting party in the reeds
2. 1d4 Frog, Giant (LV 2) — tongues first, questions never
3. 2d6 Leech, Giant (LV 2) — in the black water
4. 1 Violet Fungus (LV 2) — rooted in the path; it doesn't chase, it waits

**Coast / Sakeen Sea**
1. 2d6 Pirate (LV 1) — a boarding party
2. 1d4 Shark (LV 3) — circling blood in the water
3. 2d4 Merfolk (LV 2) — a territorial shoal-guard
4. 2d6 Deep One (LV 2) — rising from the deep water

**Settlement / Road**
1. 2d4 Bandit (LV 1) — road agents and alley toughs
2. 1d6 Rat, Giant (LV 0) — cellar vermin, bold as cats
3. 2d4 Guard (LV 1) — a patrol that wants names; combat if resisted
4. 1d4 Thug (LV 3) — hired muscle

## Per-hex tables

### J01 — The Gale Stones (15,10) · Meadow / Grassland
1. 2d4 Wolf (LV 2) — testing the party for weakness
2. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
3. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
4. 1 Smilodon (LV 3) — an ambush out of the grass
5. 1 Griffon (LV 4) — hunting the upland flocks
6. ⚠ 1 Ghost (LV 6) — the dead shepherd, counting his flock; talk or flee

### G1 — The Shepherd's Rest (16,10) · Mire / Marsh / Bog
1. 2d4 Lizardfolk (LV 2) — a hunting party in the reeds
2. 1d4 Frog, Giant (LV 2) — tongues first, questions never
3. 2d6 Leech, Giant (LV 2) — in the black water
4. 1 Violet Fungus (LV 2) — rooted in the path; it doesn't chase, it waits
5. 2d6 Hive Insect† (LV 2) — after the flock's salt and stores
6. 1 Griffon (LV 4) — the cairn-maker, back for another shepherd

### C5 — The Sparrow's Roost (17,10) · Mire / Marsh / Bog
1. 1d4 Frog, Giant (LV 2) — tongues first, questions never
2. 2d6 Leech, Giant (LV 2) — in the black water
3. 1 Violet Fungus (LV 2) — rooted in the path; it doesn't chase, it waits
4. 2d4 Lizardfolk (LV 2) — a hunting party in the reeds
5. 2d6 Fairy† (LV 3) — the roost's patrons, capricious and watching
6. 2d4 Shadow (LV 3) — rising from the black water at dusk

### C6 — The Magnetic Bog (18,10) · Mire / Marsh / Bog
1. 2d6 Leech, Giant (LV 2) — in the black water
2. 1 Violet Fungus (LV 2) — rooted in the path; it doesn't chase, it waits
3. 2d4 Lizardfolk (LV 2) — a hunting party in the reeds
4. 1d4 Frog, Giant (LV 2) — tongues first, questions never
5. 1d4 Ghoul (LV 2) — bog corpses in old Temple grey, drawn to the Rock
6. ⚠ 1 Black Pudding (LV 6) — the thing under the peat that shifts when the Rock is touched

### J02 — Sepernt Peak (19,10) · Hills / Mountains
1. 2d4 Goblin (LV 1) — Greyspine raiders on the high paths
2. 1 Harpy (LV 3) — singing from the crags
3. 1 Wyvern (LV 3) — nesting on the ledges
4. 2d6 Ape (LV 2) — a troop defending the high pass
5. 1 Snake, Giant (LV 5) — the Serpent of the spire, sunning on warm stone
6. 1d4 Wyvern (LV 3) — the serpent's rivals, nesting below the spire

### B4 — The Goat Track (20,10) · Hills / Mountains
1. 1 Harpy (LV 3) — singing from the crags
2. 1 Wyvern (LV 3) — nesting on the ledges
3. 2d6 Ape (LV 2) — a troop defending the high pass
4. 2d4 Goblin (LV 1) — Greyspine raiders on the high paths
5. 2d6 Telluric Goat† (LV 4) — a herd surfacing to eat the trail markers
6. 1 Griffon (LV 4) — stooping on the goat herds

### B9 — The Charcoal Woods (21,10) · Woodland
1. 2d4 Wolf (LV 2) — shadowing the trail
2. 1 Spider, Giant (LV 3) — webs across the path
3. 2d6 Boar (Overhaul)† (LV 3) — a sounder defending its piglets
4. 1 Ettercap (LV 3) — herding its spiders
5. 2d4 Bandit (LV 1) — charcoal-burners turned road thieves
6. 1 Troll (LV 5) — it wants the charcoal tithe, paid in meat

### B6 — The Crag's Crown (22,10) · Hills / Mountains
1. 1 Wyvern (LV 3) — nesting on the ledges
2. 2d6 Ape (LV 2) — a troop defending the high pass
3. 2d4 Goblin (LV 1) — Greyspine raiders on the high paths
4. 1 Harpy (LV 3) — singing from the crags
5. 2d6 Ape (LV 2) — defending the solstice stones
6. ⚠ 1 Alpine Spectre† (LV 6) — a congregation drifting over the summit

### B7 — The Beacon Peak (23,10) · Hills / Mountains
1. 2d6 Ape (LV 2) — a troop defending the high pass
2. 2d4 Goblin (LV 1) — Greyspine raiders on the high paths
3. 1 Harpy (LV 3) — singing from the crags
4. 1 Wyvern (LV 3) — nesting on the ledges
5. 1d4 Harpy (LV 3) — nesting in the beacon basket
6. 1 Pterodactyl (LV 4) — riding the sea-wind up the peak

### F3 — The Ashen Current (24,10) · Coast / Sakeen Sea
1. 2d6 Pirate (LV 1) — a boarding party
2. 1d4 Shark (LV 3) — circling blood in the water
3. 2d4 Merfolk (LV 2) — a territorial shoal-guard
4. 2d6 Deep One (LV 2) — rising from the deep water
5. 1 Remora† (LV 2) — fastened to the hull; the ship stops dead
6. 1d4 Deep One (LV 2) — coming up through the ash-grey water

### A5 — The Burnt Fields (13,11) · Desert / Cinder Wastes
1. 2d6 Scorpion (LV 0) — under rocks and cactus roots
2. 1d6 Vulture (LV 1) — circling something dead; bold if the party is bleeding
3. 1 Ankheg (LV 3) — bursting from the ash drift
4. 2d4 Baboon† (LV 1) — a raiding troop; grabs loose gear and runs
5. 1d4 Hive Insect† (LV 2) — after the pepper crop
6. 2d4 Zombie (LV 2) — burnt dead walking off the old battlefield's edge

### A6 — The Cinder Flats (14,11) · Desert / Cinder Wastes
1. 1d6 Vulture (LV 1) — circling something dead; bold if the party is bleeding
2. 1 Ankheg (LV 3) — bursting from the ash drift
3. 2d4 Baboon† (LV 1) — a raiding troop; grabs loose gear and runs
4. 2d6 Scorpion (LV 0) — under rocks and cactus roots
5. 1 Scorpion, Giant (LV 3) — camel-sized, basking in the ash dunes
6. ⚠ 1 Bulette (LV 8) — the landshark of the flats; run

### A11 — The First Still (15,11) · Desert / Cinder Wastes
1. 1 Ankheg (LV 3) — bursting from the ash drift
2. 2d4 Baboon† (LV 1) — a raiding troop; grabs loose gear and runs
3. 2d6 Scorpion (LV 0) — under rocks and cactus roots
4. 1d6 Vulture (LV 1) — circling something dead; bold if the party is bleeding
5. 1d4 Scorpion, Giant (LV 3) — basking on the hot rock
6. ⚠ 1 Efreeti (LV 9) — the First Still's true distiller; bargain or flee

### D1 — The Cistern Field (16,11) · Meadow / Grassland
1. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
2. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
3. 1 Smilodon (LV 3) — an ambush out of the grass
4. 2d4 Wolf (LV 2) — testing the party for weakness
5. 1d4 Frog, Giant (LV 2) — laired in the open cisterns
6. 1 Shambling Mound (LV 4) — the thing in the deepest cistern

### C1 — The Hanging Moss (17,11) · Hills / Mountains
1. 2d4 Goblin (LV 1) — Greyspine raiders on the high paths
2. 1 Harpy (LV 3) — singing from the crags
3. 1 Wyvern (LV 3) — nesting on the ledges
4. 2d6 Ape (LV 2) — a troop defending the high pass
5. 1d6 Spider, Giant (LV 3) — nesting in the moss curtains
6. 1 Cave Creeper (LV 4) — soundless in the silent cirque

### J03 — Granite Crag & Dank Cave (18,11) · Woodland
1. 1 Spider, Giant (LV 3) — webs across the path
2. 2d6 Boar (Overhaul)† (LV 3) — a sounder defending its piglets
3. 1 Ettercap (LV 3) — herding its spiders
4. 2d4 Wolf (LV 2) — shadowing the trail
5. 1d4 Telluric Goat† (LV 4) — eating the crag's iron veins
6. ⚠ 1 Assassin (LV 8) — the Lair's tenant, at home; flee or parley

### J04 — White Sparrow (19,11) · Settlement / Road
1. 2d4 Bandit (LV 1) — road agents and alley toughs
2. 1d6 Rat, Giant (LV 0) — cellar vermin, bold as cats
3. 2d4 Guard (LV 1) — a patrol that wants names; combat if resisted
4. 1d4 Thug (LV 3) — hired muscle
5. 2d4 Wolf (LV 2) — bold wolves at the village edge
6. 1 Doppelganger (LV 4) — wearing a familiar face from the escort

### J05 — Deep Woods (20,11) · Woodland
1. 2d6 Boar (Overhaul)† (LV 3) — a sounder defending its piglets
2. 1 Ettercap (LV 3) — herding its spiders
3. 2d4 Wolf (LV 2) — shadowing the trail
4. 1 Spider, Giant (LV 3) — webs across the path
5. 1d4 Wight (LV 3) — barrow-lords of the Craven Mounds
6. ⚠ 1 Treant (LV 8) — a mound-warden wakes; negotiate or run

### B10 — The Tower's Brow (21,11) · Hills / Mountains
1. 1 Harpy (LV 3) — singing from the crags
2. 1 Wyvern (LV 3) — nesting on the ledges
3. 2d6 Ape (LV 2) — a troop defending the high pass
4. 2d4 Goblin (LV 1) — Greyspine raiders on the high paths
5. 1d4 Panther (Overhaul)† (LV 3) — hunting the brow herds at dusk
6. 1 Shadow (LV 3) — the tower's shadow, climbing with teeth

### B11 — The Wreckers' Hill (22,11) · Hills / Mountains
1. 1 Wyvern (LV 3) — nesting on the ledges
2. 2d6 Ape (LV 2) — a troop defending the high pass
3. 2d4 Goblin (LV 1) — Greyspine raiders on the high paths
4. 1 Harpy (LV 3) — singing from the crags
5. 2d4 Pirate (LV 1) — wreckers defending their fire-sites
6. 1d4 Harpy (LV 3) — the wreckers' old partners, come for their share

### F2 — The Tower's Reflection (23,11) · Coast / Sakeen Sea
1. 1d4 Shark (LV 3) — circling blood in the water
2. 2d4 Merfolk (LV 2) — a territorial shoal-guard
3. 2d6 Deep One (LV 2) — rising from the deep water
4. 2d6 Pirate (LV 1) — a boarding party
5. 1d4 Deep One (LV 2) — worshipping at the reflected windows
6. ⚠ 1 Hag, Sea (LV 6) — she keeps the reflection's door

### F7 — The Signal Grass (24,11) · Meadow / Grassland
1. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
2. 1 Smilodon (LV 3) — an ambush out of the grass
3. 2d4 Wolf (LV 2) — testing the party for weakness
4. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
5. 2d4 Guard (LV 1) — a naval signal patrol; combat if the party runs
6. 1d4 Pirate (LV 1) — raiders after the signal mast's copper

### J06 — The Cactus Gallows (14,12) · Desert / Cinder Wastes
1. 2d4 Baboon† (LV 1) — a raiding troop; grabs loose gear and runs
2. 2d6 Scorpion (LV 0) — under rocks and cactus roots
3. 1d6 Vulture (LV 1) — circling something dead; bold if the party is bleeding
4. 1 Ankheg (LV 3) — bursting from the ash drift
5. 2d6 Zombie (LV 2) — Casimir's garden dead, standing in their rows
6. 1 Necromancer (Overhaul)† (LV 7) — Casimir Holt, the Gallows Gardener; parley first — he offers tea

### A7 — The Salt Pan (15,12) · Desert / Cinder Wastes
1. 2d6 Scorpion (LV 0) — under rocks and cactus roots
2. 1d6 Vulture (LV 1) — circling something dead; bold if the party is bleeding
3. 1 Ankheg (LV 3) — bursting from the ash drift
4. 2d4 Baboon† (LV 1) — a raiding troop; grabs loose gear and runs
5. 1d4 Ancient Arthropod† (LV 3) — crawling the crust plates
6. ⚠ 1 Mummy (LV 10) — something salt-preserved under the pan; do not dig

### D2 — The Ditch Meadow (16,12) · Meadow / Grassland
1. 1 Smilodon (LV 3) — an ambush out of the grass
2. 2d4 Wolf (LV 2) — testing the party for weakness
3. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
4. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
5. 2d4 Leech of Paradise† (LV 0) — the ditches are full of blessings
6. ⚠ 1 Predatory Snail† (LV 7) — following a smell, slowly, all day

### J07 — The Wishing Pit & Cistern (17,12) · Meadow / Grassland
1. 2d4 Wolf (LV 2) — testing the party for weakness
2. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
3. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
4. 1 Smilodon (LV 3) — an ambush out of the grass
5. 1d6 Skeleton (LV 2) — the watch that never stood down
6. 1 Wight (LV 3) — the watch-captain, still collecting wishes

### J08 — The Blossom Meadows (18,12) · Meadow / Grassland
1. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
2. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
3. 1 Smilodon (LV 3) — an ambush out of the grass
4. 2d4 Wolf (LV 2) — testing the party for weakness
5. 2d6 Fairy† (LV 3) — dancing at the Golden Gazebo
6. 1d4 Wolf, Dire (LV 4) — the meadow's old wolves

### J09 — The North meadow (19,12) · Meadow / Grassland
1. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
2. 1 Smilodon (LV 3) — an ambush out of the grass
3. 2d4 Wolf (LV 2) — testing the party for weakness
4. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
5. 1d4 Ape (LV 2) — a troop on the White Spiral Path
6. ⚠ 1 Tiger† (LV 5) — an old maneater walking the spiral

### C3 — The Tower's Wood (20,12) · Woodland
1. 1 Ettercap (LV 3) — herding its spiders
2. 2d4 Wolf (LV 2) — shadowing the trail
3. 1 Spider, Giant (LV 3) — webs across the path
4. 2d6 Boar (Overhaul)† (LV 3) — a sounder defending its piglets
5. 1d4 Shadow (LV 3) — where the trees lean away
6. ⚠ 1 Owlbear (LV 6) — it nests facing the tower

### J10 — The Windowless Tower (21,12) · Woodland
1. 2d4 Wolf (LV 2) — shadowing the trail
2. 1 Spider, Giant (LV 3) — webs across the path
3. 2d6 Boar (Overhaul)† (LV 3) — a sounder defending its piglets
4. 1 Ettercap (LV 3) — herding its spiders
5. 2d4 Skeleton (LV 2) — the tower's old garrison
6. 1d4 Shadow (LV 3) — servants of the tower's dark

### B5 — The Tower's Shadow (22,12) · Hills / Mountains
1. 2d6 Ape (LV 2) — a troop defending the high pass
2. 2d4 Goblin (LV 1) — Greyspine raiders on the high paths
3. 1 Harpy (LV 3) — singing from the crags
4. 1 Wyvern (LV 3) — nesting on the ledges
5. 2d4 Shadow (LV 3) — solid in the wrong shadow
6. ⚠ 1 Nightmare Beast† (LV 6) — the shadow dreams, sometimes, of teeth

### B8 — The Black Stair (23,12) · Hills / Mountains
1. 2d4 Goblin (LV 1) — Greyspine raiders on the high paths
2. 1 Harpy (LV 3) — singing from the crags
3. 1 Wyvern (LV 3) — nesting on the ledges
4. 2d6 Ape (LV 2) — a troop defending the high pass
5. 1d6 Skeleton (LV 2) — pilgrims who never finished the descent
6. ⚠ 1 Ghost (LV 6) — counting the nine hundred steps, aloud

### F8 — The Saltings (24,12) · Meadow / Grassland
1. 1 Smilodon (LV 3) — an ambush out of the grass
2. 2d4 Wolf (LV 2) — testing the party for weakness
3. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
4. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
5. 1 Giant Crab (Overhaul)† (LV 5) — in the tidal creeks
6. 2d4 Pirate (LV 1) — salt-rakers turned wreckers

### J11 — The Weeping Arroyo (12,13) · Desert / Cinder Wastes
1. 1d6 Vulture (LV 1) — circling something dead; bold if the party is bleeding
2. 1 Ankheg (LV 3) — bursting from the ash drift
3. 2d4 Baboon† (LV 1) — a raiding troop; grabs loose gear and runs
4. 2d6 Scorpion (LV 0) — under rocks and cactus roots
5. 2d6 Zombie (LV 2) — tear-silver prospectors, still digging
6. 1d4 Ghoul (LV 2) — drinking at the weeping walls

### J12 — Keldar (13,13) · Settlement / Road
1. 1d6 Rat, Giant (LV 0) — cellar vermin, bold as cats
2. 2d4 Guard (LV 1) — a patrol that wants names; combat if resisted
3. 1d4 Thug (LV 3) — hired muscle
4. 2d4 Bandit (LV 1) — road agents and alley toughs
5. 2d6 Zombie (LV 2) — up from the Red Rat cellar; Casimir's strays
6. 1d4 Ghoul (LV 2) — working the boneyard shift the stills won't touch

### A3 — The Cinder Trail (14,13) · Woodland
1. 1 Spider, Giant (LV 3) — webs across the path
2. 2d6 Boar (Overhaul)† (LV 3) — a sounder defending its piglets
3. 1 Ettercap (LV 3) — herding its spiders
4. 2d4 Wolf (LV 2) — shadowing the trail
5. 2d4 Bandit (LV 1) — cinder-road toll-takers
6. 1 Panther (Overhaul)† (LV 3) — hunting the pilgrim road

### C7 — The Penitent's Rest (15,13) · Meadow / Grassland
1. 2d4 Wolf (LV 2) — testing the party for weakness
2. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
3. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
4. 1 Smilodon (LV 3) — an ambush out of the grass
5. 2d4 Acolyte (LV 1) — shrine-wardens; combat only if the shrine is threatened
6. 1d4 Bandit (LV 1) — robbing penitents at the cistern

### D3 — The Stonewatch Meadow (16,13) · Meadow / Grassland
1. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
2. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
3. 1 Smilodon (LV 3) — an ambush out of the grass
4. 2d4 Wolf (LV 2) — testing the party for weakness
5. 1d4 Wolf (LV 2) — circling the spiral grass
6. 1 Shadow (LV 3) — standing where a stone's shadow should be

### J13 — The Staring Stones & The Snail's Ditch (17,13) · Meadow / Grassland
1. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
2. 1 Smilodon (LV 3) — an ambush out of the grass
3. 2d4 Wolf (LV 2) — testing the party for weakness
4. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
5. 2d6 Hive Insect† (LV 2) — the ditch's other congregation
6. ⚠ 1 Predatory Snail† (LV 7) — a lesser pilgrim of the Dreaming Snail, following its call east

### J14 — The Temple of Light (18,13) · Settlement / Road
1. 2d4 Guard (LV 1) — a patrol that wants names; combat if resisted
2. 1d4 Thug (LV 3) — hired muscle
3. 2d4 Bandit (LV 1) — road agents and alley toughs
4. 1d6 Rat, Giant (LV 0) — cellar vermin, bold as cats
5. 2d4 Guard (LV 1) — temple wardens; combat only if provoked
6. ⚠ 1 Priest (LV 5) — if the Temple itself takes the field

### C2 — The Penitent's Field (19,13) · Meadow / Grassland
1. 1 Smilodon (LV 3) — an ambush out of the grass
2. 2d4 Wolf (LV 2) — testing the party for weakness
3. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
4. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
5. 1d4 Acolyte (LV 1) — labyrinth-keepers
6. 1d4 Zombie (LV 2) — penitents who never finished walking

### C4 — The Salt Clearing (20,13) · Woodland
1. 2d6 Boar (Overhaul)† (LV 3) — a sounder defending its piglets
2. 1 Ettercap (LV 3) — herding its spiders
3. 2d4 Wolf (LV 2) — shadowing the trail
4. 1 Spider, Giant (LV 3) — webs across the path
5. 2d4 Lizardfolk (LV 2) — contesting the brine spring
6. 1 Dryad (Overhaul)† (LV 2) — the clearing's salt-widow, defending her tree

### C8 — The Warrant Wood (21,13) · Woodland
1. 1 Ettercap (LV 3) — herding its spiders
2. 2d4 Wolf (LV 2) — shadowing the trail
3. 1 Spider, Giant (LV 3) — webs across the path
4. 2d6 Boar (Overhaul)† (LV 3) — a sounder defending its piglets
5. 2d4 Guard (LV 1) — a Yellow Jacket warrant patrol
6. 1d4 Thug (LV 3) — Argento's face-checkers, working the same rides

### C9 — The Deep Thicket (22,13) · Woodland
1. 2d4 Wolf (LV 2) — shadowing the trail
2. 1 Spider, Giant (LV 3) — webs across the path
3. 2d6 Boar (Overhaul)† (LV 3) — a sounder defending its piglets
4. 1 Ettercap (LV 3) — herding its spiders
5. 1 Shambling Mound (LV 4) — the thicket, walking
6. ⚠ 1 Treant (LV 8) — the wall of the wood, awake

### F9 — The Dockside Fields (23,13) · Meadow / Grassland
1. 2d4 Wolf (LV 2) — testing the party for weakness
2. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
3. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
4. 1 Smilodon (LV 3) — an ambush out of the grass
5. 2d4 Thug (LV 3) — press-gang recruiters working the gardens
6. 1d6 Rat, Swarm (LV 2) — out of the tithe barns

### F10 — The Lantern Fields (24,13) · Meadow / Grassland
1. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
2. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
3. 1 Smilodon (LV 3) — an ambush out of the grass
4. 2d4 Wolf (LV 2) — testing the party for weakness
5. 2d4 Pirate (LV 1) — press-gangers with lanterns of their own
6. 1 Doppelganger (LV 4) — wearing a press-gang captain's face

### A8 — The Boneyard Flats (14,14) · Desert / Cinder Wastes
1. 1 Ankheg (LV 3) — bursting from the ash drift
2. 2d4 Baboon† (LV 1) — a raiding troop; grabs loose gear and runs
3. 2d6 Scorpion (LV 0) — under rocks and cactus roots
4. 1d6 Vulture (LV 1) — circling something dead; bold if the party is bleeding
5. 1d6 Vulture (LV 1) — the boneyard's flock, defending a carcass
6. 2d6 Zombie (LV 2) — the draft teams, still hauling

### C10 — The Fernwood (15,14) · Woodland
1. 1 Spider, Giant (LV 3) — webs across the path
2. 2d6 Boar (Overhaul)† (LV 3) — a sounder defending its piglets
3. 1 Ettercap (LV 3) — herding its spiders
4. 2d4 Wolf (LV 2) — shadowing the trail
5. 1d4 Ettercap (LV 3) — herding spiders through the fronds
6. ⚠ 1 Giant Snake† (LV 5) — the Fern Trail's toll-keeper

### C11 — The Mirewood (16,14) · Mire / Marsh / Bog
1. 1 Violet Fungus (LV 2) — rooted in the path; it doesn't chase, it waits
2. 2d4 Lizardfolk (LV 2) — a hunting party in the reeds
3. 1d4 Frog, Giant (LV 2) — tongues first, questions never
4. 2d6 Leech, Giant (LV 2) — in the black water
5. 1 Crocodile (Overhaul)† (LV 4) — under the tea-brown water
6. 1 Shambling Mound (LV 4) — the woodcutter's offering, answered

### D4 — The Drowning Meadow (17,14) · Mire / Marsh / Bog
1. 2d4 Lizardfolk (LV 2) — a hunting party in the reeds
2. 1d4 Frog, Giant (LV 2) — tongues first, questions never
3. 2d6 Leech, Giant (LV 2) — in the black water
4. 1 Violet Fungus (LV 2) — rooted in the path; it doesn't chase, it waits
5. 2d4 Leech of Paradise† (LV 0) — the black water is full of blessings
6. ⚠ 1 Hippopotamus† (LV 8) — a pod-beast defending the drowned fences

### J15 — The Moss Garden and Shrimple Basin (18,14) · Mire / Marsh / Bog
1. 1d4 Frog, Giant (LV 2) — tongues first, questions never
2. 2d6 Leech, Giant (LV 2) — in the black water
3. 1 Violet Fungus (LV 2) — rooted in the path; it doesn't chase, it waits
4. 2d4 Lizardfolk (LV 2) — a hunting party in the reeds
5. 1d4 Lizardfolk (LV 2) — shrine-keepers of St. Sedge
6. ⚠ 1 Black Pudding (LV 6) — the basin's true tenant

### C12 — The Parting Field (19,14) · Meadow / Grassland
1. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
2. 1 Smilodon (LV 3) — an ambush out of the grass
3. 2d4 Wolf (LV 2) — testing the party for weakness
4. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
5. 2d4 Bandit (LV 1) — crossroads toll-takers
6. 1 Mage (LV 3) — a road-wizard collecting debts

### E1 — Hacot (20,14) · Settlement / Road
1. 1d4 Thug (LV 3) — hired muscle
2. 2d4 Bandit (LV 1) — road agents and alley toughs
3. 1d6 Rat, Giant (LV 0) — cellar vermin, bold as cats
4. 2d4 Guard (LV 1) — a patrol that wants names; combat if resisted
5. 2d4 Guard (LV 1) — Ministry overseers at the wells
6. ⚠ 1 Priest (LV 5) — one of the Seven's own priesthood

### J16 — Vitela (21,14) · Settlement / Road
1. 2d4 Bandit (LV 1) — road agents and alley toughs
2. 1d6 Rat, Giant (LV 0) — cellar vermin, bold as cats
3. 2d4 Guard (LV 1) — a patrol that wants names; combat if resisted
4. 1d4 Thug (LV 3) — hired muscle
5. 2d4 Guard (LV 1) — the Iron Docks chain-watch
6. 1d6 Rat, Swarm (LV 2) — the harbor's real population, rising

### F12 — The Tithe Farms (22,14) · Meadow / Grassland
1. 1 Smilodon (LV 3) — an ambush out of the grass
2. 2d4 Wolf (LV 2) — testing the party for weakness
3. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
4. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
5. 2d4 Peasant (LV 1) — tenant levies with grain forks; combat if the tithe is pressed
6. 1d4 Thug (LV 3) — the Bishop's tithe-enforcers

### F11 — The Chainwatch Fields (23,14) · Meadow / Grassland
1. 2d4 Wolf (LV 2) — testing the party for weakness
2. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
3. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
4. 1 Smilodon (LV 3) — an ambush out of the grass
5. 2d4 Guard (LV 1) — the chain-watch, old sailors with pikes
6. ⚠ 1 Giant Crab (Overhaul)† (LV 5) — it comes ashore for the winch-house grease

### F1 — The Iron Docks Approach (24,14) · Coast / Sakeen Sea
1. 2d4 Merfolk (LV 2) — a territorial shoal-guard
2. 2d6 Deep One (LV 2) — rising from the deep water
3. 2d6 Pirate (LV 1) — a boarding party
4. 1d4 Shark (LV 3) — circling blood in the water
5. 2d4 Pirate (LV 1) — smugglers caught mid-transfer
6. ⚠ 1 Octopus, Giant (LV 5) — it has opinions about hulls

### E5 — The Thornwood (14,15) · Woodland
1. 2d6 Boar (Overhaul)† (LV 3) — a sounder defending its piglets
2. 1 Ettercap (LV 3) — herding its spiders
3. 2d4 Wolf (LV 2) — shadowing the trail
4. 1 Spider, Giant (LV 3) — webs across the path
5. 1d4 Panther (Overhaul)† (LV 3) — thorn-cats, hunting from the green roof
6. ⚠ 1 Owlbear (LV 6) — the teeth of the Thornwood

### E6 — The Owlwood (15,15) · Woodland
1. 1 Ettercap (LV 3) — herding its spiders
2. 2d4 Wolf (LV 2) — shadowing the trail
3. 1 Spider, Giant (LV 3) — webs across the path
4. 2d6 Boar (Overhaul)† (LV 3) — a sounder defending its piglets
5. 1d4 Wolf, Dire (LV 4) — the owls' ground-floor tenants
6. 1 Werewolf (LV 4) — watching back, with the owls' patience

### A9 — The Red Reach (16,15) · Desert / Cinder Wastes
1. 2d4 Baboon† (LV 1) — a raiding troop; grabs loose gear and runs
2. 2d6 Scorpion (LV 0) — under rocks and cactus roots
3. 1d6 Vulture (LV 1) — circling something dead; bold if the party is bleeding
4. 1 Ankheg (LV 3) — bursting from the ash drift
5. 2d4 Orc (LV 1) — a warband using the Reach as a banner
6. 1 Wyvern (LV 3) — nesting in the red stone

### E3 — The Preserving Field (17,15) · Meadow / Grassland
1. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
2. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
3. 1 Smilodon (LV 3) — an ambush out of the grass
4. 2d4 Wolf (LV 2) — testing the party for weakness
5. 2d6 Skeleton (LV 2) — the ancient sea's crew, salt-preserved
6. 1d4 Zombie (LV 2) — salt mummies of the old battlefield road

### E7 — The Last Well (18,15) · Meadow / Grassland
1. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
2. 1 Smilodon (LV 3) — an ambush out of the grass
3. 2d4 Wolf (LV 2) — testing the party for weakness
4. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
5. 2d4 Bandit (LV 1) — well-taxers
6. ⚠ 1 Lion† (LV 5) — an old male; the well is his

### E2 — The Shifting Wood (19,15) · Woodland
1. 2d4 Wolf (LV 2) — shadowing the trail
2. 1 Spider, Giant (LV 3) — webs across the path
3. 2d6 Boar (Overhaul)† (LV 3) — a sounder defending its piglets
4. 1 Ettercap (LV 3) — herding its spiders
5. 1d4 Fairy† (LV 3) — the paths move for them
6. ⚠ 1 Owlbear (LV 6) — it always knows the new paths

### E4 — The Brine Fields (20,15) · Meadow / Grassland
1. 1 Smilodon (LV 3) — an ambush out of the grass
2. 2d4 Wolf (LV 2) — testing the party for weakness
3. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
4. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
5. 1d4 Lizardfolk (LV 2) — contesting the brine springs
6. 1d6 Leech, Giant (LV 2) — the pools are stocked

### F13 — The Harbor Mouth (21,15) · Coast / Sakeen Sea
1. 2d6 Deep One (LV 2) — rising from the deep water
2. 2d6 Pirate (LV 1) — a boarding party
3. 1d4 Shark (LV 3) — circling blood in the water
4. 2d4 Merfolk (LV 2) — a territorial shoal-guard
5. 2d4 Guard (LV 1) — a patrol boat's boarding party
6. 1d4 Shark (LV 3) — toll-keepers of a redder kind

### F6 — The Smuggler's Run (22,15) · Coast / Sakeen Sea
1. 2d6 Pirate (LV 1) — a boarding party
2. 1d4 Shark (LV 3) — circling blood in the water
3. 2d4 Merfolk (LV 2) — a territorial shoal-guard
4. 2d6 Deep One (LV 2) — rising from the deep water
5. 2d4 Pirate (LV 1) — a crew defending its channel
6. 1 Remora† (LV 2) — the reason the chase stopped

### F5 — The Siren's Ledger (23,15) · Coast / Sakeen Sea
1. 1d4 Shark (LV 3) — circling blood in the water
2. 2d4 Merfolk (LV 2) — a territorial shoal-guard
3. 2d6 Deep One (LV 2) — rising from the deep water
4. 2d6 Pirate (LV 1) — a boarding party
5. 1d4 Siren (LV 4) — the ledger-keepers, singing accounts
6. ⚠ 1 Hag, Sea (LV 6) — she audits the sirens

### F14 — The Roadstead (24,15) · Coast / Sakeen Sea
1. 2d4 Merfolk (LV 2) — a territorial shoal-guard
2. 2d6 Deep One (LV 2) — rising from the deep water
3. 2d6 Pirate (LV 1) — a boarding party
4. 1d4 Shark (LV 3) — circling blood in the water
5. 2d4 Pirate (LV 1) — a wanted crew, waiting on courage
6. ⚠ 1 Octopus, Giant (LV 5) — the anchorage's landlord

### E8 — The Lonely Cairn (14,16) · Hills / Mountains
1. 1 Harpy (LV 3) — singing from the crags
2. 1 Wyvern (LV 3) — nesting on the ledges
3. 2d6 Ape (LV 2) — a troop defending the high pass
4. 2d4 Goblin (LV 1) — Greyspine raiders on the high paths
5. 1d6 Skeleton (LV 2) — the shepherd king's court
6. 1 Wight (LV 3) — the shepherd king; he remembers being obeyed

### E9 — The Unused Altar (15,16) · Mire / Marsh / Bog
1. 2d6 Leech, Giant (LV 2) — in the black water
2. 1 Violet Fungus (LV 2) — rooted in the path; it doesn't chase, it waits
3. 2d4 Lizardfolk (LV 2) — a hunting party in the reeds
4. 1d4 Frog, Giant (LV 2) — tongues first, questions never
5. 1d4 Ghoul (LV 2) — the congregation that stayed
6. ⚠ 1 Nightmare Beast† (LV 6) — what the altar was dressed for

### A10 — The Howling Flats (16,16) · Desert / Cinder Wastes
1. 2d6 Scorpion (LV 0) — under rocks and cactus roots
2. 1d6 Vulture (LV 1) — circling something dead; bold if the party is bleeding
3. 1 Ankheg (LV 3) — bursting from the ash drift
4. 2d4 Baboon† (LV 1) — a raiding troop; grabs loose gear and runs
5. 1d4 Hyena† (LV 3) — laughing in the canyon wind
6. ⚠ 1 Ghost (LV 6) — a voice in the wind that knows your name

### E10 — The Ash Grass (17,16) · Meadow / Grassland
1. 2d4 Wolf (LV 2) — testing the party for weakness
2. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
3. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
4. 1 Smilodon (LV 3) — an ambush out of the grass
5. 2d6 Skeleton (LV 2) — the last battle, still standing to
6. 1 Wight (LV 3) — an imperial officer, awaiting orders

### E11 — The Hidden Camp (18,16) · Meadow / Grassland
1. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
2. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
3. 1 Smilodon (LV 3) — an ambush out of the grass
4. 2d4 Wolf (LV 2) — testing the party for weakness
5. 2d4 Bandit (LV 1) — railroad agents mistaken for bandits, or the reverse
6. 1d4 Guard (LV 1) — a Ministry patrol that found the riverbed

### E12 — The Dry Sea (19,16) · Meadow / Grassland
1. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
2. 1 Smilodon (LV 3) — an ambush out of the grass
3. 2d4 Wolf (LV 2) — testing the party for weakness
4. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
5. 2d6 Skeleton (LV 2) — sailors of the ancient sea, becalmed forever
6. ⚠ 1 Bulette (LV 8) — the Dry Sea's shark

### E13 — The Caravan Plain (20,16) · Meadow / Grassland
1. 1 Smilodon (LV 3) — an ambush out of the grass
2. 2d4 Wolf (LV 2) — testing the party for weakness
3. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
4. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
5. 2d4 Bandit (LV 1) — plain-robbers working the wagons
6. ⚠ 1 Lion† (LV 5) — a pride shadowing the caravan

### F15 — The Shallows (21,16) · Coast / Sakeen Sea
1. 2d6 Deep One (LV 2) — rising from the deep water
2. 2d6 Pirate (LV 1) — a boarding party
3. 1d4 Shark (LV 3) — circling blood in the water
4. 2d4 Merfolk (LV 2) — a territorial shoal-guard
5. ⚠ 1 Giant Crab (Overhaul)† (LV 5) — wagon-sized, in the eel-grass
6. 2d4 Merfolk (LV 2) — fisherfolk defending the poles

### F16 — The Night Water (22,16) · Coast / Sakeen Sea
1. 2d6 Pirate (LV 1) — a boarding party
2. 1d4 Shark (LV 3) — circling blood in the water
3. 2d4 Merfolk (LV 2) — a territorial shoal-guard
4. 2d6 Deep One (LV 2) — rising from the deep water
5. 1d4 Deep One (LV 2) — the channel's congregation
6. ⚠ 1 Sea Serpent† (LV 12) — the dark channel is its road

### F17 — The Listening Deep (23,16) · Coast / Sakeen Sea
1. 1d4 Shark (LV 3) — circling blood in the water
2. 2d4 Merfolk (LV 2) — a territorial shoal-guard
3. 2d6 Deep One (LV 2) — rising from the deep water
4. 2d6 Pirate (LV 1) — a boarding party
5. 1d4 Deep One (LV 2) — listening back
6. ⚠ 1 Aboleth (LV 8) — it has heard every word

### F18 — The Last Buoy (24,16) · Coast / Sakeen Sea
1. 2d4 Merfolk (LV 2) — a territorial shoal-guard
2. 2d6 Deep One (LV 2) — rising from the deep water
3. 2d6 Pirate (LV 1) — a boarding party
4. 1d4 Shark (LV 3) — circling blood in the water
5. 1d4 Merfolk (LV 2) — buoy-keepers, of a kind
6. ⚠ 1 Shark, Megalodon (LV 8) — the initials on the buoy are its menu

### E14 — The Last Hill (15,17) · Hills / Mountains
1. 1 Wyvern (LV 3) — nesting on the ledges
2. 2d6 Ape (LV 2) — a troop defending the high pass
3. 2d4 Goblin (LV 1) — Greyspine raiders on the high paths
4. 1 Harpy (LV 3) — singing from the crags
5. 2d6 Telluric Goat† (LV 4) — the last herd, eating the last hill
6. 1 Griffon (LV 4) — the frontier's toll-keeper

### E15 — The Edgewood (16,17) · Woodland
1. 1 Spider, Giant (LV 3) — webs across the path
2. 2d6 Boar (Overhaul)† (LV 3) — a sounder defending its piglets
3. 1 Ettercap (LV 3) — herding its spiders
4. 2d4 Wolf (LV 2) — shadowing the trail
5. 1d4 Fairy† (LV 3) — the market's doorkeepers
6. ⚠ 1 Ghost (LV 6) — a traveler who left in a different season

### E16 — The Whispering Grass (17,17) · Meadow / Grassland
1. 2d4 Wolf (LV 2) — testing the party for weakness
2. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
3. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
4. 1 Smilodon (LV 3) — an ambush out of the grass
5. 2d6 Zombie (LV 2) — the ley line's dead, standing in the grass
6. 1d4 Shadow (LV 3) — the whispers, given shape at dusk

### E17 — The Broken Furrows (18,17) · Meadow / Grassland
1. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
2. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
3. 1 Smilodon (LV 3) — an ambush out of the grass
4. 2d4 Wolf (LV 2) — testing the party for weakness
5. 1d6 Skeleton (LV 2) — the model farm's last tenants
6. 1 Ankheg (LV 3) — ploughing the furrows straighter

### E18 — The Gull Fields (19,17) · Meadow / Grassland
1. 2d6 Hive Insect† (LV 2) — a foraging swarm, fixated on food and salt
2. 1 Smilodon (LV 3) — an ambush out of the grass
3. 2d4 Wolf (LV 2) — testing the party for weakness
4. 1d4 Velociraptor (LV 2) — pack hunters in the tall grass
5. 1d4 Pirate (LV 1) — shore-raiders among the nests
6. 1d4 Harpy (LV 3) — contesting the gulls' sky

### F19 — The South Reach (20,17) · Coast / Sakeen Sea
1. 2d6 Deep One (LV 2) — rising from the deep water
2. 2d6 Pirate (LV 1) — a boarding party
3. 1d4 Shark (LV 3) — circling blood in the water
4. 2d4 Merfolk (LV 2) — a territorial shoal-guard
5. 2d4 Pirate (LV 1) — strange sails, lateen-rigged, unflagged
6. ⚠ 1 Sea Serpent† (LV 12) — here we stopped asking

### F20 — The Drowned Road (21,17) · Coast / Sakeen Sea
1. 2d6 Pirate (LV 1) — a boarding party
2. 1d4 Shark (LV 3) — circling blood in the water
3. 2d4 Merfolk (LV 2) — a territorial shoal-guard
4. 2d6 Deep One (LV 2) — rising from the deep water
5. 2d6 Skeleton (LV 2) — the causeway's legion, marching still
6. ⚠ 1 Ghost (LV 6) — a drowned emperor's herald

### F21 — The Glass Calm (22,17) · Coast / Sakeen Sea
1. 1d4 Shark (LV 3) — circling blood in the water
2. 2d4 Merfolk (LV 2) — a territorial shoal-guard
3. 2d6 Deep One (LV 2) — rising from the deep water
4. 2d6 Pirate (LV 1) — a boarding party
5. 1d4 Siren (LV 4) — becalmed ships sing back, eventually
6. ⚠ 1 Kraken (LV 17) — the calm is a held breath; do not be here when it ends

### F22 — The Edge of the Chart (23,17) · Coast / Sakeen Sea
1. 2d4 Merfolk (LV 2) — a territorial shoal-guard
2. 2d6 Deep One (LV 2) — rising from the deep water
3. 2d6 Pirate (LV 1) — a boarding party
4. 1d4 Shark (LV 3) — circling blood in the water
5. 1d4 Deep One (LV 2) — beyond the rubric, the sea keeps its own counsel, and its own priests
6. ⚠ 1 Sea Serpent† (LV 12)

### F4 — The Deep Blue (24,17) · Coast / Sakeen Sea
1. 2d6 Deep One (LV 2) — rising from the deep water
2. 2d6 Pirate (LV 1) — a boarding party
3. 1d4 Shark (LV 3) — circling blood in the water
4. 2d4 Merfolk (LV 2) — a territorial shoal-guard
5. 1d4 Shark (LV 3) — the deep's ushers
6. ⚠ 1 Kraken (LV 17) — something older than fish

## The Monster Overhaul in Valdoria

25 monsters converted from The Monster Overhaul (LV = HD, HP as printed; AC: none 11,
leather 12, chain 14, plate 16, +1 shield; attack bonus LV+2, capped +8):

| Monster | LV | HP | AC | Source |
|---|---|---|---|---|
| Baboon | 1 | 5 | 11 | Hot Plains, p. 251 |
| Crocodile (Overhaul) | 4 | 18 | 14 | Hot Plains, p. 251 |
| Hyena | 3 | 14 | 11 | Hot Plains, p. 255 |
| Hive Insect | 2 | 9 | 12 | Hot Plains, p. 253 |
| Lion | 5 | 23 | 11 | Hot Plains, p. 257 |
| Hippopotamus | 8 | 36 | 14 | Hot Plains, p. 255 |
| Boar (Overhaul) | 3 | 14 | 12 | Hostile Forests, p. 240 |
| Dryad (Overhaul) | 2 | 9 | 11 | Hostile Forests, p. 240 |
| Fairy | 3 | 14 | 11 | Hostile Forests, p. 241 |
| Giant Snake | 5 | 23 | 14 | Hostile Forests, p. 243 |
| Tiger | 5 | 23 | 11 | Hostile Forests, p. 243 |
| Alicanto | 1 | 4 | 11 | Mysterious Mountains, p. 261 |
| Alpine Spectre | 6 | 27 | 11 | Mysterious Mountains, p. 261 |
| Panther (Overhaul) | 3 | 14 | 11 | Mysterious Mountains, p. 266 |
| Roperite | 2 | 9 | 12 | Mysterious Mountains, p. 266 |
| Telluric Goat | 4 | 18 | 17 | Mysterious Mountains, p. 267 |
| Giant Crab (Overhaul) | 5 | 23 | 14 | Stormy Seas, p. 271 |
| Remora | 2 | 9 | 11 | Stormy Seas, p. 275 |
| Sea Serpent | 12 | 54 | 14 | Stormy Seas, p. 275 |
| Ancient Arthropod | 3 | 14 | 14 | Strange Water, p. 285 |
| Leech of Paradise | 0 | 2 | 11 | Strange Water, p. 287 |
| Mantis Shrimp | 6 | 27 | 14 | Strange Water, p. 287 |
| Predatory Snail | 7 | 32 | 14 | Strange Water, p. 289 |
| Necromancer (Overhaul) | 7 | 32 | 12 | Dark and Malign, p. 163 |
| Nightmare Beast | 6 | 27 | 11 | Dark and Malign, p. 165 |

**Art.** Actors currently use built-in Foundry icons (checked at import time; the mystery-man
icon is the final fallback). The module ships an `art/` folder: once the book art is extracted
from the PDF, dropping `<slug>.png` files into `modules/valdoria-overhaul/art/` (see
`monster-overhaul-art-manifest.md`) and re-running the importer with *Replace existing* ticked
re-points every actor and token at the real art — the importer checks the module art path
first, then an `overhaul-art/` uploads folder, then built-in icons.
