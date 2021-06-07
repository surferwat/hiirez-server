declare const SubscribeService: {
    new (): {};
    createOneSubscribe(email: string): Promise<any>;
};
export default SubscribeService;
