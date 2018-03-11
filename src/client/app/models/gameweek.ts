export class Gameweek {
  id: number;
  name: string;
  deadline_time: Date;
  finished: boolean;
  is_previous: boolean;
  is_current: boolean;
  is_next: boolean;

  static fromJSON(obj: any): Gameweek {
    return Object.assign(Object.create(Gameweek.prototype), obj, {});
  }
}
