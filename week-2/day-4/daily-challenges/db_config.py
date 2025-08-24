import psycopg2

def connect():
    return psycopg2.connect(
        dbname="countries_db",
        user="postgres",       
        password="root",  
        host="localhost",
        port="5432"
    )
