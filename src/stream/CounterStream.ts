import { BehaviorSubject } from "rxjs";
import { Counter } from "../model/Counter";
import { useEffect, useState } from "react";

const initialCounter = new Counter(0);
const counterStream$ = new BehaviorSubject<Counter>(initialCounter);
console.log("initialize counter stream");

export function useCounterStream() {
    const [data, setData] = useState(initialCounter);

    useEffect(() => {
        const subscription = counterStream$.asObservable().subscribe(data => setData(data));
        return () => subscription.unsubscribe();
    }, []);

    return data;
}

export function incrementCounter() {
    counterStream$.next(new Counter(counterStream$.value.value + 1));
}

export function decrementCounter() {
    counterStream$.next(new Counter(counterStream$.value.value - 1));
}
