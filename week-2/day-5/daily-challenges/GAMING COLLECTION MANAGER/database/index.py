import psycopg2
from psycopg2.extras import RealDictCursor

def get_connection():
    conn = psycopg2.connect(
        host='ep-winter-wave-adaluruz-pooler.c-2.us-east-1.aws.neon.tech',
        dbname='neondb',
        user='neondb_owner',
        password='npg_GMasRIN5rCP0',
        sslmode='require'
    )
    return conn
