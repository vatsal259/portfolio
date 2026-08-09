export const EASTER_FACTS = [
  'Git stores snapshots, not diffs packfiles compute deltas later purely for storage efficiency.',
  'Spectre showed speculative execution can leak secrets across privilege boundaries with no classic software bug.',
  'Postgres MVCC keeps old row versions so readers don’t block writers on the same row.',
  'TLS 1.3 removed RSA key exchange, so forward secrecy is mandatory rather than optional.',
  'Linux CFS tracks virtual runtime, not simple wall-clock turn-taking, to approximate fairness.',
  'A missing memory barrier can pass every unit test and still corrupt state only on ARM under contention.',
  'NAND flash remaps bad cells in firmware your filesystem often never sees the physical page that died.',
  'CAP is about partitions: if the network splits, you pick consistency or availability, not both.',
  'Unicode’s BOM exists because UTF-16 can’t signal endianness from the code units alone.',
  'DNS TTLs are advisory; busy resolvers routinely clamp or ignore them.',
  'The JVM’s portability is the bytecode hot methods still become CPU-specific machine code via the JIT.',
  'Early Unix networking lore: the best debugger was often still printf, even inside the kernel.',
  'Modern TLC NAND endurance is often a few thousand program/erase cycles per cell, not the old SLC 100k myth.',
  'False sharing can tank a concurrent program when unrelated fields share a cache line and bounce between cores.',
];

export function pickRandomFact() {
  return EASTER_FACTS[Math.floor(Math.random() * EASTER_FACTS.length)];
}
