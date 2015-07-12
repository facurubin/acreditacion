#Importe imagen de io.js vesion onbuild
FROM iojs:onbuild

#Copio el contenido de actual en la carperta /src de la imagen
COPY . /src

#Ejecuto npm para instalar dependecias
RUN cd /src; npm install

#Expongo el puerto 8080
EXPOSE 8080

#Ejecuto la app de node 
CMD ["node", "/src/server.js"]