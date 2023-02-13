# Devsafio Program:

Project for DLAB program - Desafio Latam.
The project consists of an online platform oriented to the use of job search and recruitment in the IT industry. Based on the profile of each user, technical tests, surveys, code exhibits and support material. The website aims to connect thousands of applicants and companies

## 🤖 Team

### Technical Leader:

TL: [José Campos](https://github.com/josecamposhz)

### Frontend

FE: [Francisco D. Molina](https://github.com/TheFranciscoMolina)  
FE: [Eliecer Calderon](https://github.com/eliecergonzalez2021)  
FE: [Irani Romero](https://github.com/iranimromero)  
FE: [Marcia Alegria](https://github.com/marciaalegria)  
FS: [Daniela Hernández](https://github.com/DanyBeth-Dev)


### Backend

FS: [Veronica Caro](https://github.com/vecarope)    
FS: [Rodrigo Quezada Candia](https://github.com/DarkKapo)  
FS: [Felipe Gatica L](https://github.com/FelipeGaticaL)  
FS: [Benjamin Padros](https://github.com/bpadros) 


## 🧰 Dependencies    

This project was built mainly whith the following technologies: 
          
### Backend 

- Javascript   
- Node.js   
- Express     
- [Docker](https://www.docker.com/)   
- [Sequelize](https://sequelize.org/)   
- PostgreSQL 

### Frontend

- Javascript    
- React.js  
- Tailwind CSS
- Formik & Yup       

## 🎯 Running Proyect 

### Frontend 

```
npm install 
npm run serve
```

 ### Backend

 - Check the package.json file for `npm` commands 
  ```
  npm install
 ```

To run this project you previously need to install:

- `docker` & `docker-compose`

### Running the App with Docker

#### Create the container's network

```
make network
```

#### Starting the containers

```
make run
```

#### Access the container through SSH

```
make enter
```

## ⚙ Features 

- Definine database diagrams and business rules
- Define Frontend & Backend architecture
- Encryption of passwords with Bcrypt
- User authentication with JWT.
- Create API
- Design propose using Figma
- Protected routes both in backend and frontend
- React Context and Hooks Implementation
- User registration and profile management
- User sessions expiring in a short period of time
- Use of interceptors with Axios
- Implement WEB and Mobiles views
- Backend and frontend deployment

## ♻ Flow of users according to their status:

- When the user registers => his status is "active".
- If a user with active status logs in => we redirect him/her to the application form.
- If the user completes the application form => the status changes to "job ready".
- If the user with job ready status logs in => we redirect to the user's welcome view
- If the user logging in is admin => redirect to admin welcome view

## 🔑 Types of roles and actions:

- User and Administrator.
- The user can register
- The user can create his profile as a candidate
- The user can modify/update the profile.
- The user can demonstrate the level of his knowledge by means of tests.
- The admin can see the list of all registered users.
- The admin can export user data in an excel file.