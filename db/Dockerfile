FROM mongo
COPY ./dump/standard/ /docker-entrypoint-initdb.d/dump
COPY ./dump/step1.sh /docker-entrypoint-initdb.d