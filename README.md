Welcome to my first bot project! 

# PreRequisites

- NodeJS
- MySQL
- youtube-dl
- ts-node-dev
- TypeScript
- Python3

### Ubuntu/Flavours:
![Ubuntu](https://seeklogo.com/images/U/ubuntu-logo-8FDEC6A07B-seeklogo.com.png)
```
sudo apt-get install python3 && sudo apt-get install python3-pip
pip3 install youtube-dl
```

### Sequelize

In archive: https://github.com/joelvitorniino/niino-bot/blob/master/src/db/config/config.ts

Change the user field, password and to a database you want. So that Sequelize can create the command ban table!

After doing this run:
```
cd src/db
ts-node-dev init.ts
```

### Gtts
To install gtts execute:
```
pip3 install gtts
```

### Niino-Bot
#![Niino-Bot](https://instagram.fsdu11-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/242886219_588310472536218_255317743731962591_n.jpg?_nc_ht=instagram.fsdu11-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=nNiFx1kOubQAX-4wST6&edm=AABBvjUBAAAA&ccb=7-4&oh=446d6a947dba20998cf70ca513d433c9&oe=618B5A71&_nc_sid=83d603)

```
yarn
```

Execute yarn in folder root.

Or:

```
npm install
```

Execute API:
```
yarn start
```

Execute BOT:
```
yarn dev
```

After initialize your should scan the QR Code that appears on the screen.


Execute API Voice PT:
```
cd src/tts
python3 app.py
```

### Issue
Any questions that arise regarding the form of use, leave your question in the "Issue" tab.
