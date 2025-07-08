export async function ProcessServerData(data: Response): Promise<Response> {
    if(!data.ok){
        throw new Error(`Fetching error ${data.text}`);
    }

    return data;
}