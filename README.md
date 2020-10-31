<h1 style="text-align: center;"> Puppeteer </h1>
Nesse programa iremos criar um bot com a ferramenta do node.js: Puppeteer. A qual tem diversas funcionalidades, porém utilizaremos apenas a de tirar um screenshot de uma página web e também a de transformar uma página web em pdf. 

<h1 style="text-align: center;"> Objetivo: </h1>

  ### O objetivo desse programa é realizar duas ações: Tirar um screenchot de uma página web e transformar uma página web em formato de pdf através do framework puppeteer.

<h1 style="text-align: center;"> Sobre o framework </h1>

  ### O Puppeteer é uma ferramento usada como bot que ajuda em testes automatizados para web. Ele serve para realizar muito mais que apenas um screenshot ou transformar um página web em pdf, pois também é utilizado em preenchimento automático de formulários e também para criar bots no instagram como dar like automático ou filtrar comentários.

<h1 style="text-align: center;"> Funcionamento </h1>

  ### Nos códigos deixarei os comentários sobre o que faz cada linha, mas para explicar um pouco mais sobre como funciona teoricamente irei detalhar alguns pontos.

**O Puppeteer, como já dito anteriormente, é um framework javascript do software node.js. Para que possamos começar a ultilizá-lo é preciso baixá-lo externamente com o comando:** 
```
npm i puppeteer ou “yarn add puppeteer”
```
  ### Quando você instala o Puppeteer, ele baixa uma versão recente do Chromium. Pois com ele é que você cria uma instância do Navegador, abre páginas e as manipula com a API do Puppeteer.

  ### Com ele instalado podemos começar os procedimentos de testes automatizados.

**É preciso instânciá-lo no node para poder utilizá-lo:**
```
const puppeteer = require('puppeteer');
```

<h1 style="text-align: center;"> Screenshot </h1>

  ### Vamos começar com o screenshot, é um passo simples de apenas capturar um print da tela do navegador em determinada página, para isso temos que criar um função assíncrona que, por baixo dos panos, faz todo esse procedimento. 

  ### Nela teremos que primeiro instânciar o puppeteer.launch(), o qual é um método que abre o browser sem nenhuma aba por enquanto.

```
const browser = await puppeteer.launch();
```

  ### Com o browser aberto precisamos abrir uma nova página que conterá o link da url que queremos o screenshot. Para isso usamos uma instância do browser com uma nova page dada pela seguinte linha de código: 

```
 const page = await browser.newPage();
```

  ### Agora precisamos passar a url da página para que ele possa abrir e em seguida tirar o screenshot(com esse comando ainda não é possível tirar o screenshot): page.goto('url');
```
await page.goto('https://...');
```

**A page.goto navega até a página de destino.**

  ### Dito isso, podemos então realizar o screenshot com o comando: 
```
#await page.screenshot({path: 'example.png'});
```
**O page.sreenshot() é um método que realiza o screenshot da página. O path é o nome que você dará ao arquivo printado.**

  ### Depois desses passos precisamos fechar o browser e para isso utilizamos o comando:
```
#await browser.close();
```
  ### Feito todos esses passos é preciso chamar a função para que tudo isso ocorra. Em poucos minutos isso ocorre como uma grande mágica.

<h1 style="text-align: center;"> PDF </h1>


  ### Com o pdf todo os primeiros comandos são iguais, pois precisamos criar uma instância do browser, abrir um página de visualizãção e passar a url para o mesmo, o que muda é comando é o seguinte comando:
```
#await page.pdf({ path: 'example.pdf', format: 'A4' });
```
**No do screenshot utilizávamos o .screenshot e nesse ultilizamos o .pdf para indicar que queremos transformar a página em um arquivo pdf.**

  ### O path, como já dito anteriormente, é para indicarmos o nome do arquivo. 
  ### Dessa vez temos o formart, que serve para indicar o formato da página. 


<h1 style="text-align: center;"> Utilização </h1>

  ## Você pode utilizar em diversas situações de testes automatizado. Como exclamado anteriormente, ele têm muitas funcionalidades não apenas essas. Fica a vontade da sua criatividade. Muitos o utilizam para testar formulários ou fazer testes no instagram.
  
**Se você for estudante ele o ajudará a encontrar as melhores pesquisas.**

  ### Diversas utilizações que essa grande ferramenta ainda tem, depende do que você esteja precisando, então usufrua bastante dela.
