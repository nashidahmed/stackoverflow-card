// Store the icons as strings just as in
// <https://github.com/anuraghazra/github-readme-stats/blob/master/src/common/icons.js>

// Icons are from <https://stackoverflow.design/product/resources/icons/>
export const coinsMono = (size) =>
  `<svg viewBox="0 0 18 18" version="1.1" width="${size}" height="${size}"><path d=\"M17 6.29c0-.29-.2-.41-.36-.29a6.15 6.15 0 01-6.28.01c-.16-.12-.36.03-.36.29v1.07C10 8.14 11.5 9 13.5 9S17 8.14 17 7.37V6.29zm.03 4c0-.29-.2-.41-.36-.29a6.26 6.26 0 01-6.31-.02c-.16-.12-.36.04-.36.29v1.07c0 .77 1.53 1.66 3.53 1.66 2 0 3.5-.87 3.5-1.64v-1.07zM16.67 14c.16-.11.36 0 .36.29v1.07c0 .77-1.5 1.64-3.5 1.64S10 16.15 10 15.38v-1.07c0-.25.2-.4.36-.29a6.1 6.1 0 006.31-.02zM8 14.29c0-.29-.2-.4-.36-.29a6.06 6.06 0 01-6.28.02c-.16-.11-.36.04-.36.29v1.07C1 16.15 2.5 17 4.5 17S8 16.15 8 15.36v-1.07z\"/><path d=\"M13.49 1.15c-2 0-3.49.98-3.49 1.85 0 .84 1.5 1.84 3.5 1.84S17 3.84 17 3c0-.87-1.51-1.85-3.51-1.85zm-9 8.01c-2 0-3.49.97-3.49 1.84 0 .87 1.47 1.87 3.47 1.87S8 11.87 8 11c0-.87-1.51-1.84-3.51-1.84z\"/></svg>`;

export const reputation = (size) =>
  `<svg aria-hidden=\"true\" class=\"svg-icon iconReputation\" width=\"${size}\" height=\"${size}\" viewBox=\"0 0 18 18\"><path d=\"M12.1 2.55A1 1 0 0113 2h3.5a1 1 0 110 2h-2.88l-1.73 3.45A1 1 0 0111 8H6.17l-3.25 7.88a1 1 0 11-1.84-.76l3.5-8.5A1 1 0 015.5 6h4.88l1.73-3.45z\"/><path d=\"M1 3a1 1 0 011-1h6a1 1 0 110 2H2a1 1 0 01-1-1zm0 4a1 1 0 112 0 1 1 0 0 1-2 0zm14-1a1 1 0 100 2h1a1 1 0 100-2h-1zm-8 5a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1zm-1 3a1 1 0 100 2h10a1 1 0 100-2H6z\" opacity=\".2\"/></svg>`;

export const achievementsSm = (size) =>
  `<svg aria-hidden=\"true\" class=\"svg-icon iconAchievementsSm\" width=\"${size}\" height=\"${size}\" viewBox=\"0 0 14 14\"><path d=\"M11 2V1H3v1H0v3c0 1.6 1.4 3 3 3 0 0 .5 2 3 2v1H4s-1 1.5-1 2h8c0-.4-1-2-1-2H8v-1c2.5 0 3-2 3-2 1.6-.2 3-1.4 3-3V2h-3zM3 6c-.5 0-1-.5-1-1V4h1v2zm9-1c0 .5-.5 1-1 1V4h1v1zM7 7a2 2 0 110-4 2 2 0 0 1 0 4z\"/></svg>`;

export const medal = (size) =>
  `<svg aria-hidden=\"true\" class=\"svg-icon iconMedal\" width=\"${size}\" height=\"${size}\" viewBox=\"0 0 18 18\"><path d=\"M9 17c-2.2 0-4-1.57-4-3.5S6.8 10 9 10s4 1.57 4 3.5S11.2 17 9 17zm0-1.9c1.21 0 2.1-.78 2.1-1.6 0-.82-.89-1.6-2.1-1.6s-2.1.78-2.1 1.6c0 .82.89 1.6 2.1 1.6z\"/><path d=\"M6.9 9.42a5.53 5.53 0 013.5-.24L4.5 1H1.47a.25.25 0 00-.2.39L6.9 9.42zm2.88-3.26L11.6 8.7h.01l5.11-7.3a.25.25 0 00-.2-.4H13.5L9.78 6.16z\" opacity=\".4\" /></svg>`;

