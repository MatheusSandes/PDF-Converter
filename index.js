const fs = require("fs");
/*fs.readFile("./bla.bla",{encoding: 'utf-8'}, (erro, dados)=>{
    if(erro){
        console.log("ocoreu uma falha");
    }else{
        console.log(dados);
    }
});*/

/*fs.writeFile("./bla.bla", "bllaa novo bla", (err)=>{
    if(err){
        console.log("Erro")
    }
});*/

function modificarUsuario(nome, curso, categoria){
    fs.readFile("./usuario.json",{encoding: 'utf-8'}, (erro, dados)=>{
        if(erro){
            console.log("erro");
        }else{
            var conteudo= JSON.parse(dados);
            conteudo.nome=nome;
            conteudo.curso=curso;
            conteudo.categoria=categoria;
            fs.writeFile("./usuario.json", JSON.stringify(conteudo), (erro)=>{
                if(erro){
                    console.log("Um erro aconteceu");
                }
                console.log(conteudo);
            })
            
        }
    
    })
}
modificarUsuario("bla", "bla", "bla");