# CafeNearU

## Features
- Shops
    - Homepage displaying shop profile randomly
    - Shop profiles containing basic information, menu and current status
    - Fliter search
    - A web crawler can extract data from Google search results based on shop names
- Customers
- Developers
    - A Discord bot Monitoring server health 
    - Use commitizen to standardize commit messages


## Database Schema
![Database Schema](<Cafe Near U (After).png>)

## System Design
![System Flowchart](<截圖 2023-08-24 下午1.53.24.png>)

## Run in Docker:
Step1: Pull the repo and Switch to branch backend_dev
```bash
git clone https://github.com/cafenearu/groupI-CafeNearU.git
git checkout backend_dev
```
Step2: Create .env file for the program 
```bash
cd groupI-CafeNearU/BackEnd/server
vim .env
```
Step3: Run the program
```bash
cd node app.js
```

## Tech stack
- Node.js
- Amazon RDS
- Nginx
- Amazon EC2
