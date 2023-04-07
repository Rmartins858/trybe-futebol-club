# Projeto Avaliativo do Módulo de Backend - Trybe

## Trybe Futebol Clube

Este projeto teve como objetivo desenvolver uma API na arquitetura MSC utilizando princípios SOLID com TypeScript e OOP, para fornecer informações sobre partidas e classificações de futebol para um frontend React.

## Funcionalidades
A API foi responsável por:

* Criar e manipular um banco de dados MySQL para armazenar todos os dados;
* Autenticar usuários cadastrados através do login;
* Listar clubes cadastrados;
* Listar partidas em andamento e partidas finalizadas;
* Adicionar partidas em andamento;
* Atualizar o placar das partidas em andamento;
* Finalizar partidas;
* Gerar leaderboards ranqueadas e ordenadas baseadas no desempenho dos clubes nas * partidas cadastradas, utilizando 5 critérios avaliativos e separando em 3 tipos de classificação (geral, mandante e visitante);
* Orquestrar tudo isso (banco de dados, backend e frontend) em containers Docker e executá-los de forma conjunta através de uma orquestração com Docker-Compose.
## Testes
Para garantir a qualidade do projeto, foi desenvolvida uma cobertura de testes de 100% em todas as camadas utilizando Mocha, Chai e Sinon.

## Tecnologias utilizadas
* TypeScript
* MySQL
* Docker
* Mocha, Chai e Sinon
## Como utilizar
1. Clone o repositório para a sua máquina.
2. Execute o comando docker-compose up para orquestrar o backend, o frontend e o banco de dados em containers Docker.
3. Abra o navegador em http://localhost:3000 para visualizar o frontend.
4. Utilize a API através das rotas disponíveis na porta 3001.
5. Execute o comando docker-compose down para encerrar os containers Docker.

## senhas

* Administrador: Email: admin@admin.com | Password: secret_admin
* Usuario: Email: user@user.com | Password: secret_user

## Conclusão
Foi um desafio e tanto desenvolver este projeto, mas fiquei muito satisfeito com o resultado final. Acredito que consegui cumprir todas as exigências do projeto e entregar uma API robusta e confiável para o frontend. Sinta-se à vontade para explorar o código e testar a API. Qualquer dúvida, estou à disposição.
