const REVIEW =
  '4 stars. Means well, types fast, but keeps asking me to just fix it real quick at 11 PM on a Friday.';

const flags = new Set(process.argv.slice(2).filter((arg) => arg.startsWith('--')));

function hasFlag(flag: string): boolean {
  return flags.has(flag);
}

function renderLine(shout: boolean): string {
  return shout ? REVIEW.toUpperCase() : REVIEW;
}

function showHelp(): void {
  process.stderr.write('Usage: node main.ts [--shout] [--help]\n');
}

function main(): void {
  if (hasFlag('--help')) {
    showHelp();
    process.exit(0);
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
