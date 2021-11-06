// Interfaces
interface Rect {
    readonly id: string;
    color?: string;
    size: {
        width: number;
        height: number;
    }
}

const rect1: Rect = {
    id: '12345',
    size: {
        height: 30,
        width: 20
    },
    color: '#ccc',
};

const rect2: Rect = {
    id: "2134",
    size: {
        height: 10,
        width: 5
    }
};
rect2.color = 'black';

// assign type
const rect3 = {} as Rect;
// alternative assing
const rect4 = <Rect>{};

// ==============
interface RectWithArea extends Rect {
    getArea: () => number;
}

const rect5: RectWithArea = {
    color: "",
    getArea(): number {
        return this.size.width * this.size.height;
    },
    id: "34",
    size: {height: 20, width: 20},
};

// ==============
interface IClock {
    time: Date;
    setTime(date: Date): void;
}

class Clock implements IClock {
    time: Date;

    setTime(date: Date): void {
        this.time = date;
    }
}

// =============
// dynamic
interface Styles {
    [key: string]: string;
}
const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px',
};
