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

  "max-styler": {
    name: "Max Styler",
    event: "Wicked Oaks Festival — Austin, TX",
    date: "2025",
    gear: "Sony α6300 · Tameron 35-150",
    image: "assets/max-styler.jpg",
    cardNumber: "001/010",
    rarity: "HOLO RARE",
    story: [
      "It was pouring rain this day and this was my first big festival. I remember being so worried about my camera or the rented lens getting soaked. I was covered in mud and remember thinking myself I look crazy on stage plastered in mud but I had to get the shots. This was also the first photo a big artist that posted my photo, I remember sitting at my day job with my mind blown seeing it on his page.",
      "Printed as a one-of-ten holo, cold-stamped, mailed to your team by hand. If it caught your eye, please see my full portfolio."
    ],
    links: [
      { label: "Learn more about me", url: "tomwantsajobmusic.com" },
      { label: "Instagram", url: "instagram.com/thomasbrown802" }
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
