export function parseInteger(string?: string): number | undefined {
  if (string === undefined) {
    return undefined
  }

  const integer = parseInt(string, 10)

  return !integer ? undefined : integer
}
