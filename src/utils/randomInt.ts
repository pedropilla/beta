export default function randomInt(min: number, max: number) { // min and max included
    return Math.floor(min + Math.random() * (max + 1 - min));
}
