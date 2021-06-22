import express, { request, response } from "express"; //dependecia do express

/*
    GET => BUSCAR INFORMAÇÕES
    POST => Inserir [CRIA] uma Informação
    PUT => Alterar uma informação.
    DELETE => REMOVER DADOS
    PATCH => Alterar uma informação especifica.
*/
//@types/express
const app  =  express();

//Conexão http://localhost:3000;
app.listen(3000, () => console.log("Servidor está funcionando! _/_"));

/*
    REQUEST => ENTRANDO
    REPONSE => SAINDO
*/
app.get("/teste",(request, response)=>
{
    return response.send("Olá NLW");
});

app.post("/teste_post",(request,response) => 
{
    return response.send("Olá NLW POST");
});