export function logo(color, height) {
  const cols =
    color === "default"
      ? ["#BCBBBB", "#F48024", "var(--black-800)"]
      : [color, color, color];

  return `<svg aria-hidden=\"true\" class=\"svg-icon iconLogo\" width=\"146\" height=\"${height}\" viewBox=\"0 0 146 30\"><path d=\"M21 27v-8h3v11H0V19h3v8h18z\" fill=\"${cols[0]}\"/><path d=\"m5.4 19.1 13.56 1.96.17-2.38-13.26-2.55-.47 2.97zm1.8-6.8 12 5.6 1.1-2.4-12-5.6-1.1 2.4zm3.4-5.9 10.2 8.5 1.7-2-10.2-8.5-1.7 2zM17.1.2 15 1.8l7.9 10.6 2.1-1.6L17.1.2zM5 25h14v-3H5v3z\" fill=\"${cols[1]}\"/><path d=\"m33.9 18.9-1.62-.2c-1.25-.09-1.82-.57-1.82-1.53 0-1.05.76-1.73 2.3-1.73 1.05 0 2.01.3 2.68.77l.96-.96a5.67 5.67 0 00-3.64-1.05c-2.2 0-3.74 1.15-3.74 2.97 0 1.73 1.05 2.6 3.07 2.78l1.72.2c1.15.1 1.73.57 1.73 1.53 0 1.25-1.06 1.82-2.69 1.82-1.24 0-2.4-.29-3.16-1.15l-.96.96c1.15 1.06 2.5 1.44 4.22 1.44 2.5 0 4.12-1.15 4.12-3.07-.19-1.92-1.43-2.6-3.16-2.78zm12.77-4.6c-1.63 0-2.69.28-3.55 1.43l.96.96c.57-.86 1.24-1.15 2.59-1.15 1.82 0 2.59.77 2.59 2.2v.97h-3.07c-2.3 0-3.55 1.15-3.55 2.97 0 .77.29 1.53.77 2.11.67.67 1.44.96 2.87.96 1.35 0 2.11-.29 2.98-1.06v.96h1.53v-6.9c-.1-2.3-1.44-3.46-4.12-3.46zm2.59 6.7c0 .87-.2 1.45-.48 1.73-.67.58-1.44.68-2.3.68-1.63 0-2.3-.58-2.3-1.73s.76-1.82 2.3-1.82h2.87l-.1 1.15zm7.29-5.36c.96 0 1.53.28 2.3 1.15l.96-.96c-1.06-1.15-1.92-1.54-3.36-1.54-2.59 0-4.5 1.73-4.5 5.28 0 3.45 1.91 5.27 4.5 5.27 1.44 0 2.3-.38 3.36-1.53l-1.06-.96c-.76.86-1.34 1.15-2.3 1.15-.96 0-1.82-.38-2.4-1.15-.48-.67-.67-1.44-.67-2.78 0-1.25.2-2.11.67-2.78a3.23 3.23 0 012.5-1.15zm12.85-1.25h-1.82l-4.6 4.5V9.8h-1.54v14.77h1.54v-3.74L64.8 19l3.45 5.57h1.82l-4.22-6.62 3.55-3.55zm7-.29c-1.53 0-2.58.58-3.26 1.34-.96.96-1.24 2.21-1.24 4.13s.28 3.16 1.24 4.12a4.5 4.5 0 003.27 1.35c1.53 0 2.68-.58 3.26-1.35.96-.96 1.24-2.2 1.24-4.12s-.28-3.17-1.24-4.13c-.58-.76-1.63-1.34-3.26-1.34zm1.25 7.96c-.29.3-.67.48-1.24.48-.58 0-.96-.19-1.25-.48-.58-.57-.58-1.53-.58-2.59 0-1.15.1-2.01.58-2.59a1.7 1.7 0 011.25-.48c.57 0 .95.2 1.24.48.58.58.58 1.44.58 2.6.1 1.14 0 2.1-.58 2.58zm10.36-7.86-2.1 6.62-2.21-6.62h-2.8l3.94 10.64h2.1L90.9 14.2h-2.88zm7.3-.1c-2.79 0-4.61 1.92-4.61 5.47 0 4.32 2.4 5.47 4.9 5.47 1.91 0 2.96-.58 4.02-1.63l-1.63-1.54c-.67.67-1.25.96-2.4.96-1.53 0-2.3-.96-2.3-2.4h6.62v-1.15c0-3.07-1.63-5.18-4.6-5.18zm-2.02 4.41c0-.48.1-.76.29-1.15.28-.67.86-1.15 1.82-1.15.86 0 1.53.48 1.82 1.15.2.39.2.67.29 1.15h-4.22zm10.55-3.26V14.2h-2.59v10.64h2.69v-6.42c0-1.35.86-1.92 1.72-1.92.67 0 .96.2 1.44.67l2.02-2.01c-.77-.77-1.44-.96-2.5-.96-1.24-.1-2.2.38-2.78 1.05zm5.39-2.2v11.8h2.69V16.4h1.91v-2h-1.91v-1.15c0-.58.28-.96.96-.96h1.05v-2.2h-1.53c-2.21 0-3.17 1.53-3.17 2.97zm16.2 1.05c-1.54 0-2.6.58-3.27 1.34-.96.96-1.24 2.21-1.24 4.13s.28 3.16 1.24 4.12a4.5 4.5 0 003.27 1.35c1.53 0 2.68-.58 3.26-1.35.96-.96 1.24-2.2 1.24-4.12s-.28-3.17-1.24-4.13c-.58-.76-1.73-1.34-3.27-1.34zm1.24 7.96c-.29.3-.67.48-1.25.48-.57 0-.95-.19-1.24-.48-.58-.57-.58-1.53-.58-2.59 0-1.15.1-2.01.58-2.59.28-.28.67-.48 1.24-.48.58 0 .96.2 1.25.48.58.58.58 1.44.58 2.6 0 1.14 0 2.1-.58 2.58zm15.83-7.86-1.73 6.62-2.2-6.62h-1.92l-2.2 6.62-1.73-6.62h-2.79l3.26 10.64h2.21l2.2-6.71 2.21 6.71h2.21l3.26-10.64h-2.78zm-24.57 7.38V9.98h-2.68v11.8c0 1.53.96 3.06 3.07 3.06h1.53v-2.2h-.96c-.67 0-.96-.39-.96-1.06zm-76.92-5.56 1.34-1.34h-2.88v-3.36h-1.53v10.65c0 1.53.86 2.78 2.59 2.78h1.05V23.5h-.76c-.96 0-1.44-.57-1.44-1.53v-5.85l1.63-.1z\" fill=\"${cols[2]}\"/></svg>`;
}
