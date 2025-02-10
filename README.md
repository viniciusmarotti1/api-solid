#App

Gympass App

#RFs
[X] Deve ser possivel se cadastrar
[X] Deve ser possivel se autenticar
[X] Deve ser possivel obter o perfil de um usuário logado
[X] Deve ser possivel obter o numero de check-ind realizados pelo usuario logado
[X] Deve ser possivel o usuário obter seu histórico de check-ins
[X] Deve ser possivel o usuário buscar academias próximas (até 10KM)
[X] Deve ser possivel o usuário buscar academias pelo nome
[X] Deve ser possivel o usuário realizar check-in em uma academia
[X] Deve ser possivel validar o check-in de um usuário
[X] Deve ser possivel cadastrar uma academia

RNs
[X] Usuário nao deve poder se cadastrar com um email duplicado
[X] Usuário nao pode fazer 2 check-ins no mesmo dia
[X] Usuário nao pode fazer check-in de nao estiver 100 metros da academia
[X] Check-in só pode ser validado até 20 minutos após criado
[ ] Check-in só pode ser validado por Adms
[ ] Academia só pode ser cadastrada por Adms

RNFs
[X] Senha do usuario criptografada
[X] Dados do App precisam estar em um Banco Postgres
[X] Todas lista de dados precisam estar paginadas com 20 itens por pagina
[ ] Usuário deve ser identificado por um JWT

# api-solid
