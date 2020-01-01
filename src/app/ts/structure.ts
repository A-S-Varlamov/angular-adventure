export class Structure {

  constructor(
    public type: string, public name: string, public classImage: string,
    public res: string | boolean, public count?: number, public health?: number,
    public worker?: number
  ) {
  }
}
