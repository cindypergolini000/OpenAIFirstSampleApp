export interface DatiUtente {
    nome: string,
    cognome: string,
    password: string,
    stato: string,
    interessiviaggi: boolean,
    interessilibri: boolean,
    interessisocial: boolean,
    titolostudio: string,
    commento: string

  
}



export interface CompletionResponseDTO {
     id : string ,
   object ?: string,
   created : number,
   model : string,
  choices: Choice[] 

}
export interface Usage{
  
    prompt_tokens : number,
    completion_tokens : number,
    total_tokens : number
 
}
export interface Choice{
  
  text: string,
  index?: number,
  logprobs?: number,
  finish_reason?: string

}




export interface CompletionRequest{
    model: string,
    prompt: string,
    max_tokens: number,
   temperature: number,
    suffix?:string,
    logprobs?:number,
    top_p?:number,
    n?:number,
    stream?:boolean,
    echo?:boolean,
    stop?:string

   
}




