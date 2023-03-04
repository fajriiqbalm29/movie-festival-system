export function sendResponse(result:any, code:number, message: string){
    let response = {
        'code': code,
        'success': true,
        'messages': message,
        'data' : result 
    }
    return response
}