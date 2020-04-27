var Reader= require("./Reader");
var Processor= require("./Processor");
var Table= require("./Table");
var HtmlParser= require("./HtmlParser");
var Writer= require("./Writer");
var PDFWriter= require("./PDFWriter");
var leitor= new Reader();
var escritor= new Writer();
async function main(){
    var dados= await leitor.read("./users.csv");

    var dadosProcessados= Processor.process(dados);
    
    var usuarios= new Table(dadosProcessados);
    
    var html= await HtmlParser.Parse(usuarios);
    
    escritor.write(Date.now() + ".html", html);
    PDFWriter.writePDF(Date.now() + ".PDF", html);

}

main();
