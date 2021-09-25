

# :scroll: Documentação da API da HVEX :scroll:

### **Para que a API execute sem erros, é *ESTRITAMENTE NECESSÁRIO* seguir os passos decritos a seguir**.
---
----

## :round_pushpin: Introdução

Para alguns a API pode funcionar como **Magica** 🧙‍♂️, porem para uma Empresa como a HVEX, é necessario que todo o **TIME de DESENVOLVIMENTO** tenha noção do como Funciona a API e todos os Processos e Requistos estejam Documentados tanto para possiveis Auditorias quanto para o própio entendimento do **TIME**, para que enfrente menos desafios durante o desenvolvimento.

----
----
## :mag_right: Tecnologias

:round_pushpin: Ferramentas e Frameworks Utilizados:

- [VS Code](https://code.visualstudio.com/download) - IDE Utilizada.
- [Express](https://expressjs.com/pt-br/) - Framework web para o desenvolvimento da API. 
- [MongoDB](https://www.mongodb.com/pt-br) - Banco de dados Não Relacional. 
- [node.js](https://nodejs.org/en/) - JavaScript runtime. 
- [Git](https://github.com/) - GitHub para controle de versões.
- [Docker](https://www.docker.com/) - plataforma de virtualização de nível de sistema operacional.

<p align="center">
<img height=64" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" alt="VSCode"/>&nbsp;&nbsp; 
<img height=64" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express"/>&nbsp;&nbsp; 
<img height=64" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB"/>&nbsp;&nbsp;
<img height=64" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="NodeJS"/>&nbsp;&nbsp;
<img height=64" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="Git"/>&nbsp;&nbsp;
<img height=64" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" alt="Docker"/>&nbsp;&nbsp;
</p>

----
----
# :rotating_light: Passos :rotating_light:
## Passo 1:
### Instalações
>
>:pushpin: Para utilizar a API será necessário a instalação de alguns **Softwares** :computer::
>>:round_pushpin: Os links estarão em "[Azul]()", como nessa demonstração. Eles irão lhe redirecionar para as páginas dos Softwares que deverão ser instalados.
>>:round_pushpin: Siga os passos a Seguir para a instalação dos recursos necessários para Executar a API:
>>> 1. Instale o [VS Code](https://code.visualstudio.com/download): **A IDE que será utilizada para o desenvolvimento e Execusão do Container contendo o MongoDB.**
>>> 2. Instale o [Node.JS](https://nodejs.org/en/): **Necessário para o Desenvolvimento da API.**
>>> 3. Instale o [Docker](https://www.docker.com/products/docker-desktop) : **Será utilizado para Iniciar um Container contendo o MongoDB.**
> >> 4. Instale o [Git](https://git-scm.com/downloads) : **Necessário para o controle de versão e integrações e versionamento, além de agilizar o processo de Deploy.**
> - **Obs:** Os procedimentos foram executados em um ambiente **Windows**, caso haja necessidade de execução em outro Sistema Operacional, poderá ocorrer incompatibilidades nos processos descritos.

## Passo 2:
### Visual Studio Code
> :pushpin: Será necessário instalar algumas extenções no VS Code para nos auxiliar no processo de Execussão da API.
> > ---
>> 1. Use o seguinte comando no console para verificar se o VS Code está instalado.
>>```shell 
>> code --version
>>```
>> O retorno do console deverá ser algo parecido com a seguinte exemplo:
>> ```shell
>> 1.59.1
>>3866c3553be8b268c8a7f8c0482c0c0177aa8bfa
>>x64
>>```
> > ---
>> 2. Instale o plugin do [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) e ative-o. Acesse o link no navegador caso o Link anterior não funcione. 
Link: ***vscode:extension/ms-azuretools.vscode-docker*** ,  e aceite o redirecionamento para o VS Code.
> > ---
>> 3. Instale o plugin do [ThundeClient](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) e ative-o. Acesse o link no navegador caso o Link anterior não funcione. 
Link: ***vscode:extension/rangav.vscode-thunder-client*** ,  e aceite o redirecionamento para o VS Code.
> ---

## Passo 3:
### Docker
> :pushpin: Verifique se o Docker está executando correntamente. Caso contrário ocorrerá um erro na execussão da API.
> - Use o seguinte comando no console para verificar se o Docker está instalado.
>```shell 
> docker --version
>```
> - O retorno do console deverá ser algo parecido com a seguinte exemplo:
> ```shell
> Docker version 20.10.8, build 3967b7d
> ```

## Passo 4:
### Git
> :pushpin: Verifique se o Git está executando corretamente. Caso contrário ocorrerá um erro no momento do PULL.
> - Use o seguinte comando no console para verificar se o Git está instalado.
>```shell 
>git --version
>```
> - O retorno do console deverá ser algo parecido com a seguinte exemplo:
> ```shell
> git version 2.30.1.windows.1
> ```
> 
> - Faça login com sua conta do Git se for solicitado utilizando os sequintes comandos:
> ```shell
> git config --global user.name "UserNameGenerico"
> git config --global user.email "seu_email_do_git@example.com"
> ```


## Passo 5:
### Clonado o Projeto
> :pushpin: Agora será necessário Clonar o Projeto do Git.
> - Acesse um Diretório, esse diretório será usado futuramente.
> - Abra o console nesse diretório acessado.
> - Copie o código abaixo, cole no console e execute:
>```shell 
>git clone -b Branch-RH-Final https://github.com/nicolasmmb/hvex-api.git
>```
> - O retorno do console deverá ser algo semelhante com a seguinte exemplo:
> ```shell
> Cloning into 'hvex-api'...
> remote: Enumerating objects: 124, done.
> remote: Counting objects: 100% (124/124), done.
> remote: Compressing objects: 100% (79/79), done.
> remote: Total 124 (delta 45), reused 102 (delta 30), > pack-reused 0
> Receiving objects: 100% (124/124), 161.21 KiB | 4.03 MiB/> s, done.
> Resolving deltas: 100% (45/45), done.
> ```
> - **Obs:** O retorno do console poderá variar de acordo com sua máquina
>  - **Obs:** A Branch que será clonada é uma específica que será pausada quando o desafio solicitado pelo RH for enviado.
> 

## Passo 6:
### Acessando o Projeto
> :pushpin: Certifique os passos anteriores fom executados corretamente.
> - Localize o diretório clonado anteriormente.
> - No console aberto com o caminho de execução referente ao diretório clonado. Exemplo no Windows: ***C:\Users\username\Desktop\hvex-api***
> - Copie e cole o comando abaixo e execute:
>```shell 
>code .
>```
> - Logo em seguida deverá abrir uma janela do VS Code com a pasta do projeto carregado. A imagem a seguir mostra como a tela deverá estar.
> ![](https://raw.githubusercontent.com/nicolasmmb/saved-images/main/hvex/passo-0.png)

## Passo 7:
### Criando o Container com o Docker
> :pushpin: É necessário ter a extenção do [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) instalada no VS Code.
>  1. A localização do arquivo para configuração do Container é: **.\src\config\docker-compose.yml**
>  ---
>  2. Acesse barra lateral no projeto: 
> >![](https://raw.githubusercontent.com/nicolasmmb/saved-images/main/hvex/passo-1.png)
> ---
>  3. Navege até o Diretório mencionado no item **'1'** desse tópico: 
> >![](https://raw.githubusercontent.com/nicolasmmb/saved-images/main/hvex/passo-2.png)
> ---
>  4. Selecione o arquivo **'docker-compose.yml'** e com o botão direto do mouse selecione e espere aparecer o menu com as opções do arquivo: 
> >![](https://raw.githubusercontent.com/nicolasmmb/saved-images/main/hvex/passo-3.png)
> ---
>  5. Procure a opção **'Compose Up'** no menu do arquivo. A imagem a seguir monstra o menu e o Compose Up que deve ser selecionado. 
> >![](https://raw.githubusercontent.com/nicolasmmb/saved-images/main/hvex/passo-4.png)
> ---
>  6. Esse item do tópico exemplifica todo o procedimento a ser seguido. 
> >![](https://github.com/nicolasmmb/saved-images/raw/main/hvex/markdown-passo-a-passo-low.gif)
> ---
> > 7. Espere a execução da configuração
> ---
>  >8. Ao fim da instalação copie e cole o comando a baixo no console para verificar se o container está sendo executado.
> 
> ```shell
>  docker ps -q -f status=running -f name=mongodb_container
> ```
> - O retorno deve ser a indentificação do Container, algo semelhante a isso:
> ```shell
> 8d3b06893655
> ```
> - **Obs:** O retorno do console poderá variar de acordo com sua máquina
> ---
## Passo 8:
### Iniciando a API 
> :pushpin: Siga os passos a seguir para iniciar a API.
>> 1. Abra o projeto com o VS Code
>> ![](https://raw.githubusercontent.com/nicolasmmb/saved-images/main/hvex/passo-1-0.png)
> ---
>> 2. Inicie o Terminal do VS Code.O atalho padrão para abrir o console é: **Crtl + '**, ou acesse na barra superior a opção **'Terminal'** e logo em seguida **'New Terminal'/'Novo Terminal'**.
>>![](https://raw.githubusercontent.com/nicolasmmb/saved-images/main/hvex/passo-1-1.png)
>> ![](https://raw.githubusercontent.com/nicolasmmb/saved-images/main/hvex/passo-1-2.png)
> ---
>> 3. Copie e cole o comando a baixo no console para começar a baixar os modulos do NodeJS:
>```shell
> npm install
>```
>> ![](https://raw.githubusercontent.com/nicolasmmb/saved-images/main/hvex/passo-1-3.png)
>> ![](https://raw.githubusercontent.com/nicolasmmb/saved-images/main/hvex/passo-1-4.png)
> ---
>> 4. Copie e cole o comando a baixo no console para iniciar a API:
>```shell
> npm start
>```
>> ![](https://raw.githubusercontent.com/nicolasmmb/saved-images/main/hvex/passo-1-5.png)
>> ![](https://raw.githubusercontent.com/nicolasmmb/saved-images/main/hvex/passo-1-6.png) 
> ---

## Passo 9:
### Testes da API
> :pushpin: Para realizar os testes nas rotas, acesse o endereço fornecido no terminal.
>>  ![](https://raw.githubusercontent.com/nicolasmmb/saved-images/main/hvex/passo-1-7.png) 
> 1. Os testes podem ser realizados direto na documentação da API já que foi utilizado o Swagger
>>  ![](https://raw.githubusercontent.com/nicolasmmb/saved-images/main/hvex/passo-1-8.png) 
> ---
## Passo 10:
### Finalizando
> :pushpin: Se todos os passos anteriores foram seguidos corretamente, a API deve estar em execução nesse momento.
>> - O tópico [Rotas da API](#/Rotas-da-API) lhe dará uma breve descrição do que cada rota e o metodo que deve ser utilizado para realizar as consultas.

----
----

# Rotas da API:
## Rota da Documentação da API:

> #### <img  src="https://img.shields.io/badge/-HTTP%20-gray"/>&nbsp; http://localhost:3000/documentation
> <img  src="https://img.shields.io/badge/-Documentation%20-yellow"/>&nbsp;
>> *Essa rota tem como função de documentar as funcionalidades e realizar testes.*
## Rota de Verificação de Login:
> #### <img  src="https://img.shields.io/badge/-POST%20-blue"/>&nbsp; http://localhost:3000/user/verify-login
> <img  src="https://img.shields.io/badge/-Parameters%20-yellow"/>&nbsp;
>> *Essa rota tem como função a verificação do Login do Usuario. Se as credencias de Login forem aceitas, essa rota atualiza o campo "lastAccessDateISO8601", esse campo é atualizado no formato **ISO8601**.*
## Rota de Criação de Login:
> #### <img  src="https://img.shields.io/badge/-POST%20-blue"/>&nbsp; http://localhost:3000/user/create
> <img  src="https://img.shields.io/badge/-Parameters%20-yellow"/>&nbsp;
>> *Essa rota recebe parâmetros para que seja realizada uma chegagem prévia para verificar para que não haja usuários duplicados.*
## Rota de Leitura de todos os Logins:
> #### <img  src="https://img.shields.io/badge/-GET%20-green"/>&nbsp; http://localhost:3000/user/read-all
>> *Essa rota retornar todos os usuarios cadastrados no Sistemas.*
## Rota de Leitura de um Login por ID:
> #### <img  src="https://img.shields.io/badge/-GET%20-green"/>&nbsp; http://localhost:3000/user/read/:id
>> *Essa rota retorna os dados do usuario solicitado através do 'id'.*
## Rota de Atualização de um Login por ID:
> #### <img  src="https://img.shields.io/badge/-PATCH%20-orange"/>&nbsp; http://localhost:3000/user/update/:id
> <img  src="https://img.shields.io/badge/-Parameters%20-yellow"/>&nbsp;
>> *Essa rota Atualiza os dados do usuario solicitado através do 'id', e o parâmetro passado para a rota, será atualizado.*
## Rota de Deleta um Login por ID:
> #### <img  src="https://img.shields.io/badge/-DELETE%20-red"/>&nbsp; http://localhost:3000/user/delete/:id
>> *Essa rota Deleta os dados do usuario solicitado através do 'id'.*
## Rota de Deleta um Login por ID:
> #### <img  src="https://img.shields.io/badge/-DELETE%20-red"/>&nbsp; http://localhost:3000/user/delete-all
>> *Essa rota Deleta todos os dados do usuarios.*
----