FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD=password

ENV MYSQL_DATABASE=records

ADD schema.sql /docker-entrypoint-initdb.d

EXPOSE 3306
