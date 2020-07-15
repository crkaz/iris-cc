export class Patient {
    private id: string;
    private when: string;
    private where: string;
    private lastActivity: string;
    private status: string;

    public constructor(pId: string, pWhen: string, pWhere: string, pActivity: string, pStatus: string) {
        this.id = pId;
        this.when = pWhen;
        this.where = pWhere;
        this.lastActivity = pActivity;
        this.status = pStatus;
    }

    public get Id(): string { return this.id; }
    public get When(): string { return this.when; }
    public get Where(): string { return this.where; }
    public get LastActivity(): string { return this.lastActivity; }
    public get Status(): string { return this.status; }
}