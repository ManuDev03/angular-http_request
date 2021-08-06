import { HttpInterceptor,HttpRequest,HttpHandler } from '@angular/common/http'

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req:HttpRequest<any>,next:HttpHandler){
        // if(req.body) conditions 
        console.log("Request is on the way")
        console.log(req.url)
        const modifiedRequest = req.clone({
            headers: req.headers.append('Auth','xyz')
        })
        return next.handle(modifiedRequest)
    }
}