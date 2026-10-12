import fs from "fs";
import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";

const email = "admin@bansallawyers.com.au";
const password = "C00lins@278";

const env = Object.fromEntries(
  fs
    .readFileSync(".env.local", "utf8")
    .split(/\r?\n/)
    .filter((line) => line && !line.startsWith("#") && line.includes("="))
    .map((line) => {
      const index = line.indexOf("=");
      return [line.slice(0, index).trim(), line.slice(index + 1).trim()];
    })
);

const conn = await mysql.createConnection({
  host: env.MYSQL_HOST,
  port: Number(env.MYSQL_PORT || 3306),
  user: env.MYSQL_USER,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE,
});

const hash = await bcrypt.hash(password, 10);
const [existing] = await conn.query("SELECT id FROM admins WHERE email = ? LIMIT 1", [email]);

if (existing.length > 0) {
  await conn.query(
    `UPDATE admins
     SET password = ?, status = 1, first_name = COALESCE(NULLIF(first_name, ''), 'Admin'),
         updated_at = NOW()
     WHERE id = ?`,
    [hash, existing[0].id]
  );
  console.log(`updated ${existing[0].id}`);
} else {
  const [result] = await conn.query(
    `INSERT INTO admins (first_name, last_name, email, password, status, is_archived, created_at, updated_at)
     VALUES ('Admin', 'Bansal', ?, ?, 1, 0, NOW(), NOW())`,
    [email, hash]
  );
  console.log(`created ${result.insertId}`);
}

const [check] = await conn.query(
  "SELECT id, status, LEFT(password, 4) AS hash_prefix FROM admins WHERE email = ? LIMIT 1",
  [email]
);
console.log(JSON.stringify(check[0]));
await conn.end();
