interface Household {
    id: number;
    name: string;
    city: string;
    postalCode: string;
    street: string;
    residents?: Resident[] | undefined;
}