# base image
FROM python:3.8-alpine

# install dependencies
RUN apk update \
    && apk add build-base \
    && apk add --virtual build-deps gcc python3-dev musl-dev \
    && apk add postgresql-dev \
    && pip install psycopg2-binary \
    && apk del build-deps
ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# on defini le dossier par défaut du container et d'ailleur c'est pour ca que dans le requirements.txt je n'ai pas besoin de faire app/requirements.txt
# enfaite dans le containers on a le dossier racine et dedans on trouve le dossier app car c'est ce qu'on a copier plus bas
# c'est bizarre mais il faut définir workdir avant copy alors que le dossier app est créer après copy!!
WORKDIR /app

#copier mon dossier app en local dans le dossier racine du container
COPY / .
RUN pip install --upgrade pip
RUN pip install pipenv
RUN pip install -r requirements.txt
# RUN pipenv install mock
# depuis le dossier racine dans le container run le fichier requirements.txt
# RUN pipenv install -r requirements.txt
RUN pipenv install --dev

EXPOSE 8000
CMD ["python", "./getData/manage.py", "runserver", "0.0.0.0:8000"]