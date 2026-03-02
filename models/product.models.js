import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productDbPath = path.join(__dirname, "../db/product.db.json");

export class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  async save() {
    return new Promise((resolve, reject) => {
      fs.readFile(productDbPath, "utf8", (err, data) => {
        let productData = [];

        if (!err && data) {
          try {
            productData = JSON.parse(data);
          } catch {
            console.error("Invalid JSON, resetting file.");
            productData = [];
          }
        }

        // Generate safer unique ID
        const newId =
          productData.length > 0
            ? Math.max(...productData.map((p) => p.id)) + 1
            : 1;

        productData.push({
          id: newId,
          name: this.name,
          price: this.price,
        });

        fs.writeFile(
          productDbPath,
          JSON.stringify(productData, null, 2),
          "utf8",
          (err) => {
            if (err) {
              reject(err.message);
            } else {
              resolve("Product saved successfully");
            }
          }
        );
      });
    });
  }

  static findAll() {
    try {
      if (!fs.existsSync(productDbPath)) {
        return [];
      }
      const data = fs.readFileSync(productDbPath, "utf8");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  static async deleteOne(id) {
    return new Promise((resolve, reject) => {
      fs.readFile(productDbPath, "utf8", (err, data) => {
        if (err) return reject("File not found");

        let productData = [];

        try {
          productData = JSON.parse(data);
        } catch {
          return reject("Invalid JSON format");
        }

        const filteredData = productData.filter(
          (product) => product.id !== Number(id)
        );

        if (filteredData.length === productData.length) {
          return reject("Product not found");
        }

        fs.writeFile(
          productDbPath,
          JSON.stringify(filteredData, null, 2),
          "utf8",
          (err) => {
            if (err) reject(err.message);
            else resolve("Product deleted successfully");
          }
        );
      });
    });
  }
}