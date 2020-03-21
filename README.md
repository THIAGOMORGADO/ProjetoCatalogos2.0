
// Introdução para subir no git

…or create a new repository on the command line
echo "# ProjetoCatalogos2.0" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:THIAGOMORGADO/ProjetoCatalogos2.0.git
git push -u origin master
                
…or push an existing repository from the command line
git remote add origin git@github.com:THIAGOMORGADO/ProjetoCatalogos2.0.git
git push -u origin master
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.




"# ProjetoCatalogos2.0" 

git remote add origin git@github.com:THIAGOMORGADO/ProjetoCatalogos2.0.git <- Clonar Repositorio Remoto

git push -u origin master <- Da o primeiro Push no repositorio Remoto 

git push origin master <- // Comando Para subir Arquivo no repositorio Remoto 

git add -A <- adicionando todos os arquivos do Projetos

git status <- ele mostra todos os arquivo trucando em verde 

git commit -am 'inserir commit' <- comando para inserir no git Local maquina


