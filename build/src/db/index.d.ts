declare const db: {
    query: (text: string, params?: any) => Promise<import("pg").QueryResult<any>>;
};
export default db;
