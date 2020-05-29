import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class LoginServices {
constructor(
private readonly _httpClient:HttpClient
) {}

metodoget(url: string){
return this._httpClient.get(url);
}
metodopost(url: string ,datos){
    return this._httpClient.post(url,datos)
}
metodoput(url: string,dataAEditar){
    return this._httpClient.put(url,dataAEditar)
}
metododelete(url: string){
    return this._httpClient.delete(url)
}


}