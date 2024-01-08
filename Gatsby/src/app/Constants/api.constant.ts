import { HttpHeaders } from "@angular/common/http";

export const apicommon = {
    apiurl: 'https://api.countrystatecity.in/v1',

    // httpheaders is used for authenticate the request via api to backend and verify then get response
    headers: new HttpHeaders({
        'Content-type': 'application/json',
        'X-CSCAPI-KEY': 'ano4bjJQZklwSE1sTzhNMXhqYk4yVWRKbDRyVEZZY2tRSVVFTThrMA=='
    }),

    userapiurl: 'https://localhost:7039/api/UserManagement'

}