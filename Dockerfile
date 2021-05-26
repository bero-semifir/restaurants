# Image de base pour nos containers
FROM node
# mise à jour de la ditribution
RUN apt-get update && apt-get upgrade -y
# Copie du package.json et package-lock.json
COPY package*.json .
# Installer les dépendances (ici en node donc avec npm)
RUN npm install
# Copie du reste de l'appli
COPY . .
# Exposition des ports, pour que l'appli puisse écouter
EXPOSE 3000
# exécution du container
CMD [ "node", "." ]