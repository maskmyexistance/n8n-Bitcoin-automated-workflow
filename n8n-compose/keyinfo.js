const body = $input.first().json.body;

const matches = [...body.matchAll(
  /<td.*?>(.*?)<\/td>\s*<td.*?>(.*?)<\/td>/gs
)];

const result = {};

for (const match of matches) {

  const key = match[1]
    .replace(/<[^>]*>/g, '')
    .trim();

  const value = match[2]
    .replace(/<[^>]*>/g, '')
    .trim();

  result[key] = value;
}

return [
  {
    json: result
  }
];