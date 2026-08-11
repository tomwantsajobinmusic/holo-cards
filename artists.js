/**
 * ARTIST DOSSIER DATA
 * ───────────────────
 * One entry per printed card. The key is the slug you put in the QR code URL:
 *   yoursite.com/?id=jensen-truly
 *
 * Fields:
 *   name        — artist / DJ name, shown in cold-stamp foil type
 *   event       — where the shot was taken (goes in the SHOT AT field)
 *   date        — month/year or full date (goes in the CAPTURED field)
 *   gear        — camera/lens, optional flex line (goes in the RIG field)
 *   image       — path to the photo used on the holo card face (portrait, ~3:4)
 *   cardNumber  — optional, e.g. "001/025" if these are numbered like a real TCG set
 *   rarity      — optional label, e.g. "HOLO RARE" — shows as a small foil badge
 *   story       — the typewriter copy. Keep paragraphs short — 2-4 sentences reads
 *                 best typed out. Line breaks in the array = new paragraph.
 *   links       — optional array of {label, url} shown as buttons under the dossier
 */

window.ARTISTS = {

  "jensen-truly": {
    name: "Jensen Truly",
    event: "Concourse Project — Austin, TX",
    date: "2026",
    gear: "Sony A7III · GM 24-70",
    image: "assets/jensen-truly.jpg",
    cardNumber: "001",
    rarity: "HOLO RARE",
    story: [
      "Shot mid-set, house lights cut to a single strobe on the downbeat. This is the frame that made the rest of the night worth staying up for.",
      "Printed as a one-of-one holo, cold-stamped, mailed to your team by hand. If it caught your eye, the full-res set is one message away."
    ],
    links: [
      { label: "Full resolution set", url: "#" },
      { label: "Instagram", url: "#" }
    ]
  },

  "example-artist": {
    name: "Example Artist",
    event: "Freaky Deaky — Houston, TX",
    date: "Oct 2025",
    gear: "Sony A7III · GM 70-200",
    image: "assets/example-artist.jpg",
    cardNumber: "002",
    rarity: "HOLO RARE",
    story: [
      "Duplicate this entry to make a new card. Swap the image, rewrite the story, change the slug key above it — nothing else needs to change.",
      "The story field types itself out on load, so keep it punchy. Two short paragraphs is the sweet spot."
    ],
    links: [
      { label: "Full resolution set", url: "#" }
    ]
  }

};
