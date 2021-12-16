export class ArraySet extends Set {
    //@ts-ignore
    add(arr) {
        super.add(arr.toString());
    }
    //@ts-ignore
    has(arr) {
        return super.has(arr.toString());
    }
}