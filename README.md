## Iniciar o json-server

npm init

npm install -g json-server@0.17.0

json-server --watch db.json

É importante que seja permitida a execução de scripts externos no seu sistema Windows para que o json-server seja iniciado. Para isso acesse seu Windows PowerShell como adm e rode o seguinte comando "Set-ExecutionPolicy RemoteSigned", depois digite 's' para confirmar.

Após visualizar o projeto é uma boa prática desfazer o comando anterior para garantir a segurança do sistama usando o comando "Set-ExecutionPolicy Restricted", depois digite 's' para confirmar.
