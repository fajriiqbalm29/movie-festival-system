declare namespace API {
   interface ResponseDataBody<T>{
       status : string
       messages : string
       data : T
   }
}