export interface Weather {
        map(arg0: (resp: any) => any): any;
        message: string;
        cod:     string;
        count:   number;
        list:    List[];
    }
    
    export interface List {
       
    }
    
    export interface Clouds {
        all: number;
    }
    
    export interface Coord {
        lat: number;
        lon: number;
    }
    
    export interface Main {
        temp:     number;
        pressure: number;
        humidity: number;
        temp_min: number;
        temp_max: number;
    }
    
    export interface Sys {
        country: string;
    }
    
    export interface WeatherElement {
        id:          number;
        main:        string;
        description: string;
        icon:        string;
    }
    
    export interface Wind {
        speed: number;
        deg:   number;
        gust:  number;
    }
    