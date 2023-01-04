export class Pledge {
    _hex!: string;
}
export class Task {
    id!: number;
    address!: string;
    description!: string;
    pledge!: Pledge;
    created_at!: string;
    type?: string;
    deadline?: string;
}