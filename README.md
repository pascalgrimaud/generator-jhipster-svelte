# Svelte Hipster

[![Dependency Status][daviddm-image]][daviddm-url] [![code style: prettier][prettier-image]][prettier-url]

> Generate cybernetically enhanced JHipster web applications

:construction: Under active development

<p align="center" valign="middle" height="100%">
  <a href="https://www.jhipster.tech/" target="_blank">
    <img alt="JHipster"  width="25%" src="https://github.com/jhipster/jhipster-artwork/blob/master/logos/JHipster%20RGB-small100x25px.png?raw=true">
  </a>
	:heart:
  <a href="https://svelte.dev" target="_blank">
    <img alt="Svelte JS" width="25%" src="https://svelte.dev/svelte-logo-horizontal.svg">
  </a>
  :heart:
  <a href="https://tailwindcss.com/" target="_blank">
    <img alt="Tailwind CSS" width="25%" src="https://refactoringui.nyc3.cdn.digitaloceanspaces.com/tailwind-logo.svg">
  </a><br>
</p>

## Introduction

This is a [JHipster](https://www.jhipster.tech/) blueprint, that intends to use [Sapper](https://sapper.svelte.dev/) / [Svelte](https://svelte.dev/) as the client side development framework.

## Prerequisites

This guide assumes that you have already setup [JHipster](https://www.jhipster.tech/installation/) on your workstation.

## Installation

To install the blueprint, run below command:

```bash
npm install -g generator-jhipster-svelte
```

To update the blueprint, run below command:

```bash
npm update -g generator-jhipster-svelte
```

## Usage

To use the blueprint, run the below command:

```bash
jhipster --blueprints svelte
```

## Docker development

### Early adopters

To develop against the latest code, follow below steps:

-   Clone the repository and build the docker image:

```sh
git clone https://github.com/jhipster/generator-jhipster-svelte.git
cd generator-jhipster-svelte

docker build -t jhipster/svelte-hipster:latest .
```

-   Create a new directory for your application and run the below command to generate the application:

```sh
mkdir svelte-app && cd svelte-app

docker run -it --rm -v $PWD:/app jhipster/svelte-hipster
```

-   You can also run the generated application from within the container. Following examples consider `maven` as the build tool:

    -   To run unit test cases, use the command:

    ```sh
    docker run -it --rm -v $PWD:/app -v ~/.m2:/home/node/.m2 --entrypoint ./mvnw jhipster/svelte-hipster clean test
    ```

    -   To start the application using the default `dev` profile, use the command:

    ```sh
    docker run -it --rm -v $PWD:/app -v ~/.m2:/home/node/.m2 -p 8080:8080 --entrypoint ./mvnw jhipster/svelte-hipster -DskipTests
    ```

    Access application with http://localhost:8080/

-   If you would like to access the container file system, you can also attach a bourne shell:

```sh
docker run -it --rm -v $PWD:/app -v ~/.m2:/home/app/.m2 --entrypoint sh jhipster/svelte-hipster
```

## :hammer_and_wrench: Development

To setup your development environment, follow below steps:

1. Link svelte blueprint globally:

```bash
cd generator-jhipster-svelte
npm link
```

2. Link a development version of JHipster to your blueprint (optional: required only if you want to use a non-released JHipster version, like the master branch or your own custom fork)

```bash
cd generator-jhipster
npm link

cd generator-jhipster-svelte
npm link generator-jhipster
```

3. Create a new directory for your application and link `JHipster` and `svelte` blueprint.

```bash
mkdir my-app && cd my-app

npm link generator-jhipster-svelte
npm link generator-jhipster (Optional: Needed only if you are using a non-released JHipster version)

jhipster --blueprints svelte

```

## License

Apache-2.0 © [Vishal Mahajan](https://twitter.com/vishal423)

[daviddm-image]: https://david-dm.org/jhipster/generator-jhipster-svelte.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/jhipster/generator-jhipster-svelte
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier-url]: https://github.com/prettier/prettier
