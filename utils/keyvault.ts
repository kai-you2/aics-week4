import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

console.log("Connecting to KeyVault ....");
const credential = new DefaultAzureCredential();

// Build the URL to reach your key vault
const url = `https://bootcampkaikeyvault.vault.azure.net`;

const client = new SecretClient(url, credential);
// Lastly, create our secrets client and connect to the service

console.log("Connecting to KeyVault successful");

const getConfig = async (secretName: string) => {
  return await client.getSecret(secretName);
};

export { getConfig };
