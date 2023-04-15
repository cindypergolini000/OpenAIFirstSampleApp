import { Injectable } from '@angular/core';
import { CompletionRequest, CompletionResponseDTO} from '../models/completionRequest';
import { DefaultAzureCredential } from "@azure/identity";
import { KeyVaultSecret, SecretClient } from "@azure/keyvault-secrets";

@Injectable({
  providedIn: 'root'
})

// export function login(username:any, password:any) {
//   const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json','charset':'utf-8' },
//       body: JSON.stringify({ 'username':username , 'password':password })
//   };

//   console.log(requestOptions);

//   return fetch(BASE_URL+serverConstants.LOGIN_POST_REQUEST, requestOptions)
//       .then(response => {
//           if (!response.ok) {
//               return Promise.reject(response.statusText);
//           }

//           return response.json();
//       })
//       .then(user => {
//           // login successful if there's a jwt token in the response
//           if (user && user.token) {
//               // store user details and jwt token in local storage to keep user logged in between page refreshes
//               localStorage.setItem('user', JSON.stringify(user));
//           }

//           return user;
//       });
// }




export class UtenteServiceService {
  


 async getSecret():Promise<string>{
  

  const credential:DefaultAzureCredential = new DefaultAzureCredential();

// Build the URL to reach your key vault
const  vaultName:string = "keyvaultCinzia";
const url:string= `https://${vaultName}.vault.azure.net`;

// Lastly, create our secrets client and connect to the service
 const client:SecretClient = new SecretClient(url,credential);
 const latestSecret:KeyVaultSecret= await client.getSecret("secretCinzia");

return  latestSecret.name;
 } 
  
 promptresponses:string[]=[];

 pushResponse(response :string):void{
  if (this.promptresponses.length>10){this.promptresponses.shift();}
  this.promptresponses.push(response);
  
  }



  request:CompletionRequest={
    "model": "text-davinci-003",
  "prompt": "Say this is a test",
  "max_tokens": 7,
  "temperature": 0,
  "top_p": 1,
  "n": 1,
  "stream": false,
  "logprobs": 0,
  "stop": "\n"


  }
  oldrequests:CompletionRequest[]=[]

  
 
  

  constructor() {
    this.request=this.request;
   }
  getOldRequest():CompletionRequest[]{
    return this.oldrequests;
  }

  setRequest(request: CompletionRequest){
    this.request=request;

  }
  // async createUser() {
  //   try {
  //     // 👇️ const response: Response
  //     const response = await fetch('https://reqres.in/api/users', {
  //       method: 'POST',
  //       body: JSON.stringify(this.request),
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //     })
  
  //     if (!response.ok) {
  //       throw new Error(`Error! status: ${response.status}`);
  //     }
  
  //     // 👇️ const result: CreateUserResponse
  //     const result = (await response.json()) as CompletionResponseDTO;
  
  //     console.log('result is: ', JSON.stringify(result, null, 4));
  
  //     return result;
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       console.log('error message: ', error.message);
  //       return error.message;
  //     } else {
  //       console.log('unexpected error: ', error);
  //       return 'An unexpected error occurred';
  //     }
  //   }
  // }
  







}
