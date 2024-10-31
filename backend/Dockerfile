FROM python:3.10-slim
LABEL maintainer="jantoniomenossi@gmail.com"

WORKDIR /app

# Copia o código do app Django para o diretório de trabalho
COPY requirements.txt /app/


# Instala as dependências
RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/

# Copia o arquivo .env para o diretório de trabalho
COPY .env /app/

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]