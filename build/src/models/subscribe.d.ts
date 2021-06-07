declare class SubscribeModel {
    private _email;
    constructor(newEmail: string);
    createOne(): Promise<{
        record: any;
        count: any;
    }>;
}
export { SubscribeModel };
