const blubb = "2";

export class Test {

    constructor(private zahl: number) {

        console.log('Hallo Welt! 😎', this.zahl);
    }

    test() {
        return
        'test'; // unreachable code
    }
}