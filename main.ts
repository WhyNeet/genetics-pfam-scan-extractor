export async function readInputs(inputDir: string) {
  const inputs = [];

  for await (const entry of Deno.readDir(inputDir)) {
    if (!entry.isFile) continue;

    inputs.push(entry.name);
  }

  return inputs;
}

export function processContents(input: string): {
  unique: number;
  score: { min: number; avg: number; max: number };
} {
  const lines = input
    .split("\n")
    .filter((line) => !line.startsWith("#") && line.length);

  const allProteins = lines.map((line) => line.substring(0, 14));
  const uniqueProteins = new Set(allProteins);

  const scores = lines
    .map((line) =>
      line
        .split(" ")
        .filter((line) => line.length)
        .at(-4)
    )
    .map(Number);

  const min = scores.reduce((acc, val) => (val < acc ? val : acc), scores[0]);
  const avg = scores.reduce((acc, val) => acc + val, 0) / scores.length;
  const max = scores.reduce((acc, val) => (val > acc ? val : acc), scores[0]);

  return {
    unique: uniqueProteins.size,
    score: {
      min,
      avg,
      max,
    },
  };
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const inputDir = Deno.args[0];

  const inputs = await readInputs(inputDir);
  const contents = inputs
    .map((name) => `${inputDir}/${name}`)
    .map((path) => ({ name: path, content: Deno.readTextFileSync(path) }));

  for (const { name, content } of contents) {
    const { score, unique } = processContents(content);

    console.log(
      `\n%cfile: %c${name}`,
      "color: gray",
      "color: pink; font-weight: bold"
    );
    console.log(
      `%cunique proteins: %c${unique}`,
      "color: gray",
      "color: yellow; font-weight: bold"
    );
    console.log(
      `%cmin: %c${score.min}%c; avg: %c${score.avg}%c; max: %c${score.max}`,
      "color: gray",
      "color: yellow; font-weight: bold",
      "color: gray",
      "color: yellow; font-weight: bold",
      "color: gray",
      "color: yellow; font-weight: bold"
    );
  }
}
