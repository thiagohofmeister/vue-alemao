#!/bin/bash
set -e # termina o script com um código diferente de 0 se alguma coisa falhar

# roda o script de build da nossa aplicação
npm run build

# pull requests e commits para outras branches diferentes da master 
# não devem fazer o deploy, isso é opcional caso queira deletar as próximas 6 linhas
# fique a vontade
SOURCE_BRANCH="master"

if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy."
    exit 0
fi

# entre na pasta onde está o build do seu projeto e inicie um novo repositório git
cd build
scp ./* thiagohof@thiagohof.com.br:www/ . -phof120540
