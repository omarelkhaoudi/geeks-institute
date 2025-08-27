import psycopg2

def connect():
    return psycopg2.connect(
        dbname="neondb",           
        user="neondb_owner",       
        password='npg_m7Srzkbl4uMV',
        host='ep-super-flower-ad9bqcpa-pooler.c-2.us-east-1.aws.neon.tech',
        port="5432",
        sslmode="require"
    )
