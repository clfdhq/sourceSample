import { DataSample } from "./demo.interfaces";


export const DATA_SAMPLES: DataSample[] =

    [...Array.from({ length: 12 }, (_, i) => i)].map(i => (
        {
            id: `id34234${i}`,
            name: `Demo-${i}`,
        }
    ));

