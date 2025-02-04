/* eslint-disable no-console */
import "dotenv/config";
import invariant from "~/utils/invariant";
import { sql } from "~/db/sql";

const discordId = process.argv[2]?.trim();

invariant(discordId, "discord id is required (argument 1)");

sql
  .prepare('delete from "User" where discordId = @discordId')
  .run({ discordId });

console.log(`Deleted user with discord id: ${discordId}`);
