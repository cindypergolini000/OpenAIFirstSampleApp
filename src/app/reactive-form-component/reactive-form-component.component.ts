import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import axios from 'axios';
import { CompletionResponseDTO } from '../models/completionRequest';
import { UtenteServiceService } from '../services/completion-request.service';

/*import { DatiUtente } from '../models/dati-utente';*/

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form-component.component.html',
  styleUrls: ['./reactive-form-component.component.css']
})
export class ReactiveFormComponentComponent implements OnInit {
  oldPrompts:string[]=[];
  loginForm:FormGroup;
  completionResponse:CompletionResponseDTO;
  constructor(private utser:  UtenteServiceService) {
    this.loginForm=new FormGroup({
    model:new FormControl("text-davinci-003"),
    maxtokens:new FormControl("20"),  
    temperature:new FormControl("0.1"),
    prompt: new FormControl("What a wonderful day"),
  });
this.completionResponse={
  "id": "cmpl-uqkvlQyYK7bGYrRHQ0eXlWi7",
  "object": "text_completion",
  "created": 1589478378,
  "model": "text-davinci-003",
  "choices": [
    {
      "text": "\n\nThis is indeed a test",
      "index": 0,
      "logprobs": 0,
      "finish_reason": "length"
    }
  ],

}


}

  ngOnInit(): void {
 
    
      this.loginForm.setValue({ 
         model:"text-davinci-003",
      maxtokens:"23",
      temperature:"0.1",
      prompt:"What a wonderful day"
     
     }
      
      );
      //patch value sovrascive soltanto alcuni campi
      this.loginForm.patchValue({ 
       
     maxtokens:"23" }
     
     );
    

  }
  setModel1():void{
    debugger;
    this.loginForm.patchValue({ 
         
      model:'gpt-3.5-turbo-0301'}
      
      );
  
  }
async onSubmit():Promise<void>{
  // Variable to store ID


// Object for examples
const form =  this.loginForm.value;
debugger;
const RAPIDAPI_API_URL='https://api.openai.com/v1/completions';
// Object with RapidAPI authorization headers and Content-Type header


console.log(form);
const bodyy={
  model: form.model,
    prompt  : form.prompt,
    max_tokens  : parseInt(form.maxtokens),
    temperature  : parseInt(form.temperature)
};
debugger;
console.log('This is the request--->',bodyy);
debugger;
// Making a POST request using an axios instance from a connected library
//axios.post(RAPIDAPI_API_URL, form, { headers: RAPIDAPI_REQUEST_HEADERS })
  // Handle a successful response from the server
  fetch(RAPIDAPI_API_URL, {

  method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization':'Bearer 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'
        },
  //make sure to serialize your JSON body
  body: JSON.stringify(bodyy)
}).then(async response => {
  debugger;
          // Getting a data object from response that contains the necessary data from the server
          //https://github.com/cindypergolini000/MyFirstOPENAIproj
          if(response.status>202 &&response.status<600){console.log(response);alert('StatusCode: '+JSON.stringify( response.status))}
          else{const data = await response.json();
         
          console.log('data', data);
          this.completionResponse={
            id:data.id,
            choices: data.choices,
            model:data.model,
            created:data.created
          };
          this.utser.pushResponse(bodyy.prompt)
          this.oldPrompts=this.utser.promptresponses;
          }

          // Save the unique id that the server gives to our object
         
  })
 
  // Catch and print errors if any
  .catch(error => {console.error('Errore sulla fetch post prompt', error);alert(JSON.stringify(error));});
}
setModel(model_:string):void{
  debugger;
       
  this.loginForm.patchValue({ 
  
    model:model_ }
    
    );

}



}
