import "reflect-metadata"; 
import { createConnection } from "typeorm";
import { Tedis } from "tedis";
import logger from "../src/shared/Logger";

export async function initializeDB(): Promise<void> { 
    await createConnection();
};

