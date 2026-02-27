import { rejects } from "assert";
import fs from "fs";
import path, { resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productDbPath = path.join(__dirname, "../db/product.db.json");

export class Product {
    constructor(
        name,
        price,
        // id
    ) {
        this.name = name;
        this.price = price;
        // this.id = id;
    }

    async save() {
        return new Promise((resolve, rejects) => {

            fs.readFile(productDbPath, "utf8", (err, data) => {
                let productData = [];

                if (!err && data) {
                    try {
                        productData = JSON.parse(data);
                    } catch (parseError) {
                        console.error("Invalid JSON, resetting file.");
                        productData = [];
                    }
                }



                productData.push({
                    id: productData.length + 1,
                    name: this.name,
                    price: this.price
                });

                fs.writeFile(
                    productDbPath,
                    JSON.stringify(productData, null, 2),
                    "utf8",
                    (err) => {
                        if (err) {
                             rejects(err.message)
                             return
                        } else {
                            resolve("Data appended successfully");
                        }
                    }
                );
            });
        })

    }

    static findAll() {
        const data = fs.readFileSync(productDbPath, "utf-8")

        return JSON.parse(data)
    }
}