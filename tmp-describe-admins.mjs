import fs from "fs";
import mysql from "mysql2/promise";

for (const line of fs.readFileSync(".env.local", "utf8").split(/\n/)) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (!m) continue;
  let v = m[2].trim();
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
  if (!process.env[m[1]]) process.env[m[1]] = v;
}

const conn = await mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT || 3306),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});
const [cols] = await conn.query("SHOW COLUMNS FROM admins");
console.log(
  JSON.stringify(
    cols.map((c) => ({ Field: c.Field, Type: c.Type, Null: c.Null, Default: c.Default })),
    null,
    2
  )
);
const [sample] = await conn.query(
  "SELECT id, email, status FROM admins WHERE LOWER(email) = 'admin@bansallawyers.com.au' LIMIT 1"
);
console.log("admin row", JSON.stringify(sample));
await conn.end();
