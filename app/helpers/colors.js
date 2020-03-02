module.exports = {
  "Section": {
    1: "#e5d597",
    2: "#e0b546",
    3: "#c38842",
    4: "#c7e64e",
    5: "#2d0707",
    6: "#c375af",
    7: "#d8aac1",
    8: "#9aca89",
    9: "#942118",
    10: "#d7d3c9",
    11: "#29541f",
    12: "#589f39",
    13: "#b7602c",
    14: "#642a6c",
    15: "#522411",
    16: "#51abd7",
    17: "#9cc6d1",
    18: "#902d5b",
    19: "#9bad91",
    20: "#757677",
    21: "#847290",
    22: "red"
  },

  "Flow": {
    1: "#4495bc", // Blue (exports)
    2: "#942217" // Red (imports)
  },

  "Trade Flow": {
    1: "#4495bc", // Blue (exports)
    2: "#942217" // Red (imports)
  },

  "Continent": {
    eu: "#642a6c", // Europe (purple)
    as: "#a92c20", // Asia (red)
    sa: "#3d8446", // South America (green)
    af: "#e0b546", // Africa (yellow)
    oc: "#c6732e", // Oceania (orange)
    na: "#0c1b87", // North America (blue)
    ac: "#1e040a", // Antarctic (black)
    xx: "#878384" // no continent (gray)
  },

  "Parent Service": {
    1: "#82065c", // Transportation
    2: "#e2ad60", // Travel
    3: "#842f26", // Communications services
    4: "#8c8341", // Construction services
    5: "#3a5a77", // Insurance services
    6: "#59457f", // Financial services
    7: "#51753a", // Computer and information services
    8: "#4badaf", // Royalties and license fees
    9: "#b74f77", // Other business services
    10: "#916a3c", // Personal, cultural, and recreational services
    11: "#267175", // Government services, n.i.e.
    12: "#939e9e" // other
  },

  "CPC Section": {
    A: "#9A3260", // Human Necessities
    B: "#ED6560", // Performing Operations; Transporting
    C: "#F19462", // Chemistry; Metallurgy
    D: "#F9D79B", // Textiles; Paper
    E: "#DE9489", // Fixed Constructions
    F: "#5e8566", // Mechanical Engineering; Lighting; Heating; Weapons; Blasting
    G: "#6F7B93", // Physics
    H: "#4F7993", // Electricity
    Y: "#8F4F5A"  // General Tagging Of New Technological Developments...
  },

  "colorGrey": "#ccc",
  // "viridis": ["#440154", "#440256", "#450457", "#450559", "#46075a", "#46085c", "#460a5d", "#460b5e", "#470d60", "#470e61", "#471063", "#471164", "#471365", "#481467", "#481668", "#481769", "#48186a", "#481a6c", "#481b6d", "#481c6e", "#481d6f", "#481f70", "#482071", "#482173", "#482374", "#482475", "#482576", "#482677", "#482878", "#482979", "#472a7a", "#472c7a", "#472d7b", "#472e7c", "#472f7d", "#46307e", "#46327e", "#46337f", "#463480", "#453581", "#453781", "#453882", "#443983", "#443a83", "#443b84", "#433d84", "#433e85", "#423f85", "#424086", "#424186", "#414287", "#414487", "#404588", "#404688", "#3f4788", "#3f4889", "#3e4989", "#3e4a89", "#3e4c8a", "#3d4d8a", "#3d4e8a", "#3c4f8a", "#3c508b", "#3b518b", "#3b528b", "#3a538b", "#3a548c", "#39558c", "#39568c", "#38588c", "#38598c", "#375a8c", "#375b8d", "#365c8d", "#365d8d", "#355e8d", "#355f8d", "#34608d", "#34618d", "#33628d", "#33638d", "#32648e", "#32658e", "#31668e", "#31678e", "#31688e", "#30698e", "#306a8e", "#2f6b8e", "#2f6c8e", "#2e6d8e", "#2e6e8e", "#2e6f8e", "#2d708e", "#2d718e", "#2c718e", "#2c728e", "#2c738e", "#2b748e", "#2b758e", "#2a768e", "#2a778e", "#2a788e", "#29798e", "#297a8e", "#297b8e", "#287c8e", "#287d8e", "#277e8e", "#277f8e", "#27808e", "#26818e", "#26828e", "#26828e", "#25838e", "#25848e", "#25858e", "#24868e", "#24878e", "#23888e", "#23898e", "#238a8d", "#228b8d", "#228c8d", "#228d8d", "#218e8d", "#218f8d", "#21908d", "#21918c", "#20928c", "#20928c", "#20938c", "#1f948c", "#1f958b", "#1f968b", "#1f978b", "#1f988b", "#1f998a", "#1f9a8a", "#1e9b8a", "#1e9c89", "#1e9d89", "#1f9e89", "#1f9f88", "#1fa088", "#1fa188", "#1fa187", "#1fa287", "#20a386", "#20a486", "#21a585", "#21a685", "#22a785", "#22a884", "#23a983", "#24aa83", "#25ab82", "#25ac82", "#26ad81", "#27ad81", "#28ae80", "#29af7f", "#2ab07f", "#2cb17e", "#2db27d", "#2eb37c", "#2fb47c", "#31b57b", "#32b67a", "#34b679", "#35b779", "#37b878", "#38b977", "#3aba76", "#3bbb75", "#3dbc74", "#3fbc73", "#40bd72", "#42be71", "#44bf70", "#46c06f", "#48c16e", "#4ac16d", "#4cc26c", "#4ec36b", "#50c46a", "#52c569", "#54c568", "#56c667", "#58c765", "#5ac864", "#5cc863", "#5ec962", "#60ca60", "#63cb5f", "#65cb5e", "#67cc5c", "#69cd5b", "#6ccd5a", "#6ece58", "#70cf57", "#73d056", "#75d054", "#77d153", "#7ad151", "#7cd250", "#7fd34e", "#81d34d", "#84d44b", "#86d549", "#89d548", "#8bd646", "#8ed645", "#90d743", "#93d741", "#95d840", "#98d83e", "#9bd93c", "#9dd93b", "#a0da39", "#a2da37", "#a5db36", "#a8db34", "#aadc32", "#addc30", "#b0dd2f", "#b2dd2d", "#b5de2b", "#b8de29", "#bade28", "#bddf26", "#c0df25", "#c2df23", "#c5e021", "#c8e020", "#cae11f", "#cde11d", "#d0e11c", "#d2e21b", "#d5e21a", "#d8e219", "#dae319", "#dde318", "#dfe318", "#e2e418", "#e5e419", "#e7e419", "#eae51a", "#ece51b", "#efe51c", "#f1e51d", "#f4e61e", "#f6e620", "#f8e621", "#fbe723", "#fde725"],
  // "viridis": ["#440154", "#443a83", "#30698e", "#20928c", "#38b977", "#fde725"]
  "viridis": ["#364658", "#3C71A6", "#20928c", "#38b977", "#fde725"]
};
