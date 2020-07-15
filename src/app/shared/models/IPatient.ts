/** IRIS User */
export interface IPatient {
    uid: string;

    calendar: string;
    config: IConfig;
    info: IInfo;
    // lastUpdate: string;
    log: string;
    notifications: string; //INotification[];
    status: string;
}

//////////////////////
/// meta interfaces.
//////////////////////
interface ICalendar {
    // time == key
    message: string;
}

export interface IConfig {
    gazeInput: {
        enabled: boolean;
        sensitivity: number;
    };
    gestureInput: {
        enabled: boolean;
    };
    speechInput: {
        enabled: boolean;
    };
    // features: ?;
}

export interface IInfo {
    age: string;
    // diagnosed:string;
    // diagnosis:IDiagnosis;
    // // MCI score etc.
    notes: string;
    sex: string;
}

interface INotification {
    // time == key
    message: string;
}
