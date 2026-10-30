// ============================================================
// Monster Overhaul — Valdoria Importer — Foundry VTT (Shadowdark, v12)
//
// Creates the 25 Valdoria-curated monsters from The Monster Overhaul
// as real Shadowdark NPCs. Each monster is built by cloning a real
// monster from your compendiums (so every field matches your system's
// data model), then overwriting name/level/AC/HP/abilities and
// rebuilding its attacks and features from the template's own
// "NPC Attack" / "NPC Feature" items. No player "Spell" items are
// ever embedded.
//
// Conversion (from the book entries): LV = HD, HP as printed;
// AC none 11 / leather 12 / chain 14 / plate 16 (+1 shield);
// attack bonus = LV+2 (capped +8).
//
// ART: for each monster the macro checks, in order,
//   1. modules/valdoria-overhaul/art/<slug>.png   (module art folder)
//   2. overhaul-art/<slug>.png                    (FilePicker upload)
//   3. built-in Foundry icon candidates
//   4. icons/svg/mystery-man.svg
// and uses the first path that actually exists on the server for both
// the actor portrait and the token. To give a monster its book art:
// drop the PNG into the module's art/ folder (or upload it into an
// "overhaul-art" folder), then re-run this macro with
// "Replace existing" ticked.
//
// Paste into a new Script macro, like the others.
// ============================================================
(async () => {

  const MONSTERS = [{"name": "Baboon", "slug": "baboon", "lv": 1, "hp": 5, "ac": 11, "abilities": {"str": 1, "dex": 2, "con": 0, "int": -1, "wis": 0, "cha": -1}, "attacks": [{"name": "Claw", "dmg": "1d4", "count": 1, "range": "near"}], "features": [{"name": "Raider's Hands", "desc": "Baboons grab loose gear, shiny objects, and food, then flee to high ground. They arrange ambushes only when cornered, and flee any serious conflict."}], "appearance": "A quadrupedal monkey with a broad chest, fangs, and close-set yellow eyes. Hoots, shrieks, and roars; protective of its young.", "chapter": "Hot Plains", "page": 251, "icons": ["icons/creatures/mammals/ape-tan.webp", "icons/svg/paw-print.svg"]}, {"name": "Crocodile (Overhaul)", "slug": "crocodile", "lv": 4, "hp": 18, "ac": 14, "abilities": {"str": 3, "dex": 0, "con": 2, "int": -3, "wis": 1, "cha": -3}, "attacks": [{"name": "Claw", "dmg": "1d6", "count": 2, "range": "near"}, {"name": "Bite", "dmg": "1d20", "count": 1, "range": "near"}], "features": [{"name": "Ambush Predator", "desc": "Attacks from almost perfect concealment in the water, then rips at entangled prey with its claws. Defends its own hatchlings and nest fiercely."}, {"name": "Remorseful", "desc": "Crocodiles always weep after eating a person. They feel genuine remorse."}], "appearance": "A squat green-grey aquatic reptile with abundant teeth and a long tail. Silent; hatchlings squeak.", "chapter": "Hot Plains", "page": 251, "icons": ["icons/creatures/reptiles/crocodile-green.webp", "icons/svg/water-drop.svg"]}, {"name": "Hyena", "slug": "hyena", "lv": 3, "hp": 14, "ac": 11, "abilities": {"str": 2, "dex": 1, "con": 1, "int": -1, "wis": 1, "cha": 0}, "attacks": [{"name": "Bite", "dmg": "1d8", "count": 1, "range": "near"}], "features": [{"name": "Mimic Speech", "desc": "Hyenas can mimic human speech. At night they lure victims out of shelter to devour them in the darkness."}, {"name": "Bone-Eater", "desc": "Hyenas can eat bone, metal, and stone with equal ease. Cunning, but not brutal."}], "appearance": "A spotted light brown and black wolf-like beast with a long neck and very strong jaws. Yips and laughter.", "chapter": "Hot Plains", "page": 255, "icons": ["icons/creatures/mammals/wolf-spotted.webp", "icons/svg/paw-print.svg"]}, {"name": "Hive Insect", "slug": "hive-insect", "lv": 2, "hp": 9, "ac": 12, "abilities": {"str": 1, "dex": 1, "con": 1, "int": -2, "wis": 0, "cha": -2}, "attacks": [{"name": "Bite", "dmg": "2d6", "count": 1, "range": "near"}], "features": [{"name": "Alarm Pheromone", "desc": "A threatened hive insect coats targets in alarm pheromone: all hive insects instantly attack anyone coated. It washes off with water. (Workers bite for 1d6; this stat block is the warrior.)"}, {"name": "The Colony Comes", "desc": "Near a hive, 1d6 more hive insects arrive each minute until the threat ends. If the queen is killed, the colony disintegrates within hours."}], "appearance": "A human-sized insect: six limbs, dark chitin carapace, glass eyes, flickering antennae. Communication is pheromonal; the colony is a tactical genius, the individual dog-smart.", "chapter": "Hot Plains", "page": 253, "icons": ["icons/creatures/insects/ant-black.webp", "icons/svg/bug.svg"]}, {"name": "Lion", "slug": "lion", "lv": 5, "hp": 23, "ac": 11, "abilities": {"str": 4, "dex": 2, "con": 2, "int": -2, "wis": 1, "cha": 1}, "attacks": [{"name": "Claw", "dmg": "1d4", "count": 2, "range": "near"}, {"name": "Bite", "dmg": "1d10", "count": 1, "range": "near"}], "features": [{"name": "Great Leap", "desc": "Can leap up to 10 feet vertically or 30 feet horizontally without warning."}, {"name": "King of Beasts", "desc": "A lion will not attack a prone person. Lions remember good deeds and may return to aid those who helped them."}], "appearance": "A large tawny cat; males have manes and tend towards laziness. A deep, earth-shaking roar.", "chapter": "Hot Plains", "page": 257, "icons": ["icons/creatures/mammals/lion-tan.webp", "icons/svg/paw-print.svg"]}, {"name": "Hippopotamus", "slug": "hippopotamus", "lv": 8, "hp": 36, "ac": 14, "abilities": {"str": 5, "dex": -1, "con": 3, "int": -3, "wis": 1, "cha": -2}, "attacks": [{"name": "Bite", "dmg": "3d6", "count": 1, "range": "near"}], "features": [{"name": "Thick Hide", "desc": "Reduces all incoming non-magical damage by 3."}, {"name": "River Tyrant", "desc": "Confident and belligerent: chases travellers from its marsh or river, and overturns boats from below. Almost always angry."}], "appearance": "A rubbery, hairless, semi-aquatic beast with a large mouth and stump-like tusks. Grunting and aggressive snorting.", "chapter": "Hot Plains", "page": 255, "icons": ["icons/creatures/mammals/hippo-grey.webp", "icons/svg/water-drop.svg"]}, {"name": "Boar (Overhaul)", "slug": "boar", "lv": 3, "hp": 14, "ac": 12, "abilities": {"str": 3, "dex": 0, "con": 2, "int": -1, "wis": 1, "cha": -1}, "attacks": [{"name": "Tusk", "dmg": "1d12", "count": 1, "range": "near"}], "features": [{"name": "Death Throe", "desc": "After taking lethal damage, a boar makes one final attack against an adjacent target before dying."}, {"name": "Vengeful", "desc": "Boars are surprisingly patient and extraordinarily vengeful. A wronged boar remembers."}], "appearance": "A short-legged, shaggy, tusked pig. Grunting, squealing, screaming. As smart as most people, and vicious.", "chapter": "Hostile Forests", "page": 240, "icons": ["icons/creatures/mammals/boar-brown.webp", "icons/svg/paw-print.svg"]}, {"name": "Dryad (Overhaul)", "slug": "dryad", "lv": 2, "hp": 9, "ac": 11, "abilities": {"str": -1, "dex": 1, "con": 0, "int": 0, "wis": 2, "cha": 3}, "attacks": [{"name": "Branchclaw", "dmg": "1d6", "count": 1, "range": "near"}], "features": [{"name": "Charm Creature", "desc": "Up to 3 times per day, 100 ft range: a target must Save or treat the dryad as a good friend for 1 week. Any directly harmful action by the dryad ends the effect."}, {"name": "Bound to the Tree", "desc": "Any damage to the dryad's home plant is also inflicted on the dryad. She cannot move more than 300 ft from it, and steps through plants as if they were water."}], "appearance": "An alluring human figure formed from light and vegetation. A few extremely polite words. Shy, kind, and aloof.", "chapter": "Hostile Forests", "page": 240, "icons": ["icons/creatures/plants/tree-green.webp", "icons/svg/leaf.svg"]}, {"name": "Fairy", "slug": "fairy", "lv": 3, "hp": 14, "ac": 11, "abilities": {"str": -1, "dex": 3, "con": 0, "int": 3, "wis": 1, "cha": 3}, "attacks": [{"name": "Branchdagger", "dmg": "1d8", "count": 1, "range": "near"}, {"name": "Gnarled Longbow", "dmg": "1d8", "count": 1, "range": "far"}], "features": [{"name": "Spell Resistance", "desc": "80% chance to resist any spell — but a spell that is not resisted deals double damage."}, {"name": "Glamour and Charms", "desc": "Once per day each: invisibility (up to 12 hours); charm creature (Save or treat the fairy as a good friend for 24 hours); dance (Save or dance 2d6 rounds, unable to attack); glamour (a perfect illusion up to a 100 ft cube, lasting 24 hours)."}, {"name": "Fairy Repulsions", "desc": "Repelled by the products of civilization: iron, bread, writing, and holy symbols. Breaking normal behaviour — clothes inside-out, walking backwards — confuses and distresses them."}], "appearance": "A beautiful, ethereal human, not quite real, as if seen through cracked ice or a heat haze. Amused, distracted, and musical. Wants entertainment.", "chapter": "Hostile Forests", "page": 241, "icons": ["icons/creatures/fey/fairy-pink.webp", "icons/svg/wing.svg"]}, {"name": "Giant Snake", "slug": "giant-snake", "lv": 5, "hp": 23, "ac": 14, "abilities": {"str": 3, "dex": 1, "con": 2, "int": -3, "wis": 0, "cha": -3}, "attacks": [{"name": "Bite", "dmg": "1d8", "count": 1, "range": "near"}], "features": [{"name": "Constrictor (Variant)", "desc": "Some giant snakes crush instead of biting: 1d8 damage the first round, 1 more each round after, until pried off by at least three strong people."}, {"name": "Eat or Be Eaten", "desc": "To a snake, life is not complicated: everything is food, a threat, or terrain."}], "appearance": "A scaly, limbless reptile of enormous size. Silent, with the rare hiss or yawn. Wants food and warmth.", "chapter": "Hostile Forests", "page": 243, "icons": ["icons/creatures/reptiles/snake-green.webp", "icons/svg/snake.svg"]}, {"name": "Tiger", "slug": "tiger", "lv": 5, "hp": 23, "ac": 11, "abilities": {"str": 4, "dex": 3, "con": 2, "int": -1, "wis": 2, "cha": 0}, "attacks": [{"name": "Claw", "dmg": "1d6", "count": 2, "range": "near"}, {"name": "Bite", "dmg": "1d8", "count": 1, "range": "near"}], "features": [{"name": "Rake", "desc": "If both claw attacks hit the same target, the tiger makes two additional claw attacks against that target."}, {"name": "Unseen Stalker", "desc": "In tall grass, forest, or darkness, a tiger is effectively invisible if it is more than 20 ft from its target."}, {"name": "Grudges", "desc": "Tigers are more cunning than all but the most veteran hunters, fully capable of patient, deceptive, multi-year strategies. They hold grudges."}], "appearance": "A large orange and black striped cat. Gruff rumbles, guttural roar. Relentlessly predatory and unforgiving.", "chapter": "Hostile Forests", "page": 243, "icons": ["icons/creatures/mammals/tiger-orange.webp", "icons/svg/paw-print.svg"]}, {"name": "Alicanto", "slug": "alicanto", "lv": 1, "hp": 4, "ac": 11, "abilities": {"str": -3, "dex": 2, "con": -1, "int": -3, "wis": 0, "cha": -1}, "attacks": [{"name": "Scratch", "dmg": "1", "count": 1, "range": "near"}], "features": [{"name": "Darkness", "desc": "Once per day: generates a zone of magical darkness 20 ft high and 100 ft across, lasting 1 hour and moving with the alicanto. At night it renders non-magical light useless and halves the range of magical light."}, {"name": "Metal-Eater", "desc": "Devours precious metals, refining them in its crop (worth 20x1d10 gp in nuggets). In darkness its armour is as chain (AC 14). Following one can lead to treasure hoards — or disaster."}], "appearance": "A chicken-sized brown bird with apparently functional wings that cannot fly. Irritable peeping. Powerfully dim; terrified of anything bright or swift.", "chapter": "Mysterious Mountains", "page": 261, "icons": ["icons/creatures/birds/bird-brown.webp", "icons/svg/wing.svg"]}, {"name": "Alpine Spectre", "slug": "alpine-spectre", "lv": 6, "hp": 27, "ac": 11, "abilities": {"str": -2, "dex": 2, "con": 0, "int": 0, "wis": 2, "cha": 1}, "attacks": [{"name": "Chill Touch", "dmg": "1d8", "count": 1, "range": "near"}], "features": [{"name": "Incorporeal Immunities", "desc": "Immune to elemental and non-magical damage. Its chill touch ignores armour."}, {"name": "Drain Vitality", "desc": "A creature hit by its touch must Save or have the XP required for its next level doubled (in games without XP math: take 2 permanent stat damage). After draining, the spectre must test Morale or vanish."}, {"name": "Unwatched Speed", "desc": "Flies at normal speed when observed — six times faster when nobody is watching."}], "appearance": "An elongated humanoid shadow ringed with rainbow light, seeming miles away and within arm's reach at once. Silent. Wants to live again.", "chapter": "Mysterious Mountains", "page": 261, "icons": ["icons/creatures/undead/ghost-white.webp", "icons/svg/ghost.svg"]}, {"name": "Panther (Overhaul)", "slug": "panther", "lv": 3, "hp": 14, "ac": 11, "abilities": {"str": 2, "dex": 3, "con": 1, "int": -2, "wis": 1, "cha": -1}, "attacks": [{"name": "Claw", "dmg": "1d4", "count": 2, "range": "near"}, {"name": "Bite", "dmg": "1d6", "count": 1, "range": "near"}], "features": [{"name": "Ambush Leap", "desc": "Leaps 20 ft forward and 10 ft high from concealment. If both claw attacks hit the same target, the bite attack automatically hits."}, {"name": "Fair-Weather Hunter", "desc": "If its ambush fails, the panther must test Morale or flee. It drags kills into trees as larders and warnings."}], "appearance": "A large slim cat, silent but for the occasional yowl. A patient and cunning ambush hunter.", "chapter": "Mysterious Mountains", "page": 266, "icons": ["icons/creatures/mammals/panther-black.webp", "icons/svg/paw-print.svg"]}, {"name": "Roperite", "slug": "roperite", "lv": 2, "hp": 9, "ac": 12, "abilities": {"str": 1, "dex": 2, "con": 0, "int": -1, "wis": 0, "cha": -1}, "attacks": [{"name": "Noose-Trunk", "dmg": "0", "count": 1, "range": "near"}], "features": [{"name": "Noose-Trunk", "desc": "On a hit, a target smaller than a horse is knocked prone and grappled. Dragged targets take 1d4 damage per round (1d8 over thorns or sharp stone). The roperite releases its grapple if it takes more than 4 damage or fails a Morale test."}, {"name": "Swift and Piercing-Proof", "desc": "Moves four times normal speed over all terrain. Immune to piercing damage."}], "appearance": "A tan, pony-sized bipedal leathery lizard with a 10 ft rope-like trunk tied into a noose. Gronking, meeping, wheezing. Mischievous and cowardly.", "chapter": "Mysterious Mountains", "page": 266, "icons": ["icons/creatures/reptiles/lizard-tan.webp", "icons/svg/mystery-man.svg"]}, {"name": "Telluric Goat", "slug": "telluric-goat", "lv": 4, "hp": 18, "ac": 17, "abilities": {"str": 3, "dex": 0, "con": 2, "int": -2, "wis": 0, "cha": -2}, "attacks": [{"name": "Kick", "dmg": "1d4", "count": 1, "range": "near"}, {"name": "Bite", "dmg": "1d8", "count": 1, "range": "near"}], "features": [{"name": "Metal-Eating Bite", "desc": "On a bite hit, roll 1d10 on the bite-effect table in The Monster Overhaul: held metal destroyed (magic items get a Save), coins transmuted down a grade (gold to silver to copper to sand), iron turned magnetic, the target flung 30x1d10 ft unharmed, and worse. The bite unmakes metal and order alike."}, {"name": "Iron Body", "desc": "A horse-sized goat of rusted iron with shining horns and red lamp-like eyes. It climbs and burrows at normal speed, hunting rare minerals and ore veins. Its carcass is worth 200 gp to alchemists and blacksmiths."}], "appearance": "A horse-sized goat made of rusted iron. Clattering, screeching, clicking teeth. Wants to devour minerals; universally hostile.", "chapter": "Mysterious Mountains", "page": 267, "icons": ["icons/creatures/mammals/goat-iron.webp", "icons/svg/horns.svg"]}, {"name": "Giant Crab (Overhaul)", "slug": "giant-crab", "lv": 5, "hp": 23, "ac": 14, "abilities": {"str": 3, "dex": 0, "con": 2, "int": -3, "wis": 0, "cha": -3}, "attacks": [{"name": "Claw", "dmg": "1d8", "count": 2, "range": "near"}], "features": [{"name": "Sea-Washed Hoard", "desc": "A giant crab's lair contains about 30 gp in sea-washed coins and gems."}, {"name": "Wagon-Sized", "desc": "A flat crustacean the size of a wagon: two snipping limbs, black eyes, churning mouthparts. Cautious, irritable, and hungry for meat."}], "appearance": "A flat crustacean the size of a wagon. Silent, with the occasional click. Wants meat.", "chapter": "Stormy Seas", "page": 271, "icons": ["icons/creatures/insects/crab-red.webp", "icons/svg/water-drop.svg"]}, {"name": "Remora", "slug": "remora", "lv": 2, "hp": 9, "ac": 11, "abilities": {"str": -2, "dex": 2, "con": 0, "int": -3, "wis": 0, "cha": -2}, "attacks": [{"name": "Attach", "dmg": "0", "count": 1, "range": "near"}], "features": [{"name": "Attach", "desc": "On a melee hit, the remora fastens itself on: neither it nor its target can move. Any damage dealt to the remora is also dealt to its host. It detaches only for strong magic, a more tempting target, or its death."}, {"name": "Meddler", "desc": "Remoras wander close, stick, and hold — ships, sharks, and swimmers alike. Nautical lore says salt-preserved remora flesh attracts gold like a magnet."}], "appearance": "A small sleek fish with a cup-like depression on its head. Silent, with reproachful glances. Wants to meddle.", "chapter": "Stormy Seas", "page": 275, "icons": ["icons/creatures/fish/fish-grey.webp", "icons/svg/water-drop.svg"]}, {"name": "Sea Serpent", "slug": "sea-serpent", "lv": 12, "hp": 54, "ac": 14, "abilities": {"str": 5, "dex": 1, "con": 3, "int": 0, "wis": 1, "cha": 0}, "attacks": [{"name": "Bite", "dmg": "3d10", "count": 1, "range": "near"}, {"name": "Coil Bludgeon", "dmg": "1d8", "count": 2, "range": "near"}], "features": [{"name": "Ship-Bane", "desc": "Infamously vicious predators that sink ships and devour sailors with ease, with a malign and devious intelligence."}, {"name": "Swallowed Fortune", "desc": "A sea serpent's guts contain 100x1d6 gp in swallowed coins and barnacle-coated gems."}], "appearance": "A sinuous aquatic reptile at least 50 ft long, all scales and teeth. Hideous roaring, screeching, hissing. Wants to devour flesh.", "chapter": "Stormy Seas", "page": 275, "icons": ["icons/creatures/reptiles/serpent-blue.webp", "icons/svg/water-drop.svg"]}, {"name": "Ancient Arthropod", "slug": "ancient-arthropod", "lv": 3, "hp": 14, "ac": 14, "abilities": {"str": 2, "dex": 1, "con": 1, "int": -3, "wis": 0, "cha": -3}, "attacks": [{"name": "Claw or Bite", "dmg": "1d4", "count": 1, "range": "near"}], "features": [{"name": "Ever-Growing", "desc": "They only grow bigger as they age; the largest retreat to the depths and grow to the size of ships."}, {"name": "Many Forms", "desc": "Trilobites, anomalocarids, eurypterids: segmented, wolf-sized, merrily cannibalistic. Swimming kinds have segmented fins; crawling kinds hide rows of delicate legs under an oval carapace."}], "appearance": "A segmented wolf-sized creature out of deep time. Silent. Dim curiosity — it will take a bite out of anything.", "chapter": "Strange Water", "page": 285, "icons": ["icons/creatures/insects/trilobite-brown.webp", "icons/svg/bug.svg"]}, {"name": "Leech of Paradise", "slug": "leech-of-paradise", "lv": 0, "hp": 2, "ac": 11, "abilities": {"str": -4, "dex": 1, "con": 0, "int": -4, "wis": -2, "cha": 0}, "attacks": [{"name": "Bite (Attach)", "dmg": "0", "count": 1, "range": "near"}], "features": [{"name": "Healing Parasite", "desc": "Bites to attach. Each round attached, the host heals 1 HP; beyond full HP the host instead gains temporary HP — but if temporary HP equals the host's normal HP, the host dies and bursts in a shower of tumors. A difficult Strength test pulls it free; salt removes it instantly and kills it."}, {"name": "Coveted", "desc": "Worth 1,000 gp to any healer, alchemist, or scholar. Lives about a week in captivity."}, {"name": "Soft Body", "desc": "Immune to bludgeoning and slashing damage."}], "appearance": "A thumb-sized worm that glows blue-white. No voice. Benevolent-seeming — it wants only to complete its life cycle.", "chapter": "Strange Water", "page": 287, "icons": ["icons/creatures/worms/leech-blue.webp", "icons/svg/water-drop.svg"]}, {"name": "Mantis Shrimp", "slug": "mantis-shrimp", "lv": 6, "hp": 27, "ac": 14, "abilities": {"str": 4, "dex": 2, "con": 2, "int": -1, "wis": 2, "cha": -2}, "attacks": [{"name": "Cavitation Club", "dmg": "2d12", "count": 1, "range": "near"}], "features": [{"name": "Stunning Strike", "desc": "On a successful hit, the target must also Save or be stunned for 1 round."}, {"name": "Impossible Eyes", "desc": "Sees invisible creatures. Ignores illusions, smoke, and sediment."}, {"name": "Territorial", "desc": "Makes threatening gestures, then attacks. Defends its burrow and eggs to the death, but rarely pursues dangerous prey. A dead, intact mantis shrimp is worth 100 gp to a skilled armourer."}], "appearance": "A shrimp the size of a horse, with large stalked eyes and folded arms. Clicking and scraping. Focused hostility against intruders.", "chapter": "Strange Water", "page": 287, "icons": ["icons/creatures/insects/shrimp-rainbow.webp", "icons/svg/eye.svg"]}, {"name": "Predatory Snail", "slug": "predatory-snail", "lv": 7, "hp": 32, "ac": 14, "abilities": {"str": 3, "dex": -2, "con": 3, "int": -3, "wis": 0, "cha": -3}, "attacks": [{"name": "Bite", "dmg": "1d6", "count": 1, "range": "near"}], "features": [{"name": "Relentless Nose", "desc": "Follows an interesting smell to its source, attacks, then investigates and devours the results. Retreats from bright light or sustained violence."}, {"name": "Slow Doom", "desc": "Moves at a quarter of normal speed — and never, ever stops. An intact shell is worth 200 gp."}], "appearance": "A large and purposeful snail: hard shell, soft foot, questing eyestalks. Moist chewing. Poor eyesight, excellent sense of smell; eats almost anything.", "chapter": "Strange Water", "page": 289, "icons": ["icons/creatures/worms/snail-brown.webp", "icons/svg/mystery-man.svg"]}, {"name": "Necromancer (Overhaul)", "slug": "necromancer", "lv": 7, "hp": 32, "ac": 12, "abilities": {"str": 0, "dex": 1, "con": 1, "int": 3, "wis": 2, "cha": 1}, "attacks": [{"name": "Dagger", "dmg": "1d6", "count": 1, "range": "near"}], "features": [{"name": "Raise Lesser Undead", "desc": "3 times per day: raises up to 3 reasonably intact corpses as zombies, or up to 6 decayed corpses as skeletons, under the necromancer's control."}, {"name": "Finger of Death", "desc": "2 times per day, 50 ft range: a target creature must Save or die."}, {"name": "Interrogate Spirit", "desc": "After a 5-minute ritual, calls up the spirit of a dead intelligent creature whose true name it knows; the spirit answers up to 3 questions truthfully, then vanishes."}, {"name": "Mind-Shielded", "desc": "Immune to mind-altering effects. Steeped in unwholesome secrets; callous and morbid, but not cruel."}], "appearance": "Ragged robes, a broad hat, unhealthy skin. Unsettling whispers and croaked commands. Wants the secrets of life and death.", "chapter": "Dark and Malign", "page": 163, "icons": ["icons/creatures/undead/necromancer-purple.webp", "icons/svg/skull.svg"]}, {"name": "Nightmare Beast", "slug": "nightmare-beast", "lv": 6, "hp": 27, "ac": 11, "abilities": {"str": 3, "dex": 1, "con": 2, "int": 1, "wis": 0, "cha": 2}, "attacks": [{"name": "Ravening Claw", "dmg": "1d6", "count": 2, "range": "near"}, {"name": "Bite", "dmg": "1d8", "count": 1, "range": "near"}], "features": [{"name": "Only Hurt Once", "desc": "A nightmare beast can only be harmed by any given weapon, spell, element, or ability once — the first strike cuts deep, the second glances off hardening skin. All immunities reset at the next sunrise."}, {"name": "Disbelief", "desc": "Anyone who can see or hear the beast but has not been damaged or touched by it can spend a full round disbelieving in it and Save: on a pass the beast takes 3d8 damage; on a fail it targets them next."}, {"name": "Shifting Attacks", "desc": "Its attack form changes every round — sludge spray, gallstone cannon, baleful stare, flesh detonation, a wail. Roll on its attack table in The Monster Overhaul."}], "appearance": "Its appearance varies and will not settle. Gibberish. It senses local values and acts in direct, unrelenting opposition. Spawned from fevered dreams and cracks between dimensions.", "chapter": "Dark and Malign", "page": 165, "icons": ["icons/creatures/aberrations/eye-beast.webp", "icons/svg/eye.svg"]}];

  // On this build the big class globals exist only as bare identifiers,
  // not as properties of globalThis — always try the bare name first.
  const FOUNDRY_NS = (() => { try { return foundry; } catch (e) { return globalThis.foundry ?? null; } })();
  const U = FOUNDRY_NS?.utils ?? globalThis.foundry?.utils;
  const getP = (o, p) => { try { return U.getProperty(o, p); } catch (e) { return undefined; } };
  const setP = (o, p, v) => { try { U.setProperty(o, p, v); return true; } catch (e) { return false; } };
  const hasP = (o, p) => getP(o, p) !== undefined;
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const ActorC = (() => { try { return Actor; } catch (e) { return globalThis.Actor ?? null; } })();

  /* ---------- art resolution (existence-checked, cached) ---------- */
  const artCache = new Map();
  async function pathExists(src) {
    if (artCache.has(src)) return artCache.get(src);
    let ok = false;
    try { const r = await fetch(src, { method: "HEAD" }); ok = !!r?.ok; } catch (e) { ok = false; }
    artCache.set(src, ok);
    return ok;
  }
  async function pickArt(m) {
    const cands = [
      `modules/valdoria-overhaul/art/${m.slug}.png`,
      `overhaul-art/${m.slug}.png`,
      ...(m.icons ?? []),
    ];
    for (const c of cands) { if (await pathExists(c)) return c; }
    return "icons/svg/mystery-man.svg";
  }

  /* ---------- form helper (DialogV2, legacy fallback) ---------- */
  function readForm(root, names) {
    const out = {};
    if (!root) return out;
    for (const n of names) {
      const el = root.querySelector(`[name="${n}"]`);
      if (!el) { out[n] = ""; continue; }
      out[n] = el.type === "checkbox" ? el.checked : el.value;
    }
    return out;
  }
  async function askForm(title, contentHtml, names) {
    const DV2 = FOUNDRY_NS?.applications?.api?.DialogV2;
    if (DV2?.prompt) {
      try {
        const res = await DV2.prompt({
          window: { title },
          content: contentHtml,
          rejectClose: false,
          ok: { label: "Import monsters", callback: (event, button, dialog) => readForm(dialog.element ?? button?.form, names) },
        });
        return res ?? null;
      } catch (e) { return null; }
    }
    if (typeof Dialog !== "undefined") {
      return await new Promise((resolve) => {
        let done = false;
        const finish = (v) => { if (!done) { done = true; resolve(v); } };
        new Dialog({
          title,
          content: contentHtml,
          buttons: {
            ok: { label: "Import monsters", callback: (html) => finish(readForm(html[0] ?? html, names)) },
            cancel: { label: "Cancel", callback: () => finish(null) },
          },
          default: "ok",
          close: () => finish(null),
        }).render(true);
      });
    }
    ui.notifications.error("No dialog API available in this Foundry version.");
    return null;
  }

  /* ---------- destination choices ---------- */
  const destOptions = [
    `<option value="world">Actors tab — the monster section</option>`,
    `<option value="newpack">Compendium — new pack "Monster Overhaul — Valdoria"</option>`,
  ];
  const packByValue = {};
  for (const pack of game.packs) {
    if (pack.documentName !== "Actor") continue;
    if (pack.metadata?.packageType !== "world" || pack.locked) continue;
    const v = `pack:${pack.collection}`;
    packByValue[v] = pack;
    destOptions.push(`<option value="${esc(v)}">Compendium — existing pack "${esc(pack.metadata?.label || pack.collection)}"</option>`);
  }

  const form = `
  <form>
    <p class="notes">Imports the 25 Valdoria monsters converted from <em>The Monster Overhaul</em> (Hot Plains, Hostile Forests, Mysterious Mountains, Stormy Seas, Strange Water, Dark and Malign). Built from a clone of a real monster in your compendiums so the sheets match your system. Art is picked per monster: module art folder first, then an "overhaul-art" upload folder, then a built-in icon — re-run with Replace ticked after adding book art.</p>
    <div class="form-group">
      <label>Import to</label>
      <div class="form-fields">
        <select name="dest" style="width:100%">${destOptions.join("")}</select>
      </div>
    </div>
    <div class="form-group">
      <label>Replace existing</label>
      <div class="form-fields"><input type="checkbox" name="overwrite"> Replace monsters that already have the same name</div>
    </div>
  </form>`;

  const res = await askForm("Monster Overhaul — Valdoria Importer", form, ["dest", "overwrite"]);
  if (!res) return;
  const overwrite = res.overwrite === true;

  /* ---------- find template monster pieces to clone ---------- */
  let template = null, templateAttack = null, templateFeature = null;
  let scanned = 0;
  outer:
  for (const pack of game.packs) {
    if (pack.documentName !== "Actor") continue;
    let index = null;
    try { index = await pack.getIndex(); } catch (e) { continue; }
    for (const entry of Array.from(index ?? [])) {
      if (!entry?.name || /Generic Monster LV/.test(entry.name)) continue;
      if (template && templateAttack && templateFeature) break outer;
      if (scanned > 60) break outer;
      try {
        const doc = await pack.getDocument(entry._id);
        scanned++;
        if (doc?.type !== "NPC") continue;
        const obj = doc.toObject();
        if (!template) template = obj;
        const atk = (obj.items ?? []).find((it) => /attack/i.test(it.type ?? ""));
        if (atk && !templateAttack) { templateAttack = U.deepClone(atk); delete templateAttack._id; }
        const feat = (obj.items ?? []).find((it) => /feature/i.test(it.type ?? ""));
        if (feat && !templateFeature) { templateFeature = U.deepClone(feat); delete templateFeature._id; }
        if (template && templateAttack && templateFeature) break outer;
      } catch (e) { /* try the next entry */ }
    }
  }
  if (!template) {
    ui.notifications.error("Monster Overhaul: no NPC monster found in any compendium to use as a template — import cancelled.");
    return;
  }
  if (!templateAttack) ui.notifications.warn("Monster Overhaul: no NPC Attack item found on any template monster — attacks will be written into the notes instead.");
  const descPaths = ["details.biography", "details.description", "description", "details.notes", "biography"];

  /* ---------- build one monster's data ---------- */
  function buildAttack(a, bonus) {
    if (!templateAttack) return null;
    const item = U.deepClone(templateAttack);
    item.name = `${a.name} +${bonus} (${a.dmg})` + (a.count > 1 ? ` ×${a.count}` : "");
    const sys = item.system ?? {};
    for (const k of Object.keys(sys)) {
      if (/bonus/i.test(k) && typeof sys[k] === "number") sys[k] = bonus;
      else if (/damage/i.test(k) && typeof sys[k] === "string") sys[k] = a.dmg;
      else if (/damage/i.test(k) && sys[k] && typeof sys[k] === "object" && typeof sys[k].value === "string") sys[k].value = a.dmg;
      else if (/num|count/i.test(k) && /attack/i.test(k) && typeof sys[k] === "number") sys[k] = a.count;
    }
    return item;
  }
  function buildFeature(f) {
    if (!templateFeature) return null;
    const item = U.deepClone(templateFeature);
    item.name = f.name;
    const cur = getP(item, "system.description");
    if (typeof cur === "string") setP(item, "system.description", f.desc);
    else if (cur && typeof cur === "object" && typeof cur.value === "string") setP(item, "system.description.value", f.desc);
    return item;
  }
  async function buildData(m) {
    const bonus = Math.min(m.lv + 2, 8);
    const data = U.deepClone(template);
    delete data._id;
    delete data.folder;
    delete data.flags;
    if (data.prototypeToken) delete data.prototypeToken.actorId;
    data.name = m.name;
    data.items = [];
    data.effects = [];

    setP(data, "system.level.value", m.lv);
    if (hasP(data, "system.attributes.ac.value")) setP(data, "system.attributes.ac.value", m.ac);
    if (hasP(data, "system.attributes.ac.base")) setP(data, "system.attributes.ac.base", m.ac);
    if (hasP(data, "system.attributes.hp.value")) setP(data, "system.attributes.hp.value", m.hp);
    if (hasP(data, "system.attributes.hp.max")) setP(data, "system.attributes.hp.max", m.hp);
    if (hasP(data, "system.attributes.hp.base")) setP(data, "system.attributes.hp.base", m.hp);

    for (const ab of ["str", "dex", "con", "int", "wis", "cha"]) {
      const mod = m.abilities[ab] ?? 0;
      const score = 10 + 2 * mod;
      if (typeof getP(data, `system.abilities.${ab}.mod`) === "number") setP(data, `system.abilities.${ab}.mod`, mod);
      for (const leaf of ["base", "value", "score"]) {
        if (typeof getP(data, `system.abilities.${ab}.${leaf}`) === "number") setP(data, `system.abilities.${ab}.${leaf}`, score);
      }
    }

    let notesExtra = "";
    for (const a of m.attacks) {
      const it = buildAttack(a, bonus);
      if (it) data.items.push(it);
      else notesExtra += `\nAttack: ${a.name} +${bonus} (${a.dmg})${a.count > 1 ? ` ×${a.count}` : ""}.`;
    }
    for (const f of m.features) {
      const it = buildFeature(f);
      if (it) data.items.push(it);
      else notesExtra += `\n${f.name}. ${f.desc}`;
    }

    const notes = `${m.appearance}\n\nConverted from The Monster Overhaul (${m.chapter}, p. ${m.page}). LV = HD, HP as printed; Shadowdark conversion.${notesExtra}`;
    setP(data, "system.notes", notes);
    for (const p of descPaths) {
      const cur = getP(data, `system.${p}`);
      if (typeof cur === "string") setP(data, `system.${p}`, "");
      else if (cur && typeof cur === "object") {
        if (typeof cur.value === "string") setP(data, `system.${p}.value`, "");
        if (typeof cur.text === "string") setP(data, `system.${p}.text`, "");
      }
    }

    const art = await pickArt(m);
    data.img = art;
    if (data.prototypeToken) {
      data.prototypeToken.name = data.name;
      data.prototypeToken.actorLink = false;
      data.prototypeToken.bar1 = { attribute: "attributes.hp" };
      if (data.prototypeToken.texture) data.prototypeToken.texture.src = art;
    }
    return { data, art };
  }

  /* ---------- resolve the destination ---------- */
  let destPack = null, destLabel = "the Actors tab";
  if (res.dest === "newpack") {
    const isWorldActorPack = (p) => p.documentName === "Actor" && p.metadata?.packageType === "world";
    destPack = game.packs.find((p) => isWorldActorPack(p) && /monster overhaul/i.test(p.metadata?.label ?? "")) ?? null;
    if (!destPack) {
      let CC = null;
      const tries = [
        () => CompendiumCollection,
        () => game.packs.constructor,
        () => FOUNDRY_NS?.documents?.collections?.CompendiumCollection,
      ];
      for (const t of tries) {
        try { const c = t(); if (c && typeof c.createCompendium === "function") { CC = c; break; } } catch (e) {}
      }
      if (!CC) {
        ui.notifications.error("Monster Overhaul: couldn't find a way to create a compendium on this build — import cancelled. Tell Muse.");
        return;
      }
      destPack = await CC.createCompendium({
        type: "Actor", label: "Monster Overhaul — Valdoria", name: "monster-overhaul-valdoria",
        packageType: "world", packageName: "world",
      });
    }
    destLabel = `the "${destPack.metadata?.label || "Monster Overhaul — Valdoria"}" compendium`;
  } else if (res.dest && packByValue[res.dest]) {
    destPack = packByValue[res.dest];
    destLabel = `the "${destPack.metadata?.label || destPack.collection}" compendium`;
  }

  let existingNames = new Map();
  if (destPack) {
    try {
      const idx = await destPack.getIndex();
      for (const e of Array.from(idx ?? [])) if (e?.name) existingNames.set(e.name.toLowerCase(), e._id);
    } catch (e) {}
  }

  /* ---------- import ---------- */
  let created = 0, skipped = 0, failed = 0, firstError = "", bookArt = 0;
  ui.notifications.info(`Importing ${MONSTERS.length} Monster Overhaul monsters — give it a moment.`);
  for (const m of MONSTERS) {
    try {
      const { data, art } = await buildData(m);
      if (/valdoria-overhaul\/art\//.test(art) || /^overhaul-art\//.test(art)) bookArt++;
      if (!destPack) {
        const existing = game.actors.getName(data.name);
        if (existing && !overwrite) { skipped++; continue; }
        if (existing && overwrite) await existing.delete();
        await ActorC.create(data);
        created++;
      } else {
        const key = data.name.toLowerCase();
        if (existingNames.has(key) && !overwrite) { skipped++; continue; }
        if (existingNames.has(key) && overwrite) {
          try { const old = await destPack.getDocument(existingNames.get(key)); await old?.delete(); } catch (e) {}
        }
        const temp = await ActorC.create(data);
        await destPack.importDocument(temp);
        await temp.delete();
        existingNames.set(key, true);
        created++;
      }
    } catch (e) {
      failed++;
      if (!firstError) firstError = `${m.name}: ${e?.message ?? e}`;
      console.warn(`Monster Overhaul: failed on ${m.name}`, e);
    }
  }

  ui.notifications.info(`Monster Overhaul: ${created} monster(s) imported to ${destLabel}${skipped ? `, ${skipped} already there and skipped` : ""}${failed ? `, ${failed} FAILED — first: ${firstError}` : ""}. ${bookArt} use book art; the rest use built-in icons for now — add <slug>.png files to the valdoria-overhaul module's art/ folder (or an "overhaul-art" upload folder) and re-run with Replace ticked to upgrade them.`);
})();
