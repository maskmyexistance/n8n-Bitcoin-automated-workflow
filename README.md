# n8n-Bitcoin-automated-workflow


## 1. Background


## 2. Step by Step

### 2.1 Docker compose

git clone the project, cd to n8n-compose and type 
```bash
mkdir n8n_data
chown -R 1000:1000 n8n_data/
docker compose up
```

Once you have setup your account, create your first workflow
![Workflow](./n8n-compose/image/n8n-workflow.png)

### 2.2 Setup Outlook Event Trigger

To set up event trigger when OSL transaction email received, you need to create a Azure account with that email

Once you have created an Azure account, Create a App Registration in Azure Portal, paste the client id and client secret into Outlook Trigger

![Client ID](./n8n-compose/image/clientid.png)
![Client Secret](./n8n-compose/image/clientsecret.png)

If both ID and secret are correctly set, you should able fetch latest email from inputted email address
![Test Email](./n8n-compose/image/testemail.png)