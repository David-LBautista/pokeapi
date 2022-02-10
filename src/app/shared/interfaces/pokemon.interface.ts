export interface IAbilities {
  name: string;
  url: string;
}

export interface IStat {
  base_stat: number;
  effort: number;
  stat: Stat;
}

export interface Stat {
  name: string;
  url: string;
}

export interface ITypes {
  slot: number;
  type: Type;
}

export interface Type {
  name: string;
  url: string;
}
