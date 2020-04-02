export class UserSelection {
    public userSelection: UserChoice[];

    constructor(userChoices: UserChoice[]) {
        this.userSelection = userChoices;
    }
}

export class UserChoice {
    public beer_name: string;
    public preference: number;

    constructor(beerName: string, preference: number) {
        this.beer_name = beerName;
        this.preference = preference;
    }
}