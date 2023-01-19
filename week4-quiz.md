# Azure Quiz

1. What is CI / CD? What Azure resources can we use to set up and implement CI / CD in our work environment?

- CI stands for **Continious Integration**
- CD stands for **Continious Deployment**
- We can use Azure Devops and Azure pipelines to implement CI/CD in our environment

2. What are two different ways to use Azure Redis Cache? Give an example for each method.

- Data cache : Databases are often too large to load directly into a cache. It's common to use the cache-aside pattern to load data into the cache only as needed.
- Content cache: Using an in-memory cache provides quick access to static content compared to backend datastores.

3. We want to monitor our application and collect metrics such as service availability and API response times. How can we do that?

- By using Application Insights: Application Insights is an extension of Azure Monitor and provides Application Performance Monitoring (also known as “APM”) features. APM tools are useful to monitor applications from development, through test, and into production

4. Azure apps oftentimes still need some form of authentication to access other resources (ex. API keys, email passwords, etc.) However, we cannot hardcode these values into our application due to security reasons. What are some ways to get these confidential values without hardcoding them into our application?

- By using KeyVault: Azure Key Vault can be used to Securely store and tightly control access to tokens, passwords, certificates, API keys, and other secrets

5. Our application needs a data store. What are some options we can use and what are some advantages / disadvantages?

- SQL Server
  - The advantage of the sql server is when you have tighly coupled data relation, sql can help you manage those relation easily with it's feature
  - The disadvantage of the sql server first is it's cost, it cost way more than the nosql server, and second is although it's relation is strong and really precise, it als takes a lot of time to build the schema and the interface.

- NoSQL Server
  - The advantage of the nosql server is it's really cheap, and it's loosely coupled data relation help you build minimum viable product fast, and you can easily change the structure as you want.
  - The disadvantage of the nosql server is when you try to scale your database and when you must regulate your data's relation to be tightly coupled, it's really hard to manage the data.

6. You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. What settings should you do?

- Using load balancer to make sure when the single data center fails, we can immediately open another VM in another center.

7. What is Azure app service plan? What can be set via app service plan?

- An App Service plan defines a set of compute resources for a web app to run. These compute resources are analogous to the server farm in conventional web hosting. One or more apps can be configured to run on the same computing resources (or in the same App Service plan).
  - Operating System (Windows, Linux)
  - Region (West US, East US, etc.)
  - Number of VM instances
  - Size of VM instances (Small, Medium, Large)
  - Pricing tier (Free, Shared, Basic, Standard,   - - Premium, PremiumV2, PremiumV3, Isolated, IsolatedV2)

8. What are the differences between Azure App Services and Azure Virtual Machines?

- Azure App Service belongs to "Platform as a Service" category of the tech stack, while Azure Virtual Machines can be primarily classified under "Virtual Machine".

9. You developed a new feature in your project and now want to deploy it to your development environment running in Azure Kubernetes Service (AKS) for further testing. How would you use Azure resources to automate this process? Briefly explain what each component does in your flow.

- We can use the Azure pipelines to automate the process, by using Azure pipelines, we can use Azure Devops to construct, test and do the CI/CD with it, With these two services, everytime we change our image, we can automatically push our image to the Azure Container Registry, the deploy the new images to our Azure Kubernetes service.

10. Azure IaaS, PaaS, SaaS What layer do you manage or provider manage(Applications, Data, Runtime, Middleware, OS, Virtualization, Servers, Storage, Network)? Which level is Azure Virtual Machine, Azure Key Vault, Azure Container Registry, Azure PostgreSQL DB, Azure Redis Cache, App Service, Outlook email

- IaaS: Azure Virtual Machine
- PaaS: Azure Key Vault, Azure Container Registry, Azure PostgreSQL DB, Azure Redis Cache, App Service
- SaaS: Outlook email
