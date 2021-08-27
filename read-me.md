# Documentação da API da HVEX
### **Para que a API execute sem erros é Estritamente NECESSÁRIO seguir os passos decritos a seguir**
----
## Introdução
Para alguns a API pode funcionar como **Magica** 🧙‍♂️, porem para uma Empresa como a HVEX, é necessario que todo o **TIME de DESENVOLVIMENTO** tenha noção do como Funciona a API e todo o Processos e Requistos estejam Documentados tanto para possiveis Auditorias quanto para o própio entendimento do **TIME**, para que enfrente menos desafios durante o desenvolvimento.

----

## Tecnologias
- Documentação da API com Swagger.
- Integração com  MongoDB.
- Variaveis de Ambiente para configuração da API, pronta para Deploy em diversos Ambientes de Desenvolvimento.
- Utilização de Arquitetura MVC, sendo possivel adaptavel para outra se houver necessidades.
- Preparado para Deploy no Heroku.
  
----

# Rotas da API: 
> ## Rota de Verificação de Login: 
> #### <img src="https://img.shields.io/badge/-POST%20-blue"/>&nbsp; http://localhost:3000/user/verify-login 
> <img src="https://img.shields.io/badge/-Parameters%20-yellow"/>&nbsp;
>> *Essa rota tem como função a verificação do Login do Usuario. Se as credencias de Login forem aceitas, essa rota atualiza o campo "lastAccessDateISO8601", esse campo é atualizado no formato **ISO8601**.*

> ## Rota de Criação de Login: 
> #### <img src="https://img.shields.io/badge/-POST%20-blue"/>&nbsp; http://localhost:3000/user/create
> <img src="https://img.shields.io/badge/-Parameters%20-yellow"/>&nbsp;
>> *Essa rota recebe parâmetros para que seja realizada uma chegagem prévia para verificar para que não haja usuários duplicados.*

> ## Rota de Leitura de todos os Logins: 
> #### <img src="https://img.shields.io/badge/-GET%20-green"/>&nbsp; http://localhost:3000/user/read-all
>> *Essa rota retornar todos os usuarios cadastrados no Sistemas.*

> ## Rota de Leitura de um Login por ID: 
> #### <img src="https://img.shields.io/badge/-GET%20-green"/>&nbsp; http://localhost:3000/user/read/:id
>> *Essa rota retorna os dados do usuario solicitado através do 'id'.*

> ## Rota de Atualização de um Login por ID: 
> #### <img src="https://img.shields.io/badge/-PATCH%20-orange"/>&nbsp; http://localhost:3000/user/update/:id
> <img src="https://img.shields.io/badge/-Parameters%20-yellow"/>&nbsp;
>> *Essa rota Atualiza os dados do usuario solicitado através do 'id', e o parâmetro passado para a rota, será atualizado.*

> ## Rota de Deleta um Login por ID: 
> #### <img src="https://img.shields.io/badge/-DELETE%20-red"/>&nbsp; http://localhost:3000/user/delete/:id
>> *Essa rota Deleta os dados do usuario solicitado através do 'id'.*

> ## Rota de Deleta um Login por ID: 
> #### <img src="https://img.shields.io/badge/-DELETE%20-red"/>&nbsp; http://localhost:3000/user/delete-all
>> *Essa rota Deleta todos os dados do usuarios.*

----

#
## Tech

Dillinger uses a number of open source projects to work properly:

- [VS Code](https://code.visualstudio.com/download) - IDE.
- [node.js](https://nodejs.org/en/) -  JavaScript runtime
- [Express](https://expressjs.com/pt-br/) - Framework web rápido, flexível.
- [MongoDB](https://www.mongodb.com/pt-br) - NoSQL Database
- [Heroku](https://dashboard.heroku.com/) - 
- [Git](https://github.com/) - 


And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd dillinger
npm i
node app
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```

## Plugins

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin           | README                                    |
| ---------------- | ----------------------------------------- |
| Dropbox          | [plugins/dropbox/README.md][PlDb]         |
| GitHub           | [plugins/github/README.md][PlGh]          |
| Google Drive     | [plugins/googledrive/README.md][PlGd]     |
| OneDrive         | [plugins/onedrive/README.md][PlOd]        |
| Medium           | [plugins/medium/README.md][PlMe]          |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |

## Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:

```sh
node app
```

Second Tab:

```sh
gulp watch
```

(optional) Third:

```sh
karma test
```

#### Building for source

For production release:

```sh
gulp build --prod
```

Generating pre-built zip archives for distribution:

```sh
gulp build dist --prod
```

## Docker

Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd dillinger
docker build -t <youruser>/dillinger:${package.json.version} .
```

This will create the dillinger image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart=always --cap-add=SYS_ADMIN --name=dillinger <youruser>/dillinger:${package.json.version}
```

> Note: `--capt-add=SYS-ADMIN` is required for PDF rendering.

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
