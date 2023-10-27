//transfrom unix time stamp to date string
export function toLocalTimeString(unixTime: number): string {
    const date = new Date(unixTime);
    return date.toLocaleString();
}
