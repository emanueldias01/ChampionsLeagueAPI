interface HttpResponse{
    status : number
    body : any
}

export const ok = (body : any):HttpResponse => {
    return {
        status : 200,
        body : body
    }
}

export const notFound = (body : any): HttpResponse => {
    return {
        status : 404,
        body : body
    }
}

export const noContent = (): HttpResponse => {
    return {
        status: 204,
        body: null
    }
}