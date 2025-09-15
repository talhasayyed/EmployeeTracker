import sqlite3
import pandas as pd

# Paths
csv_file = "Tasks.csv"
db_file = "db/project_tracking.db"
table_name = "Tasks"  # change if needed

# Load CSV with pandas
df = pd.read_csv(csv_file)

# Connect to database
conn = sqlite3.connect(db_file)

# Insert into table
df.to_sql(table_name, conn, if_exists="append", index=False)

conn.close()
print(f"Inserted {len(df)} rows into {table_name}")
